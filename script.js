function toggleVisibility() {
    var image = document.getElementById('point-vert');
    if (image.classList.contains('hidden')) {
        image.classList.remove('hidden');
        image.classList.add('visible');
    } else {
        image.classList.remove('visible');
        image.classList.add('hidden');
    }
}

// Initial display of the image
setTimeout(function() {
    toggleVisibility();
}, 1000);

// Toggle visibility every 1 seconds
setInterval(toggleVisibility, 1000);
