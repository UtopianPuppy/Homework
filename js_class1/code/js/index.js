var oPrev = document.getElementById("prev");
var oNext = document.getElementById("next");
var oImg = document.getElementById("img");
var nowIndex = 1;

oPrev.onclick = function () {
    nowIndex--;
    if (nowIndex <= 0){
        nowIndex = 1;
    }
    oImg.src = "img/0" + nowIndex + ".jpg";
};
oNext.onclick = function () {
    nowIndex++;
    if (nowIndex > 7){
        nowIndex = 7;
    }
    oImg.src = "img/0" + nowIndex + ".jpg"
};