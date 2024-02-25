const plusSigns = document.querySelectorAll(".plus");
const minusSigns = document.querySelectorAll(".minus");
const paras = document.querySelectorAll(".para");
const para1 = document.querySelectorAll(".para1");

para1.forEach((para, index) => {
  para.addEventListener("click", function () {
    plusSigns[index].style.display = "none";
    minusSigns[index].style.display = "block";
    paras[index].style.display = "block";
  });
});

plusSigns.forEach((plusSign, index) => {
  plusSign.addEventListener("click", function () {
    plusSign.style.display = "none";
    minusSigns[index].style.display = "block";
    paras[index].style.display = "block";
  });
});

minusSigns.forEach((minusSign, index) => {
  minusSign.addEventListener("click", function () {
    minusSign.style.display = "none";
    plusSigns[index].style.display = "block";
    paras[index].style.display = "none";
  });
});
