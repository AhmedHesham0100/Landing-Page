/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

//navbar ul
const navbarList = document.querySelector('#navbar__list');

// sections
const sections = document.querySelectorAll('section');

const html = document.querySelector('html');

//navbar
const navBar = document.querySelector('.navbar__menu');

//menu icon
//const menuIcon= document.querySelector("#menu-icon");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//add and remove class

function isInViewPort() {

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const navLink = document.querySelector(`a[href="#${section.id}"]`);

        if (sectionTop > -100 && sectionTop <= 300) {
            console.log(sectionTop)
            section.classList.add("your-active-class");
            navLink && navLink.classList.add("active")
        } else {
            section.classList.remove("your-active-class");
            navLink && navLink.classList.remove("active")
        }
    })

}
isInViewPort();


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// Looping through each section to create its corresponding nav link-
sections.forEach(section => {
    const navElement = document.createElement("li");
    const anchor = document.createElement("a");

    // get the id value of the section
    const id = section.getAttribute("id");

    // we'll use this id value as href in our anchor link
    anchor.href = `#${id}`;

    // Get the link text from data-nav attribute of the section
    const linkText = section.getAttribute("data-nav");

    // Use this text for our link
    anchor.innerText = linkText;

    // Append anchor <a> inside <li> element
    navElement.appendChild(anchor);

    // add style to nav Items
    anchor.classList.add("menu__link");

    // Append anchor <li> inside <ul> element i.e our navBar list
    navbarList.appendChild(navElement)
})


// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', isInViewPort);


// Scroll to anchor ID using scrollTO event

navBar.addEventListener('click', function (e) {

    //The prevent Default function will prevent the auto-scrolling due to the anchor tag
    e.preventDefault();
    const target = e.target;

    const menuItems = document.querySelectorAll('a');

    if (target.classList.contains('menu__link')) {

        const id = target.getAttribute('href').slice(1);
        document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "center" });

        // add style to nav item
        menuItems.forEach(li => {

            if (target.getAttribute('href').slice(1) === li.href.split("#")[1]) {

                li.classList.add("active")
            }
            else {
                li.classList.remove("active")
            }

        })

    }
});

// fuction menu icon responsive nav
const menuIcon = document.querySelector("#menu-icon");

const navLink = document.querySelectorAll("a");

function mobileMenu() {
    menuIcon.classList.toggle("view-active");
    navbarList.classList.toggle("nav-flex");
}

function closeMenu() {
    menuIcon.classList.remove("view-active");
    navbarList.classList.remove("nav-flex");
}

menuIcon.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active