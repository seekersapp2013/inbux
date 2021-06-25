jQuery("#carousel").owlCarousel({
    autoplay: false,
    rewind: true, /* use rewind if you don't want loop */
    margin: 20,
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 2
      },

      1024: {
        items: 2
      },

      1366: {
        items: 2
      }
    }
});

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});