jQuery("#carousel").owlCarousel({
    autoplay: false,
    rewind: false, /* use rewind if you don't want loop */
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
    goToFirst: false,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 1
      },
  
      1024: {
        items: 2
      },
  
      1366: {
        items: 2
      }
    }
  });
  jQuery("#carousel1").owlCarousel({
  autoplay: false,
  rewind: false, /* use rewind if you don't want loop */
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
  goToFirst: false,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
  
    600: {
      items: 1
    },
  
    1024: {
      items: 2
    },
  
    1366: {
      items: 2
    }
  }
  });
  
//  // toggle password visibility js
//  const togglePassword = document.querySelector('#togglePassword');
//  const password = document.querySelector('#password');
//  togglePassword.addEventListener('click', function (e) {
//    // toggle the type attribute
//    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//    password.setAttribute('type', type);
  
//    // toggle the eye slash icon
//    if(this.classList[1] == "fa-eye-slash") {
//        this.classList.remove("fa-eye-slash");
//        this.classList.toggle('fa-eye');
//    }
//    else {
//        this.classList.remove("fa-eye");
//        this.classList.toggle('fa-eye-slash');
//    }
    
//});
  
  