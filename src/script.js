// console.log('Good Morning')
const mobileBtn = document.getElementById("mobile-btn");
const mobileMenu = document.getElementById("mobile-menu");


mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
 
})

// CLOSING NAVIGATION JAVASCRIPT



// SWIPER JAVASCRIPT
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // CLICK TO SCROLL JAVASCRIPT

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
  
      const targetSection = document.querySelector(this.getAttribute('href'));
      const navHeight = document.querySelector('nav').offsetHeight;
      let extraPadding = 0;
  
      if (window.innerWidth >= 768) {
        extraPadding = 50;
      }
  
      window.scrollTo({
        top: targetSection.offsetTop - navHeight - extraPadding,
        behavior: 'smooth'
      });
  
      // Update the URL without adding to history, or leave as-is if no hash
      history.replaceState(null, null, targetSection ? this.getAttribute('href') : window.location.pathname);
    });
  });
  