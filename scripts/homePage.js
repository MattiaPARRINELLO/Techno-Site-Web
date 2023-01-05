function checkMobile() {
  if (window.innerWidth < 800) {
    document.getElementById("mobile").style.display = "block";
    document.getElementById("computer").style.display = "none";
  } else {
    document.getElementById("mobile").style.display = "none";
    document.getElementById("computer").style.display = "block";
  }
}

window.addEventListener("resize", checkMobile);

checkMobile();
