
document.addEventListener("DOMContentLoaded", function () {
  gallery();
  fixedNavigation();
  highlightLink();
  scrollNav();

});

function fixedNavigation(){
    const header = document.querySelector('.header');
    const aboutFestival = document.querySelector('.about-festival');

    window.addEventListener('scroll', function(){
        console.log(aboutFestival.getBoundingClientRect().bottom);

        if(aboutFestival.getBoundingClientRect().bottom < 1)
        {
            header.classList.add('fixed')
            // console.log('YA TE PASASTE');
        } else{
            // console.log('Aun no');
            header.classList.remove('fixed')
        }
    })

}

function gallery() {
  const gallery = document.querySelector(".gallery-images");

  for (let i = 1; i <= 16; i++) {
    const image = document.createElement("IMG");
    image.src = `src/img/gallery/full/${i}.jpg`;
    image.alt = "Imagen Galeria";
    // console.log(image);

    // EventHandler

    image.onclick = function () {
      showImage(i);
    };

    gallery.appendChild(image);
  }
}

function showImage(i) {
  const image = document.createElement("IMG");
  image.src = `src/img/gallery/full/${i}.jpg`;
  image.alt = "Imagen Galeria";

  // Modal
  const modal = document.createElement("DIV");
  modal.classList.add("modal");
  modal.appendChild(image);

  modal.onclick = closeModal;

  // Cerrar Modal btn.
  const closeModalBtn = document.createElement('BUTTON')
  closeModalBtn.textContent = 'X';
  closeModalBtn.onclick = closeModal;
  closeModalBtn.classList.add('close-btn')
  modal.appendChild(closeModalBtn)

  // Add HTML
  const body = document.querySelector("body");
  body.classList.add("overflow-hidden");
  body.appendChild(modal);
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("fade-out");

  setTimeout(() => {
    modal?.remove();

    const body = document.querySelector("body");
    body.classList.remove("overflow-hidden");
  }, 500);
}

function highlightLink (){
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section')
        const navLink = document.querySelectorAll('.main-nav a')

        let actual = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if(window.scrollY >= (sectionTop - sectionHeight / 3)){
                actual = section.id
            }
        })

        navLink.forEach(link =>{
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual){
                link.classList.add('active')
            }
        })
    })
}

function scrollNav(){
    const navLink = document.querySelectorAll('.main-nav a')

    navLink.forEach(link => {
        link.addEventListener('click', e =>{
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            section = document.querySelector(sectionScroll)
            section.scrollIntoView({behavior: 'smooth'})
        })
    })
}

