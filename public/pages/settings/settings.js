
function saveSettings() {
    const selectedLanguage = document.getElementById('language').value;
    const selectedTheme = document.getElementById('theme').value; // Tema seçeneğini al
    localStorage.setItem("language", selectedLanguage);
    localStorage.setItem("theme", selectedTheme); // Tema seçeneğini kaydet
    changeLanguage();
    return false; // Sayfanın yenilenmesini engelle
}


function goToHomePage() {
    const selectedLanguage = document.getElementById('language').value;
    localStorage.setItem("language", selectedLanguage);
    changeLanguage();
    window.location.href = "/index.html";
    return false;
}














//!------------------------------------------------------------------------------------------------------------



function changeLanguage() {
    const languageSelect = document.getElementById('language');
    const selectedLanguage = languageSelect.value;

    if (selectedLanguage === 'en') {
        document.getElementById('pageTitle').innerText = 'Settings';
        document.querySelector('label[for="language"]').innerText = 'Language:';
        document.querySelector('option[value="tr"]').innerText = 'Turkish';
        document.querySelector('option[value="en"]').innerText = 'English';
        document.querySelector('label[for="theme"]').innerText = 'Theme:';
        document.querySelector('option[value="light"]').innerText = 'Light Theme';
        document.querySelector('option[value="dark"]').innerText = 'Dark Theme';
        document.querySelector('label[for="notifications"]').innerText = 'Notifications:';
        document.querySelector('label[for="notifications"]').nextSibling.textContent = 'Receive Notifications';
        document.querySelector('button[type="submit"]').innerText = 'Save';
    } else if (selectedLanguage === 'tr') {
        // Türkçe metinleri güncelleme
        document.getElementById('pageTitle').innerText = 'Ayarlar';
        document.querySelector('label[for="language"]').innerText = 'Dil:';
        document.querySelector('option[value="tr"]').innerText = 'Türkçe';
        document.querySelector('option[value="en"]').innerText = 'English';
        document.querySelector('label[for="theme"]').innerText = 'Tema:';
        document.querySelector('option[value="light"]').innerText = 'Açık Tema';
        document.querySelector('option[value="dark"]').innerText = 'Koyu Tema';
        document.querySelector('label[for="notifications"]').innerText = 'Bildirimler:';
        document.querySelector('label[for="notifications"]').nextSibling.textContent = 'Bildirimleri Al';
        document.querySelector('button[type="submit"]').innerText = 'Kaydet';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const language = localStorage.getItem('language');
    if (language) {
        const languageSelect = document.getElementById('language');
        if (languageSelect) {
            languageSelect.value = language;
            changeLanguage();
        } else {
            console.error('Dil seçimi öğesi bulunamadı.');
        }
    } else {
        localStorage.setItem('language', 'tr');
    }
});





//!-----------------------------------------------------------------------------------------------------
function changeBackground(){
  const background = localStorage.getItem('backgroundSet');

  if(background === 'light'){
    document.body.style.backgroundImage = 'url(/public/assets/images/background/ComfyUI_00036_.png)';
  } else if(background === 'dark'){
    document.body.style.backgroundImage = 'url(/public/assets/images/background/ComfyUI_00044_.png)';
  }
}

changeBackground();



function setBackground() {
    const backgroundSet = document.getElementById('theme').value;
    console.log(backgroundSet);
    localStorage.setItem("backgroundSet", backgroundSet);
    return false;
}





// Temayı değiştirmek için işlev
function changeTheme(theme) {

    const background = document.body;
    if (theme === 'light') {
        background.style.backgroundImage = 'url(/public/assets/images/background/ComfyUI_00036_.png)';
    } else if (theme === 'dark') {
        background.style.backgroundImage = 'url(/public/assets/images/background/ComfyUI_00044_.png)';
    }
    setBackground();
}

// Tema değişikliğini dinlemek için olay dinleyicisi
document.getElementById('theme').addEventListener('change', function() {
    const selectedTheme = this.value;
    changeTheme(selectedTheme);
});




