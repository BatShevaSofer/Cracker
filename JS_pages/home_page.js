


// document.getElementById('embedded-site').contentDocument.body.style.overflow = 'visible';

// const imagHoveArray = [".img_hover0", ".img_hover1", ".img_hover2"];

document.addEventListener('', function () {
    if (window.innerWidth <= 991) {
    for (let i = 0; i <= 3; i++) {
        const imag = document.querySelector(`.img_hover${i}`);
        const overlay = document.querySelector(`.overlay${i}`);

        imag.addEventListener('mouseenter', function () {
            overlay.style.opacity = '1';
        });

        imag.addEventListener('mouseleave', function () {
            overlay.style.opacity = '0';
        });
    }

    }
});


