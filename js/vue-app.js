// Vue.js uygulaması sadece iletişm sayfasındaki div yüklüyse çalışır
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById('vue-app')) {
        const { createApp } = Vue;

        createApp({
            data() {
                return {
                    formData: {
                        adSoyad: '',
                        email: '',
                        telefon: '',
                        cinsiyet: '',
                        sehir: '',
                        konular: [],
                        mesaj: ''
                    },
                    vueErrors: []
                };
            },
            methods: {
                validateVue() {
                    this.vueErrors = [];

                    // Ad Soyad Kontrolü
                    if (!this.formData.adSoyad.trim()) {
                        this.vueErrors.push('Ad Soyad alanı boş olamaz.');
                    }

                    // Email Format Kontrolü
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!this.formData.email.trim()) {
                        this.vueErrors.push('E-mail alanı boş olamaz.');
                    } else if (!emailRegex.test(this.formData.email)) {
                        this.vueErrors.push('Lütfen geçerli bir e-mail formatı giriniz.');
                    }

                    // Telefon Sadece Rakam Kontrolü
                    const phoneRegex = /^[0-9]+$/;
                    if (!this.formData.telefon.trim()) {
                        this.vueErrors.push('Telefon alanı boş olamaz.');
                    } else if (!phoneRegex.test(this.formData.telefon)) {
                        this.vueErrors.push('Telefon numarası sadece rakam içermelidir.');
                    }

                    // Cinsiyet Kontrolü
                    if (!this.formData.cinsiyet) {
                        this.vueErrors.push('Lütfen cinsiyet seçiniz.');
                    }

                    // Mesaj Kontrolü
                    if (!this.formData.mesaj.trim()) {
                        this.vueErrors.push('Mesaj alanı boş bırakılamaz.');
                    }

                    // Hata yoksa formu submit et
                    if (this.vueErrors.length === 0) {
                        this.$refs.formRef.submit();
                    }
                }
            }
        }).mount('#vue-app');
    }
});
