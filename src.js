document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.navbar-toggle').addEventListener('click', function() {
        const menu = document.querySelector('.Menu');
        menu.classList.toggle('active');
    });
});



 const fadeElements = document.querySelectorAll('.fade-in');

 const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('show');
         }
     });
 });

 fadeElements.forEach(element => {
     observer.observe(element);
 });