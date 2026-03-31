(function () {
    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    var closeBtn = document.createElement('span');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '&times;';

    var lbImg = document.createElement('img');
    lbImg.alt = '';

    overlay.appendChild(closeBtn);
    overlay.appendChild(lbImg);
    document.body.appendChild(overlay);

    function open(src, alt) {
        lbImg.src = src;
        lbImg.alt = alt || '';
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function close() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    overlay.addEventListener('click', close);
    closeBtn.addEventListener('click', close);
    lbImg.addEventListener('click', function (e) { e.stopPropagation(); });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') close();
    });

    document.querySelectorAll('img.center').forEach(function (img) {
        img.addEventListener('click', function () {
            open(this.src, this.alt);
        });
    });
})();
