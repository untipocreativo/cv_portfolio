// MENÚ MANUAL →

const menuElements = document.querySelectorAll('.menu-item');

for(const element of menuElements) {
  element.addEventListener('click', function() {
    for(const el of menuElements) {
      el.classList.remove('active');
    }
    
    let referencia = element.getAttribute('data-ficha');
    let fichaScroll = document.querySelector('#' + referencia);
    
    fichaScroll.scrollIntoView({behavior: 'smooth'});
    element.classList.add('active');
  });
}


// GESTIÓN DE CLASE ACTIVE DEL MENÚ ON SCROLL →

const fichas = document.querySelectorAll('.ficha');

window.addEventListener('scroll', function() {
  let currentFicha = '';
  
  for(const ficha of fichas) {
    const fichaTop = ficha.offsetTop;
    const fichaHeight = ficha.offsetHeight;
    
    if (window.scrollY >= fichaTop - fichaHeight / 3) {
      currentFicha = ficha.getAttribute('id');
    }
  }

  for(const element of menuElements) {
    element.classList.remove('active');
    if (element.getAttribute('data-ficha') === currentFicha) {
      element.classList.add('active');
    }
  }
});

if(window.innerWidth > 480) {
  document.documentElement.style.scrollSnapType = 'y mandatory';

  for(const ficha of fichas) {
    ficha.style.scrollSnapAlign = 'start';
  }
}

// GSAP ANIMACIONES →
const titular = new SplitType('#titulo');
gsap.to('.char', {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: .1
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
});



const skillsTags = document.querySelectorAll('.skills-tags__tag');
const fichasSkills = document.querySelectorAll('.ficha-skill');

for(const tag of skillsTags) {
  tag.addEventListener('click', function() {
    let fichaParaMostrar = tag.getAttribute('data-ficha-tag');

    for(const ficha of fichasSkills) {
      ficha.classList.remove('active');
    }
    for (const taguita of skillsTags) {
      taguita.classList.remove('active');
    }
    this.classList.add('active');

    document.querySelector(`#${fichaParaMostrar}`).classList.add('active');
  
  });
};