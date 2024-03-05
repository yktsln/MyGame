

// Catapult elementini seçin
const catapult = document.getElementById('catapult');

// Animasyon için başlangıç koordinatları
let x = window.innerWidth; // Başlangıçta sağ kenardan başla
let y = window.innerHeight; // Başlangıçta alt kenardan başla

// Animasyon işlevi
function animateCatapult() {
    // Catapult'un yeni konumunu güncelle
    x -= 5; // Sola doğru hareket et
    y -= 5; // Yukarı doğru hareket et

    // Catapult'un konumunu güncelle
    catapult.style.right = x + 'px';
    catapult.style.bottom = y + 'px';

    // Eğer catapult ekranın dışına çıkarsa, animasyonu durdur
    if (x < -100 || y < -100) {
        clearInterval(animationInterval); // Animasyonu durdur
    }
}

// Animasyonu 20 milisaniyede bir çalıştır
const animationInterval = setInterval(animateCatapult, 20);
