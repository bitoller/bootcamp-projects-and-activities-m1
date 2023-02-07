function click() {
  const div = document.querySelectorAll("div");
  let flag = false;
  div[1].addEventListener("click", function () {
    if (flag == true) {
      div[0].classList.add("off");
      div[0].classList.remove("on");
      div[1].classList.add("buttonOff");
      div[1].classList.remove("buttonOn");
    } else {
      div[0].classList.add("on");
      div[0].classList.remove("off");
      div[1].classList.add("buttonOn");
      div[1].classList.remove("buttonOff");
    }
    flag = !flag;
  });
}
click();
