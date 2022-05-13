function menuToggle() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  const hamburger = document.getElementById('hamburger');
  hamburger.addEventListener('click', menuToggle);
  const element = document.getElementById("myLinks")
  element.classList.toggle("myLinks");