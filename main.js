const hide = document.querySelector(".hide");
const show = document.querySelector(".show");
const showbg = document.querySelector(".showbg");

let btn = document.querySelector(".shareButton");

btn.addEventListener("click", () => {
  if (window.innerWidth >= 1000) {
    if (showbg.style.display == "flex") {
      showbg.style.display = "none";
    } else {
      showbg.style.display = "flex";
    }
  }
});
function showOrHideDiv() {
  if (window.innerWidth <= 1000) {
    if (hide.style.display == "none") {
      hide.style.display = "flex";
      show.style.display = "none";
    } else {
      hide.style.display = "none";
      show.style.display = "flex";
    }
  }
}
