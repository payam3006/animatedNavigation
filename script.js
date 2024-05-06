const q = console.log;

const toggle = () => {
  document.getElementsByClassName("nav")[0].classList.toggle("navA");
  for (let i = 0; i < 4; i++) {
    document.getElementsByClassName("navBtn")[i].classList.toggle("navBtnA");
  }
  document.getElementsByClassName("line1")[0].classList.toggle("line1A");
  document.getElementsByClassName("line2")[0].classList.toggle("line2A");
};
