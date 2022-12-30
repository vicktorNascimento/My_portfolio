//Function that applies style in the selected option and quit it when u select a new one.
function seleccionar(link) {
    var options = document.querySelectorAll('#links  a');
    options[0].className = "";
    options[1].className = "";
    options[2].className = "";
    options[3].className = "";
    options[4].className = "";
    link.className = "select";

    //Here we make menu desapear when we select one option in responsive mode 
    var x = document.getElementById("nav");
    x.className = "";
}

//Function that show responsive menu
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//Detect when u scroll and set the animation barrs
window.onscroll = function() { animationBarrs() };

//Function that applies the animation of the skills bar
function animationBarrs() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("sk").classList.add("progress-bar1");
        document.getElementById("jv").classList.add("progress-bar2");
        document.getElementById("html").classList.add("progress-bar3");
        document.getElementById("js").classList.add("progress-bar4");
        document.getElementById("db").classList.add("progress-bar5");
        document.getElementById("pt").classList.add("progress-bar6");
        document.getElementById("ad").classList.add("progress-bar7");
        
    }

}