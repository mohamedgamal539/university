var settingIcon = document.querySelector("header i");
var rightSide = document.querySelector(".right-side-common");
var closeIcon = document.querySelector(".right-side-common i");

settingIcon.onclick = function () {
    rightSide.style.right = '0';
}

closeIcon.onclick = function () {
    rightSide.style.right = '-216px';
}