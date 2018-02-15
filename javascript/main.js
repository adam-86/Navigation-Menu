const dropdownContent = document.getElementById('dropdown_container');
const navTitles = document.querySelectorAll('.nav_li');
const navZone = document.getElementById('nav');
let timer;

for (let i = 0; i < navTitles.length; i++) {

  navTitles[i].addEventListener('mouseover', function showStuff() {

    // get name from what element fired the event
    const navItemName = event.target.name;

    //use name to appropriate class
    if (navItemName == 'first') {
      dropdownContent.classList = 'dropdowns dropdown_first';

      dropdownContent.setAttribute("style", "width: 340px; height: 220px; opacity: 10;");
    }

    if (navItemName == 'second') {
      dropdownContent.classList = 'dropdowns dropdown_second';
      dropdownContent.setAttribute("style", "width: 270px; height: 350px; opacity: 10;");

    }

    if (navItemName == 'third') {
      dropdownContent.classList = 'dropdowns dropdown_third';
      dropdownContent.setAttribute("style", "width: 340px; height: 270px; opacity: 10;");
    }
  });
}

// if mouse leaves nav, set opacity to 0. Transition property set in CSS to give it the fade aniamtion.
function mouseLeftNavZone() {
  dropdownContent.style.opacity = '0'

  // Timer set at half a second to prevent accidental mouse outs from canceling the function
  timer = setTimeout(function() {
    dropdownContent.classList = 'peace_out';
  }, 500);
}
// bring dropdown back if mouse moves back in quickly.
function dudeWait() {
  dropdownContent.style.opacity = '10'
  clearTimeout(timer);

}

navZone.addEventListener('mouseleave', mouseLeftNavZone);
navZone.addEventListener('mouseenter', dudeWait);
