function newSize() {
    // 假设设计稿的宽度是750;
    var DesignWidth = 750;

    //假设根元素的宽度是200;
    var DesignFontSize = 200;

    // 获取当前的视口宽度
    var nowWidth = document.documentElement.clientWidth;

    // 当前视口宽度/(设计稿宽度/根元素)
    var nowFontSize = nowWidth / (DesignWidth / DesignFontSize);

    document.documentElement.style.fontSize = nowFontSize + "px";

}

newSize();
window.addEventListener('resize', newSize);
