var on = true;

function toggleLights() {
  if(on) {
    var elements = document.querySelectorAll(".primaryGlow");
    for(var i = 0; i<elements.length; i++) {
      elements[i].style.textShadow = "none";
    }
  
    elements = document.querySelectorAll(".currentPage");
    elements[0].style.textShadow = "none";
  
    elements = document.getElementById("powerButton");
    elements.style.border = "none";
    elements.style.boxShadow = "none";

    on = false;
  } else {
    var elements = document.querySelectorAll(".primaryGlow");
    for(var i = 0; i<elements.length; i++) {
      elements[i].style.textShadow = "";
    }
  
    elements = document.querySelectorAll(".currentPage");
    elements[0].style.textShadow = "";
  
    elements = document.getElementById("powerButton");
    elements.style.border = "";
    elements.style.boxShadow = "";
  
    on = true;
  }
}