let modal = document.querySelector(".overlay");
let open = document.querySelector(".btn1");
let close = document.querySelector(".btn2");

open.addEventListener("click", function () {
    modal.style.visibility = "visible";
});

close.addEventListener("click", function () {
    modal.style.visibility = "hidden";
});