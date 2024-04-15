var backToTopButton = document.getElementById('back-to-top');
var educationSection = document.getElementById('education');

if (backToTopButton) {
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    window.onscroll = function() {
        var sectionTop = educationSection.getBoundingClientRect().top;
        var offsetTrigger = window.innerHeight;

        if (sectionTop <= offsetTrigger) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    };
}