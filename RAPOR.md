# WEB TEKNOLOJİLERİ DERSİ  
# BİREYSEL WEB UYGULAMASI PROJE RAPORU

---

<br><br><br>

## KAPAK SAYFASI

| | |
|---|---|
| **Üniversite** | Sakarya Üniversitesi |
| **Fakülte** | Mühendislik Fakültesi |
| **Bölüm** | Bilgisayar Mühendisliği |
| **Ders Adı** | Web Teknolojileri |
| **Öğretim Elemanı** | [Hoca adı soyadı] |
| **Öğrenci Adı Soyadı** | Ruhin Safarov |
| **Öğrenci Numarası** | b241210559 |
| **E-posta** | b241210559@sakarya.edu.tr |
| **Proje Adı** | MyWebProject – Kişisel Tanıtım Web Sitesi |
| **Teslim Tarihi** | 15.05.2026 |

**GitHub Repository:**  
https://github.com/ruhinnn/bakuuu

**Canlı Site (Hosting) Linki:**  
[Buraya 000webhost / InfinityFree vb. adresini yaz — örnek: https://kullaniciadi.000webhostapp.com]

**Yerel Geliştirme Ortamı (test):**  
http://localhost/bakuuu/

---

## 1. PROJENİN AMACI

Bu proje, Web Teknolojileri dersi kapsamında HTML5, CSS3, Bootstrap, JavaScript, Vue.js ve PHP kullanılarak geliştirilmiş; hem kişisel tanıtım hem de dersin teknik gereksinimlerini karşılayan responsive bir web uygulamasıdır. Proje; semantik HTML yapısı, harici stil dosyası, form doğrulama, REST API entegrasyonu ve sunucu taraflı PHP işlemlerini bir arada sunmaktadır.

---

## 2. KULLANILAN TEKNOLOJİLER

| Katman | Teknoloji |
|--------|-----------|
| Yapı | HTML5 (semantik etiketler) |
| Stil | CSS3, Bootstrap 5.3.2 |
| İstemci | JavaScript, Vue.js 3 (CDN) |
| Sunucu | PHP |
| Sürüm kontrolü | Git, GitHub |
| Geliştirme | VS Code, XAMPP (Apache) |

---

## 3. SAYFA İÇERİKLERİ VE EKRAN GÖRÜNTÜLERİ

> **Not:** Her başlığın altına ilgili sayfanın ekran görüntüsünü Word/PDF dosyana ekleyin. (Win + Shift + S ile alabilirsiniz.)

---

### 3.1. Hakkında (Giriş) — `index.html`

**Ekran görüntüsü:**

*[Buraya index.html ekran görüntüsünü yapıştır]*

**Açıklama:**  
Sayfa sahibi Ruhin Safarov tanıtılmaktadır. Profil fotoğrafı, hobiler (boks, futbol, satranç vb.), YouTube üzerinden gömülü favori video alanı ve GitHub / LinkedIn / Twitter bağlantıları yer almaktadır. Bootstrap ile responsive hero bölümü kullanılmıştır.

---

### 3.2. Özgeçmiş (CV) — `cv.html`

**Ekran görüntüsü:**

*[Buraya cv.html ekran görüntüsünü yapıştır]*

**Açıklama:**  
Eğitim bilgileri `header`, `section`, `article` ve `aside` semantik etiketleri ile yapılandırılmıştır. Sakarya Üniversitesi Bilgisayar Mühendisliği ve lise bilgileri, teknik yetenekler listesi, iletişim bilgileri ve tanıtım videosu bulunmaktadır.

---

### 3.3. Şehrim — `sehrim.html`

**Ekran görüntüsü:**

*[Buraya sehrim.html ekran görüntüsünü yapıştır — slider dahil]*

**Açıklama:**  
Bakü şehri tanıtılmaktadır. Nüfus ve gezilecek yerler metin olarak verilmiştir. Bootstrap carousel ile 4 adet tıklanabilir görsel slider (Alev Kuleleri, Haydar Aliyev Merkezi, İçerişehir/Kız Kulesi, Bakü Bulvarı) kullanılmıştır.

---

### 3.4. Mirasımız — `miras.html`

**Ekran görüntüsü:**

*[Buraya miras.html ekran görüntüsünü yapıştır]*

**Açıklama:**  
Bakü’nün tarihi simgesi Kız Kulesi (Qız Qalası) detaylandırılmıştır. Tarihçe, UNESCO bilgisi, önemli özellikler listesi, yerel görsel ve YouTube belgesel videosu yer almaktadır.

---

### 3.5. İlgi Alanlarım (API) — `api.html`

**Ekran görüntüsü:**

*[Buraya api.html ekran görüntüsünü yapıştır — karakter kartları görünsün]*

**Açıklama:**  
Rick and Morty REST API (`https://rickandmortyapi.com/api/character`) kullanılarak JavaScript `fetch` ile canlı veri çekilmektedir. İlk 8 karakter; isim, görsel, tür ve durum bilgisi ile kartlar halinde listelenmektedir. Yükleme sırasında spinner gösterilmektedir.

---

### 3.6. İletişim — `iletisim.html`

**Ekran görüntüsü:**

*[Buraya iletisim.html form ekran görüntüsünü yapıştır]*

**Açıklama:**  
İletişim formunda text, e-posta, telefon, radio (cinsiyet), select (şehir), checkbox (konu) ve textarea (mesaj) alanları bulunmaktadır. Form doğrulaması iki ayrı butonla yapılmaktadır:

- **Gönder (Native JS Denetimi)** — `main.js` içindeki `validateNative()` fonksiyonu  
- **Gönder (Vue.js Denetimi)** — `vue-app.js` içindeki `validateVue()` metodu  

Boş alan, e-posta formatı, telefon (sadece rakam), şehir ve konu kontrolleri uygulanmaktadır. HTML5 `required` tek başına kullanılmamıştır (`novalidate`).

---

### 3.7. İletişim Form Sonucu (PHP) — `form-sonuc.php`

**Ekran görüntüsü:**

*[Buraya form gönderiminden sonra açılan tablo sayfasının ekran görüntüsünü yapıştır]*

**Açıklama:**  
Form POST ile `form-sonuc.php` sayfasına gönderilmektedir. PHP, gelen tüm alanları `htmlspecialchars` ile güvenli şekilde işleyerek Bootstrap tablosunda ekrana yazdırmaktadır.

---

### 3.8. Giriş (Login) — `login.html` ve `login-islem.php`

**Ekran görüntüsü (giriş formu):**

*[Buraya login.html ekran görüntüsünü yapıştır]*

**Ekran görüntüsü (başarılı giriş):**

*[Buraya “Hoşgeldiniz b241210559” ekran görüntüsünü yapıştır]*

**Açıklama:**  
Öğrenci girişi için e-posta (`b241210559@sakarya.edu.tr`) ve şifre (öğrenci numarası: `b241210559`) kullanılmaktadır. JavaScript ile boş alan ve e-posta formatı kontrol edilir. PHP tarafında `@sakarya.edu.tr` domain kontrolü ve şifre–öğrenci numarası eşleşmesi yapılır. Başarılı girişte “Hoşgeldiniz [Öğrenci No]” mesajı gösterilir; hatalı girişte kullanıcı `login.html` sayfasına yönlendirilir.

---

## 4. PROJE DOSYA YAPISI

```
bakuuu/
├── index.html          (Hakkında)
├── cv.html             (Özgeçmiş)
├── sehrim.html         (Şehrim)
├── miras.html          (Mirasımız)
├── api.html            (İlgi Alanlarım - API)
├── iletisim.html       (İletişim)
├── login.html          (Giriş)
├── form-sonuc.php      (Form işleme)
├── login-islem.php     (Login işleme)
├── css/style.css       (Harici stil)
├── js/main.js          (Native JS, API, login)
├── js/vue-app.js       (Vue.js form doğrulama)
└── images/             (Yerel görseller)
```

---

## 5. GITHUB VE GELİŞİM SÜRECİ

**Repository:** https://github.com/ruhinnn/bakuuu

Proje gelişimi GitHub üzerinde commit’ler ile takip edilmiştir. Farklı günlerde yapılan push işlemleri ile projenin zaman içindeki gelişimi görülebilmektedir.

*[İsteğe bağlı: GitHub commit geçmişi ekran görüntüsü ekle]*

---

## 6. CANLI YAYIN (HOSTING)

Proje, ücretsiz hosting servisi üzerinden internete açılmıştır.

**Canlı adres:** [Hosting linkini buraya yaz]

**Hosting sağlayıcı:** [Örn. 000webhost / InfinityFree]

*[Canlı sitenin ana sayfa ekran görüntüsünü ekle]*

---

## 7. SONUÇ

Bu proje kapsamında semantik HTML5, responsive Bootstrap tasarımı, harici CSS, JavaScript ve Vue.js ile çift katmanlı form doğrulama, PHP ile sunucu taraflı form ve login işlemleri, REST API entegrasyonu başarıyla uygulanmıştır. Tüm sayfalar bir menü yapısı altında birleştirilmiş; proje hem yerel (XAMPP) hem de canlı ortamda test edilmiştir.

---

**Hazırlayan:** Ruhin Safarov — b241210559  
**Tarih:** 15.05.2026
