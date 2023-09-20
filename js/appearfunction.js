function revealContent() {
  const content = document.getElementById("content");
  content.style.opacity = "0";
  setTimeout(function () {
    content.style.transition = "opacity 1s ease-in-out";
    content.style.opacity = "1";
  }, 5000);
}
0;

window.addEventListener("load", revealContent);
