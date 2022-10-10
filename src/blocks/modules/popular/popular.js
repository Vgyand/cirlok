const info = document.getElementsByClassName("popular_card-btn");
const infoText = document.getElementsByClassName("info");
const close = document.getElementsByClassName("close");

infoTextArr = Array.from(infoText);
Array.from(info).forEach(function (element, id) {
  element.addEventListener("click", () => {
    infoTextArr[id].style.display = "block";
  });
});

Array.from(close).forEach(function (element, id) {
  element.addEventListener("click", () => {
    infoTextArr[id].style.display = "none";
  });
});
