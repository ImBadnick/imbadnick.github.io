// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "menunav") {
      x.className += " responsive";
    } else {
      x.className = "menunav";
    }
  }