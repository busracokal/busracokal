//declaring an array

document.addEventListener("DOMContentLoaded", function() {
    // Custom cursor setup
    var cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);
  
    document.addEventListener("mousemove", function(e) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  });


// script.js
function setThemeBasedOnTime() {
    const hour = new Date().getHours();
    const body = document.body;
  
    if (hour >= 6 && hour < 18) {
      body.classList.add('light');
      body.classList.remove('dark');
    } else {
      body.classList.add('dark');
      body.classList.remove('light');
    }
  }
  
  // Sayfa yüklendiğinde temayı ayarla
  window.onload = setThemeBasedOnTime;
  




let temperature=23;
if (temperature>20) {
    console.log("It's a warm day!");
}
let hour = 18;
if(hour<12) {
    console.log("Good Morning!");
}
else{ console.log("Good Afternoon!");
}
