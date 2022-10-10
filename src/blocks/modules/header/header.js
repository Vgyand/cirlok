const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("nav");

let open = false;

menuBtn.addEventListener("click", () => {
  open = !open;
  if (open) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});
