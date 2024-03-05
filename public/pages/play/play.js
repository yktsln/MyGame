function setBackground() {
    let background = localStorage.getItem('backgroundSet');

    if (background === 'light') {
        document.body.style.backgroundImage = 'url(/public/assets/images/playBackground/ComfyUI_00055_.png)';
    } else if (background === 'dark') {
        document.body.style.backgroundImage = 'url(/public/assets/images/playBackground/Firefly20240301115316.png)';
    }
}

setBackground();

