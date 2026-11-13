# 🌌 Puzzle Galaxies

Simetrik galaksi mantık bulmacası (**Tentai Show / Spiral Galaxies**) — Masaüstü (Windows) ve Mobil (Android) İstemcisi.

---

## 🏆 Liderlik Tablosu (İlk 5 Oyuncu)

<!-- LEADERBOARD_START -->
| Sıra | Oyuncu | Toplam Puan | Çözülen Bulmaca | Blitz Rekoru | Son Çözülen Bölüm |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **1.** | **Diony** | **1710 Puan** | 5 | 0 | Günlük Bulmaca (2026-11-13) |
| **2.** | **BeratUtq** | **255 Puan** | 1 | 0 | 5×5 • 1-1 |
<!-- LEADERBOARD_END -->

---

## 📥 İndir ve Kur

Her yeni sürüm hem **Windows kurulum paketi** hem **Android APK** olarak derlenir ve aynı anda **[GitHub Releases](https://github.com/Diony-source/puzzle-galaxies-releases/releases/latest)** sayfasına eklenir:

### 🪟 Windows (Setup.exe)
- **[Puzzle-Galaxies-Setup.exe İndir (Son Sürüm)](https://github.com/Diony-source/puzzle-galaxies-releases/releases/latest/download/Puzzle-Galaxies-Setup.exe)**
- İndirdiğiniz kurulum dosyasına çift tıklayın; oyun otomatik olarak kurulup masaüstünüze kısayol ekler.
- **Tam Otomatik Güncelleme:** Oyun açılışta (ve ana menüde arka planda) yeni sürüm algıladığında kendiliğinden indirip SHA-256 doğrulaması yaparak otomatik güncellenir; tam kurulum gerektiğinde yeni kurulum paketini otomatik indirip çalıştırır.

### 📱 Android (İmzalı Release APK — Ücretsiz Doğrudan Kurulum)
- **[puzzle-galaxies.apk İndir (Son Sürüm)](https://github.com/Diony-source/puzzle-galaxies-releases/releases/latest/download/puzzle-galaxies.apk)**
- Google Play Store hesabı gerekmeden doğrudan telefonunuza indirip kurabilirsiniz; `v1.8.1` itibarıyla **özel Release anahtarıyla imzalanmış** (`debuggable=false`) ve yalnızca `INTERNET` izni isteyen temiz sürüm olarak yayınlanır:
  1. Eski bir `v1.7.x` / `v1.8.0` test (debug) sürümü yüklüyse tek seferlik kaldırıp yeni APK'yı açın.
  2. Play Store dışı kurulum olduğundan Android *"Ayrıntılar → Yine de yükle"* veya tarayıcıya *"Bilinmeyen kaynaklara izin ver"* sorarsa onaylayın.
  3. **Otomatik Oyun İçi Güncelleme (`LiveUpdater` OTA):** Kurulum sonrası çıkan oyun/arayüz yamalarını APK indirmeden uygulama içinde SHA-256 doğrulamasıyla otomatik alır.
- Tüm sürümlere ve `SHA256SUMS.txt` doğrulama özetlerine **[GitHub Releases](https://github.com/Diony-source/puzzle-galaxies-releases/releases)** sayfasından ulaşabilirsiniz.

---

## 🌟 Öne Çıkan Özellikler (v1.8.4)

- ☁️ **Bulut Hesabı & Cihazlar Arası Eşitleme (Nick + Şifre):**
  - Açılışta (veya Profil / Ayarlar menüsünden) yalnızca **Nick + Şifre** belirleyerek hesap oluşturabilir, aynı hesapla hem Windows uygulamasından hem Android APK'dan tüm puanlarınıza, başarımlarınıza ve çözülmüş gezegenlerinize anında erişebilirsiniz (dilerseniz **Misafir Olarak Devam Et** ile çevrimdışı/yerel de oynayabilirsiniz).

- 🔄 **Çift Platform Tam Otomatik Güncelleme & Çevrimdışı Sürüm Kilidi:**
  - **72 Saat Çevrimdışı İzin & Eski Sürüm Kilidi:** En güncel sürümü çevrimiçi doğrulayan oyuncular 72 saat boyunca internetsiz oynayabilir; yeni sürüm algılandığı anda ise cihaz interneti kapatsa dahi eski sürümde kalıcı olarak kilitlenir ve güncellemeyi zorunlu kılar.
  - **Otomatik Başlangıç & Ana Menü Kontrolü:** Hem masaüstü uygulaması hem Android APK yeni sürüm çıktığında beklemeden indirme ve SHA-256 bütünlük doğrulamasını otomatik başlatır.
  - **Android Canlı OTA (`LiveUpdater`):** Oyun/harita/UI güncellemelerinde yeni APK indirip kurmanıza gerek kalmadan dosyalar doğrudan uygulama içine indirilip WebView yenilenir; native güncelleme gerektiğinde uygulama içi indirici tetiklenir.
  - **Birleşik GitHub Releases Hattı:** Her yeni sürüm etiketinde hem `Puzzle-Galaxies-Setup.exe` hem `puzzle-galaxies.apk` hem de `SHA256SUMS.txt` aynı Release altında otomatik yayınlanır.
- 📱 **Mobil Uyumlu Dokunmatik Deneyim & Tam Ekran (Android Edge-to-Edge):**
  - Android telefonlarda sistem durum çubuğu ve navigasyon barı gizlenerek tam ekran başlar; `DisplayCutoutCompat` dinleyicisi kamera çentik yüksekliğini (`--safe-cutout-top` / `--safe-cutout-bottom`) otomatik ayarlar.
  - **2 Parmak Pinch-to-Zoom & Pan:** Yakınlaştırma ve serbest kaydırma doğrudan parmak hareketleriyle çalışır.
  - **Dokunmatik Araç Seçici (`Duvar` / `Bağlantı` / `Kaydır`):** Sağ tık gerektirmeden tek dokunuşla boşluk işareti (`×`), duvar veya serbest kaydırma (`Kaydır`) arasında geçiş yapılabilir; ayarlarda titreşim (**Dokunsal Geri Bildirim / Haptics**) açılıp kapatılabilir ve Android donanım **Geri** tuşu ekran/modal hiyerarşisini yönetir.
- 🛡️ **Temiz Skor Tablosu & Anti-Cheat:**
  - Yalnızca **gerçek oyuncuların** puanları GitHub `leaderboard.json` ve README İlk 5 tablosunda tutulur; otomatik QA testleri, `WebDriver` oturumları ve tester hesapları otomatik olarak dışlanır.
  - ECDSA P-256 imzalı skor doğrulaması ve `15×15` oda kodu paritesi.
- 🪐 **Kozmik Keşif Haritası (Cosmic Saga Map):** Candy Crush benzeri, uzay boşluğunda kıvrımlı yörüngelerle birbirine bağlanan 36 gezegenlik keşif rotası (`1-1` → `3-12`).
  - **3 Evre & 4 Orijinal Boyut:** 5×5 Karasal Gezegenler → 7×7 Okyanus Dünyaları → 10×10 Halkalı Gaz Devleri → 15×15 Süpernova Plazma Çekirdekleri (`🌀` Solucan Deliği geçişleri).
  - Akıllı kaydırma pozisyonu koruma ve kompakt üst/alt gezinme barı.
- 📱 **Alt Gezinme Barı (Bottom Dock) & Önizleme Modalları:**
  - 🪐 **Harita**, ⚔️ **1v1 Düello**, ⚡ **Blitz**, 📅 **Günlük** ve 🏆 **Sıralama** sekmeleri; Blitz ve Günlük sekmelerinde kişisel rekor/seri gösteren şık başlatma kartları ve ders-çıkış koruma onayları.
- 🔍 **İmleç Odaklı Zoom & Serbest Pan:**
  - Fare tekerleğiyle yakınlaştırma imlecin tam durduğu noktaya odaklanır; `0` tuşuyla anında %100 sıfırlama ve mobilde iki parmakla yakınlaştırma/kaydırma desteği.
- ⚡ **Galaksi Blitz & Canlı 1v1 Düello + Seyirci Arenası:**
  - 2 dakikalık Blitz modu (`×2.0` kombo çarpanı, net sonuç ekranı), tek başına oynarken duraklatma (`Pause`), canlı 1v1 rakip gerilim nabzı ve **Canlı İzle** seyirci arenası.
- 🛡️ **3 Aşamalı Akıllı Simetri:** `Oto Koy` → `Göster` → `Kapalı`.

---

## 📖 Nasıl Oynanır?

1. **Tek Merkez (`○`):** Tablodaki her hücre bir galaksiye ait olmalıdır. Duvarlarla çevrelediğiniz her kapalı bölgenin içinde **tam olarak 1 adet daire** bulunmalıdır.
2. **180° Dönel Simetri:** Her galaksinin şekli, kendi merkezi (`○`) etrafında **180° döndürüldüğünde** (baş aşağı çevrildiğinde) birebir aynı kalmalıdır.
3. **Otomatik Renklenme:** Bir galaksinin sınır duvarlarını doğru ve simetrik biçimde tamamladığınızda oyun o galaksiyi otomatik olarak renklendirir.
4. **Bilgisayar Kontrolleri (Fare & Klavye):**
   - **Sol Tık / Sürükle:** Duvar çiz veya kaldır.
   - **Sağ Tık / Sürükle:** Kenara boşluk (`×`) işareti koy.
   - **Fare Tekerleği:** İmlecin baktığı noktaya yakınlaştır / uzaklaştır.
   - **Orta Tık / Space + Sürükle / Alt + Sürükle:** Tahtayı kaydır (Pan).
   - **Ctrl + Z / Ctrl + Y:** Geri al / İleri al.
   - **S / H / 0 Tuşları:** Simetri modunu değiştir (`S`), akıllı ipucu al (`H`), zoom'u sıfırla (`0`).
5. **Mobil Kontroller (Dokunmatik & Android):**
   - **Tek Parmak Dokun / Sürükle:** Seçili araç moduna göre (`Duvar`, `Bağlantı ×` veya `Kaydır`) işlem yap; basılı tutup sürüklerken üst köşedeki yakınlaştırma büyütecinden çizgiyi net gör.
   - **2 Parmak Kıstırma / Sürükleme:** İstediğin noktaya yakınlaştır / uzaklaştır ve tahtayı kaydır.
   - **Android Geri Tuşu:** Açık pencereleri/modalları kapatır, oyundan haritaya döner, ana menüde çıkış onayı ister.

---

## 🛠️ Teknolojiler & Mimari

- **Çekirdek:** TypeScript, Vite, HTML5 Canvas API (yüksek performanslı çift tamponlu çizim)
- **Masaüstü:** Electron, electron-builder (NSIS tek tık kurulum, SHA-256 doğrulamalı otomatik OTA + `.exe` güncelleyici) — Paket Kimliği (`appId`): `com.galaksi.puzzle`
- **Mobil:** Capacitor Android (Java 21, Gradle, yerel `LiveUpdater` WebView OTA + uygulama içi APK yükleyici, `DisplayCutoutCompat`) — Uygulama Kimliği (`applicationId`): `com.diony.puzzlegalaxies`
- **Bulut & Eşitleme:** Supabase Auth + PostgreSQL (Row-Level Security korumalı cihazlar arası ilerleme ve ECDSA kimlik eşitleme)
- **Dağıtım & CI/CD:** GitHub Actions (Windows `Setup.exe` + Android `.apk` otomatik derleme, `SHA256SUMS.txt` ve Release yayını; 5 dakikalık gerçek oyuncu liderlik tablosu senkronu)
