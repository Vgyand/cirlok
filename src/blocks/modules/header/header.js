const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("nav");
const menuBtnDesk = document.getElementById("menuBtnDesk");

let open = false;

menuBtn.addEventListener("click", () => {
  open = !open;
  if (open) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});
menuBtnDesk.addEventListener("click", () => {
  open = !open;
  if (open) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});
