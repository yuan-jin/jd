
// 头部的透明度
window.addEventListener('load',function(){
 
    // 获取轮播图元素
    var slide = document.querySelector('#slide');

    // 2. 获取轮播图的高度
    var slideHeight = slide.offsetHeight;

     // 获取页面元素的头部
     var header = document.querySelector('#header');


   // 让设置背景色的代码在事件的外面调用一下
   setHeaderOpacity();


    function setHeaderOpacity(){
    // 5. 获取当前滚动的距离 做一个兼容性处理 短路运算符 前面成立返回前面的不成立返回后面的
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    // 4. 计算透明度值  滚动距离/轮播图高度
    var opcity = scrollTop/slideHeight;

    // 5. 设置头部背景色
    header.style.backgroundColor = 'rgba(222,24,27,' + opcity + ')';
        
    }

    window.addEventListener('scroll',setHeaderOpacity);


    // 倒计时js
   
    /* 倒计时JS效果
        1. 得先拿到一个总的时间(请求服务器的总剩余倒计时时间)
        2. 在前端对时间进行每隔1秒总秒数  -- 
        3. 把减完后的时间  时分秒 计算出来显示到页面上
        4. 分别显示 十位和个位 */
    // 获取所有倒计时的span标签span:not(:nth-child(3n))
    var spans = document.querySelectorAll('.seckill-time span');
    // console.log(spans);


 // 1. 第一步获取后台返回的倒计时时间 暂时写死 假设 2小时
 var time = 2*60*60;

 setDownTime();


// 定义一个设置倒计时时分秒的函数
function setDownTime(){

    // 9. 如果时间小于0 重新开始一个新的倒计时
    if(time<0){
        time=7200;
    }

    // 5. 时 计算--完后的时分秒 显示到页面上 总时间 / 60 / 60  总秒数/3600
    var hour = Math.floor(time / 60 / 60);

     // 6. 分钟 先去掉小时部分 求分钟  10000 % 3600 == 2800  1分钟 60  有多少个60秒 多少分钟 
    var minute = Math.floor(time % 3600 / 60);

    // 7. 秒数 只要除不尽60都是剩下的秒数 总时间 % 60  3620 % 3600 == 20 % 60 == 20  3620 % 60 == 20
    var second = time % 3600 % 60;

    // 设置小时的十位 数字/ 10   20/10 == 2  10 / 10 == 1  5/10 == 0
     // 设置小时的个位 数字 % 10  21 % 10 == 1
    spans[0].innerHTML = Math.floor(hour / 10);
    spans[1].innerHTML = Math.floor(hour % 10);
    spans[3].innerHTML = Math.floor(minute / 10);
    spans[4].innerHTML = Math.floor(minute % 10);
    spans[6].innerHTML = Math.floor(second / 10);
    spans[7].innerHTML = Math.floor(second % 10);

}

// 2. 设置一个定时器 每隔1秒--
setInterval (function(){
// 3. 让time总时间--
time--;

 // 4. 减完后再设置倒计时的时分秒
 setDownTime();

},1000)
 
        
 
    // 轮播图
   // 4. 初始化swiper插件
   new Swiper('.swiper-container', {
    loop: true,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    // 自动轮播图初始化
    autoplay: {
        delay: 1000,
        // 是否当你触摸滑动后禁止自动轮播图 
        disableOnInteraction: false, //不禁止
        // disableOnInteraction: true,// 禁止
    }
});


    });

   
