/* --- MENU SHOW---*/
const showMenu = (toggleId,navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}
showMenu('nav-toggle','nav-menu',)


/* --- ACTIVE AND REMOVE MENU---*/
const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    //Active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    //remove menu mobile
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show');

}

navLink.forEach(n => n.addEventListener('click', linkAction))


//sticky scroll navbar
var nav = document.getElementById('nav-menu');
window.scroll = function (){
    if(window.pageYOffset > 100){
        nav.style.position = "fixed";
        nav.style.top = 0;
    }
    else{
        nav.style.position = "absolute";
        nav.style.top = 100;
    }
}

/* --- SCROLL REVEAL ANIMATION--*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* --- SCROLL HOME---*/
sr.reveal('.home_title',{})
sr.reveal('.home_description',{delay:200})
sr.reveal('.button',{delay:400})
sr.reveal('.home_img',{delay:400})
sr.reveal('.home_social-icon',{interval: 200})

/* --- SCROLL ABOUT---*/
sr.reveal('.about_img',{})
sr.reveal('.about_subtitle',{delay:200})
sr.reveal('.about_text',{delay:400})
sr.reveal('.button',{delay:600})

/* --- SCROLL SKILLS---*/
sr.reveal('.skills_subtitle',{})
sr.reveal('.skills_data',{delay:200})
sr.reveal('.skills_img',{delay:400})

/* --- SCROLL Qualification---*/
sr.reveal('.education_title .experience_title',{})
sr.reveal('.education_item, .experience_item',{delay:200})

/* --- SCROLL CONTACT---*/
sr.reveal('.section_subtitle',{})
sr.reveal('.contact_list',{delay:200})
sr.reveal('.contact_form',{delay:400})


/*  ---- Contact Form ----  */ 
const myForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#contact-name');
const emailInput = document.querySelector('#contact-email');
const messageInput = document.querySelector('#message');
const contactMessage = document.getElementById('contact-message');
const submitBtn = document.querySelector('#submitbtn');

submitBtn.addEventListener('click', function(e) {
  e.preventDefault(); // prevent default form submission

  if (nameInput.value.trim() === '' || 
      emailInput.value.trim() === '' || 
      messageInput.value.trim() === '') {
           contactMessage.textContent = 'Write all the input fields';
           setTimeout(()=> {
            contactMessage.textContent = '';
        },1000);

  } else {
    contactMessage.textContent = 'Message sent successfully!';
    myForm.reset();
    setTimeout(()=> {
    contactMessage.textContent = '';
        },3000);
    }
});
