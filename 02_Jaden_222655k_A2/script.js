function init() {
    // target all elements to save to constants
    const page1btn = document.querySelector("#page1btn");
    const page2btn = document.querySelector("#page2btn");
    const page3btn = document.querySelector("#page3btn");
    var allpages = document.querySelectorAll(".page");
    /*for hamMenu */
    const hamBtn = document.querySelector("#hamIcon");
    const menuItemsList = document.querySelector("nav ul");

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
        onepage.style.display = "block";
    }
    function toggleMenus() {
        /*open and close menu*/
        if (menuItemsList.style.display == "block")
            menuItemsList.style.display = "none";
        else
            menuItemsList.style.display = "block";
        // can optimize using toggle class with CSS transitions
    }
    // select all subtopic pages
    console.log(allpages);
    hideall();

    // Listen for clicks on the buttons, assign anonymous event handler functions to call the show function
    page1btn.addEventListener("click", function () {
        show(1);
    });
    page2btn.addEventListener("click", function () {
        show(2);
    });
    page3btn.addEventListener("click", function () {
        show(3);
    });

    hamBtn.addEventListener("click", toggleMenus);
}

document.addEventListener('DOMContentLoaded', init);