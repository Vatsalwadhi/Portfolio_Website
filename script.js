var options = {
    strings: ['Web Developer', 'Video Editor'],
    typeSpeed: 55,
    onComplete: function () {
        // After typing "Video Editor," hide the cursor
        var cursor = document.querySelector('.typed-cursor');
        if (cursor) {
            cursor.style.display = 'none';
        }
    },
};

var typed = new Typed('#element', options);