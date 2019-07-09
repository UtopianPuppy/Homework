function waver(obj, dir, init) {
    var arr = [];
    var index = 0;
    for (var i=30;i>=0;i-=3) {
        arr.push(i, -i);
    }

    clearInterval(obj.waver);
    obj.style[dir] = init + "px";
    obj.waver = setInterval(function () {
        obj.style[dir] = parseInt(getStyle(obj, dir)) + arr[index] + 'px';
        index++;
        if (index === arr.length) {
            clearInterval(obj.waver)
        }
    }, 50)
}

function getStyle(obj, attr) {
    return window.getComputedStyle ? getComputedStyle(obj)[attr] : obj.currentStyle[attr]
}