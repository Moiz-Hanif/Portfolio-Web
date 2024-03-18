window.onscroll = () => {
    let header = document.querySelector("header");
    header.classList.toggle('sticky' , window.scrollY>100);
}


var btnContainer = document.getElementById("Navbar-items");

var btns = btnContainer.getElementsByClassName("Links");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}

    // FOR-NAVBAR

let menuIcon=document.querySelector('#menu-bar');
let navbarELe = document.querySelector('.selection-items');
menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x');
    navbarELe.classList.toggle('active');
}


