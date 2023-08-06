  // target all elements to save to constants
    const page1btn = document.querySelector("#page1btn");
    const page2btn = document.querySelector("#page2btn");
    const page3btn = document.querySelector("#page3btn");
    var allpages = document.querySelectorAll(".page");
    /*for hamMenu */
    const hamBtn = document.querySelector("#hamIcon");
    const menuItemsList = document.querySelector("nav ul");
    const pageContainer = document.querySelector("#pagecontainer");
    const mediaQuery = window.matchMedia('(max-width: 800px)');
    
    function hideall() {
        // function to hide all pages
        for (let onepage of allpages) {
            // go through all subtopic pages
            onepage.style.display = "none"; // hide it
        }
    }

    function show(pgno) {
        // function to show selected page no
        hideall();
        // select the page based on the parameter passed in
        let onepage = document.querySelector("#page" + pgno);
        // show the page
        onepage.style.display = "flex";

    }
    function toggleMenus() {
    

        if (mediaQuery.matches) {
            if (menuItemsList.style.display === 'block') {
                menuItemsList.style.display = 'none';
            } else {
                menuItemsList.style.display = 'block';
            }
        } else {
            // Handle the case for larger screen sizes if needed
            if (menuItemsList.style.display === 'flex') {
                menuItemsList.style.display = 'none';
            } else {
                menuItemsList.style.display = 'flex';
            }

        }
    }
    // select all subtopic pages
    console.log(allpages);
    hideall();

    // Listen for clicks on the buttons, assign anonymous event handler functions to call the show function
    page1btn.addEventListener("click", function () {
        
        pageContainer.style.background = 'rgb(255, 87, 75)';
        show(1);
    });
    page2btn.addEventListener("click", function () {
        pageContainer.style.background = 'rgb(255, 136, 0)';
        show(2);
    });
    page3btn.addEventListener("click", function () {
        pageContainer.style.background = 'rgb(255, 230, 0)';
        show(3);
    });


    hamBtn.addEventListener("click", toggleMenus);

    const fadeElement = document.querySelector('.fade-element');
const windowHeight = window.innerHeight;

function handleFade(sectionElement) {
    if (!sectionElement) {
        return; // Handle the case where sectionElement is null or undefined
    }

    const sectionTop = sectionElement.getBoundingClientRect().top;
    const sectionBottom = sectionElement.getBoundingClientRect().bottom;
    const sectionHeight = sectionBottom - sectionTop;
    const sectionMidpoint = sectionTop + sectionHeight / 2;

    const windowHeight = window.innerHeight;

    if (sectionMidpoint < windowHeight && sectionMidpoint > 0) {
        sectionElement.classList.add("fade-in");
        sectionElement.classList.remove("fade-out");
    } else {
        sectionElement.classList.remove("fade-in");
        sectionElement.classList.add("fade-out");
    }
}

const sections = document.querySelectorAll("#page3");
sections.forEach((section) => {
    window.addEventListener("scroll", function () {
        handleFade(section);
    });
    handleFade(section); // Initial check when the page loads
});
window.addEventListener('scroll', function () {
    handleFade(fadeElement);
});
const showTextButtons = document.querySelectorAll('.showTextButton');
const hiddenTextElements = document.querySelectorAll('.hiddenText');

showTextButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      hiddenTextElements[index].classList.toggle('hidden');
    });
  });




 