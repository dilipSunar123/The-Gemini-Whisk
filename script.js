// Get the button
scrollToTop_id = document.getElementById('scrollToTop_id');

// 
window.onscroll = function () {
    scrollFunction();
}

function scrollFunction () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTop_id.style.display = "block";
    } else {
        scrollToTop_id.style.display = "none";
    }
}

function topFunction () {
    document.documentElement.scrollTop = 0;
}