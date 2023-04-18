//------------------------------------------------------------------------------------------------------------
// QUANDO SCORRO RIMANE SOLO IL TOPHEADER CON LOGO MODIFICATO E SCOMPARE LA NAVBAR
//------------------------------------------------------------------------------------------------------------
function navbarReduce() {
    var navBar = document.getElementById("navBarHeader");
    var border = document.getElementById("addBorderScroll");
    var change = document.getElementById("changeLogo");
    
     if (this.scrollY > 50) {
         navBar.classList.add("nvbRemove");
         border.classList.add("addBorder");
         change.classList.add("changeImg");
    }
    else if (this.scrollY < 50) {
         navBar.classList.remove("nvbRemove");
         border.classList.remove("addBorder");
         change.classList.remove("changeImg");
    }
}

window.addEventListener("scroll", navbarReduce, false)