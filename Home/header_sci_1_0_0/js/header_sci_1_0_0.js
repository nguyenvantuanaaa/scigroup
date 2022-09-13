document.getElementById("headerMenuBtn").addEventListener("click", () => {
  document.getElementById("headerSideBar").classList.add("show");
  document.getElementById("headerBg").style.display = "block";
});
document.getElementById("headerBg").addEventListener("click", () => {
  document.getElementById("headerSideBar").classList.remove("show");
  document.getElementById("headerBg").style.display = "none";
});

const menuItem = document.querySelectorAll(".header_sci_1_0_0__item");
// console.log(menuItem);
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});
