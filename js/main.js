// ====== YOUTUBE GÖMME (file:// ve http için) ======
function initYoutubeEmbeds() {
    document.querySelectorAll(".youtube-embed[data-youtube-id]").forEach((container) => {
        const id = container.dataset.youtubeId;
        const title = container.dataset.youtubeTitle || "YouTube video";

        if (location.protocol === "file:") {
            container.classList.remove("ratio", "ratio-16x9", "ratio-21x9");
            container.innerHTML = `
                <div class="bg-dark text-white rounded text-center p-4 p-md-5">
                    <i class="fab fa-youtube fa-3x text-danger mb-3"></i>
                    <h5 class="mb-3">${title}</h5>
                    <a href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener noreferrer"
                        class="btn btn-danger btn-lg">
                        <i class="fas fa-play me-2"></i>Videoyu YouTube'da Aç
                    </a>
                    <p class="text-white-50 small mt-3 mb-0">
                        Sayfa içinde oynatmak için proje klasöründeki <strong>start.bat</strong> dosyasına çift tıklayın.
                    </p>
                </div>`;
            return;
        }

        container.innerHTML = `
            <iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0"
                title="${title}"
                referrerpolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                style="width:100%;height:100%;border:0;"></iframe>`;
    });
}

// ====== API SAYFASI İŞLEMLERİ & GENEL KONTROLLER ======
document.addEventListener("DOMContentLoaded", () => {
    initYoutubeEmbeds();

    // Login Sayfası URL Hata Yakalama
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('error') && document.getElementById('loginError')) {
        const errorAlert = document.getElementById('loginError');
        errorAlert.style.display = 'block';
        if (urlParams.get('error') === 'invalid') {
            errorAlert.innerHTML = 'Hatalı e-mail veya şifre girdiniz.';
        } else if (urlParams.get('error') === 'empty') {
            errorAlert.innerHTML = 'Lütfen tüm alanları doldurunuz.';
        }
    }

    // Sadece api.html sayfasında çalışsın
    if (window.location.pathname.includes('api.html')) {
        const container = document.getElementById('api-container');
        const loader = document.getElementById('loader');

        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                loader.style.display = 'none';
                container.style.display = 'flex';
                
                // İlk 8 karakteri listele
                const characters = data.results.slice(0, 8);
                
                characters.forEach(char => {
                    const statusColor = char.status === 'Alive' ? 'text-success' : (char.status === 'Dead' ? 'text-danger' : 'text-secondary');
                    
                    const cardHTML = `
                        <div class="col-md-3 col-sm-6">
                            <div class="custom-card card h-100">
                                <img src="${char.image}" class="card-img-top" alt="${char.name}">
                                <div class="card-body text-center">
                                    <h5 class="card-title fw-bold">${char.name}</h5>
                                    <p class="card-text mb-1"><strong>Tür:</strong> ${char.species}</p>
                                    <p class="card-text fw-bold ${statusColor}"><i class="fas fa-circle me-1" style="font-size:0.7em;"></i>${char.status}</p>
                                </div>
                            </div>
                        </div>
                    `;
                    container.innerHTML += cardHTML;
                });
            })
            .catch(error => {
                loader.innerHTML = '<p class="text-danger">Veri çekilirken bir hata oluştu.</p>';
                console.error("API Error:", error);
            });
    }
});

// ====== NATIVE JS İLE İLETİŞİM FORMU DENETİMİ ======
function validateNative() {
    const errorAlert = document.getElementById('errorAlert');
    const adSoyad = document.getElementById('adSoyad').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefon = document.getElementById('telefon').value.trim();
    const cinsiyetNodes = document.getElementsByName('cinsiyet');
    const mesaj = document.getElementById('mesaj').value.trim();

    let errors = [];

    // Boş alan kontrolü
    if (adSoyad === '') errors.push('Ad Soyad alanı boş bırakılamaz.');
    
    // Email kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        errors.push('E-mail alanı boş bırakılamaz.');
    } else if (!emailRegex.test(email)) {
        errors.push('Geçerli bir E-mail adresi giriniz.');
    }

    // Telefon (Sadece Rakam) kontrolü
    const phoneRegex = /^[0-9]+$/;
    if (telefon === '') {
        errors.push('Telefon alanı boş bırakılamaz.');
    } else if (!phoneRegex.test(telefon)) {
        errors.push('Telefon numarası sadece rakamlardan oluşmalıdır.');
    }

    // Cinsiyet seçimi kontrolü
    let isCinsiyetSelected = false;
    for (let i = 0; i < cinsiyetNodes.length; i++) {
        if (cinsiyetNodes[i].checked) isCinsiyetSelected = true;
    }
    if (!isCinsiyetSelected) errors.push('Lütfen cinsiyet seçiniz.');

    // Şehir kontrolü
    const sehir = document.getElementById('sehir').value;
    if (!sehir) errors.push('Lütfen bir şehir seçiniz.');

    // Konu (en az bir checkbox)
    const konuChecked = document.querySelectorAll('input[name="konu[]"]:checked');
    if (konuChecked.length === 0) errors.push('En az bir iletişim nedeni seçiniz.');

    // Mesaj kontrolü
    if (mesaj === '') errors.push('Mesaj alanı boş bırakılamaz.');

    if (!errorAlert) return;

    // Hata gösterimi veya formu gönderme
    if (errors.length > 0) {
        errorAlert.style.display = 'block';
        errorAlert.innerHTML = '<strong>Hata (Native JS):</strong><ul class="mb-0 mt-2"><li>' + errors.join('</li><li>') + '</li></ul>';
        errorAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        errorAlert.style.display = 'none';
        document.getElementById('contactForm').submit();
    }
}

// İletişim sayfası: Native JS butonu
document.addEventListener('DOMContentLoaded', () => {
    const btnNative = document.getElementById('btnNative');
    if (btnNative) {
        btnNative.addEventListener('click', validateNative);
    }
});

// ====== NATIVE JS İLE LOGIN FORMU DENETİMİ ======
function validateLogin(event) {
    const errorAlert = document.getElementById('loginError');
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let errors = [];

    if (email === '') {
        errors.push('E-mail alanı boş bırakılamaz.');
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push('Geçerli bir E-mail formatı giriniz.');
        }
    }

    if (password === '') {
        errors.push('Şifre alanı boş bırakılamaz.');
    }

    if (errors.length > 0) {
        if(event) event.preventDefault(); // Form gönderimini durdur
        errorAlert.style.display = 'block';
        errorAlert.innerHTML = errors.join('<br>');
        return false;
    }
    
    errorAlert.style.display = 'none';
    return true;
}
