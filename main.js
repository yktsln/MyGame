function changeLanguage() {
  const lang = localStorage.getItem('language');

  if (lang === 'en') {
    // İngilizce çevirileri yap
    document.querySelector('.container h1').innerText = 'Game Name';
    document.querySelector('.game-info h2').innerText = 'About the Game';
    document.querySelector('.game-info p').innerText = 'Basic information about the game can be provided here.';
    document.querySelector('.game-options h2').innerText = 'Game Options';
    document.querySelector('.game-options p').innerText = 'Game options and levels can be found in this section.';
    document.querySelector('nav ul li:nth-child(1) a').innerText = 'Play';
    document.querySelector('nav ul li:nth-child(2) a').innerText = 'Settings';
    document.querySelector('nav ul li:nth-child(3) a').innerText = 'Help';
    document.querySelector('footer p').innerText = '&copy; 2024 Game Name';
  } else if (lang === 'tr') {
    // Türkçe çevirileri yap
    document.querySelector('.container h1').innerText = 'Oyun Adı';
    document.querySelector('.game-info h2').innerText = 'Oyun Hakkında';
    document.querySelector('.game-info p').innerText = 'Bu kısımda oyun hakkında temel bilgiler verilebilir.';
    document.querySelector('.game-options h2').innerText = 'Oyun Seçenekleri';
    document.querySelector('.game-options p').innerText = 'Bu kısımda oyun seçenekleri ve seviyeleri bulunabilir.';
    document.querySelector('nav ul li:nth-child(1) a').innerText = 'Oyna';
    document.querySelector('nav ul li:nth-child(2) a').innerText = 'Ayarlar';
    document.querySelector('nav ul li:nth-child(3) a').innerText = 'Yardım';
    document.querySelector('footer p').innerText = '&copy; 2024 Oyun Adı';
  }
}


changeLanguage();


function changeBackground(){
  const background = localStorage.getItem('backgroundSet');

  if(background === 'light'){
    document.body.style.backgroundImage = 'url(/public/assets/images/background/ComfyUI_00036_.png)';
  } else if(background === 'dark'){
    document.body.style.backgroundImage = 'url(/public/assets/images/background/ComfyUI_00044_.png)';
  }
}

changeBackground();





