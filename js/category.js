window.addEventListener('load',function(){
        //   初始化分类左侧的滑动 限制了是初始化分类左侧的滑动效果  传人category-right里面的轮播图大容器选择器
        new Swiper('.category-left .swiper-container', {

        direction: 'vertical',//垂直滚动

       //如果有多个 <!-- 滑动内容的大容器 -->swiper-slide 就需要加这个参数
        slidesPerView: 'auto',
  
        //开启回弹效果
        freeMode: true,
        roundLengths : true, //防止文字模糊
        
        // mousewheel: true,//支持鼠标滚轮

});
  //   初始化分类左侧的滑动 限制了是初始化分类左侧的滑动效果  传人category-right里面的轮播图大容器选择器
  new Swiper('.category-right .swiper-container', {

    
    direction: 'vertical',//垂直滚动

   //如果有多个 <!-- 滑动内容的大容器 -->swiper-slide 就需要加这个参数
    slidesPerView: 'auto',

    //开启回弹效果
    freeMode: true,
    roundLengths : true, //防止文字模糊

});


 
    /*
    点击分类左侧的菜单实现吸顶效果

      1. 点击了第一个菜单 位移0
         点击第二个菜单 位移1个a的高度
         点击第三个菜单 位移2个a的高度
         点击第几个菜单 位移当前菜单索引 * a 高度的高度位移 
        
    */
       //1. 先获取所有的li取下标0;和高度
       //2. 获取左侧分类的滑动元素
       //3. 计算最小的位移距离= 父容器的高度 - 子容器的高度offsetHeight
       //4. 遍历所有的li元素
           //4.1 使用HTML5的自定义属性data-去添加属性 lis[i].dataset['index'] = i;
           //4.2 给每一个li元素注册点击事件
           //4.3 因为往上移动的值是负值,所以计算的时候也是-(this.dataset['index]*自己的高度)
           //4.4 在设置位移之前判断当前位移的距离 是否小于最小的位移距离
           //4.5 如果计算位移距离超过了最小位移距离 就设置为最小位移距离
           //4.6 给swiperWrapper 设置位移
           //4.7 设置一个过渡效果 慢慢位移
           //4.8 先删除所有人 active 给当前点击添加active
           //4.9 给当前li添加active


       



         //1. 先获取所有的li取下标0;
         var lis = document.querySelectorAll('.swiper-container li');
        //  console.log(lis);

        // 1.1 获取li的高度(50)
        var lisHeigth = lis[0].offsetHeight;
        // console.log(lisHeigth);//(50)


        // 2.获取左侧分类滑动的元素
        var categoryWrapper = document.querySelector('.category-left .swiper-wrapper');

         
        //3.0 获取装内容的大容器(父容器)
        var categoryContainer = document.querySelector('.category-left .swiper-container');
        //3.1 获取装每一个li的容器(子容器)
        var categorySlide = document.querySelector('.category-left .swiper-slide');
        //3.2. 计算最小的位移距离= 父容器的高度 - 子容器的高度offsetHeight
        var  mindistance = categoryContainer.offsetHeight - categorySlide.offsetHeight;


        //4.遍历所有的li元素
        for(var i = 0;i<=lis.length; i++){
           //4.1 使用HTML5的自定义属性data-去添加属性 lis[i].dataset['index'] = i;;
            lis[i].dataset['index'] = i;
           
           //4.2 给每一个li元素注册点击事件
           lis[i].addEventListener('click',function(){

           //4.3 因为往上移动的值是负值,所以计算的时候也是-(this.dataset['index]*自己的高度)
           var translateY = -(this.dataset['index'] * lisHeigth);

           //4.4 在设置位移之前判断当前位移的距离 是否小于最小的位移距离
           if( translateY < mindistance){
               //4.5 如果计算位移距离超过了最小位移距离 就设置为最小位移距离
               translateY = mindistance;
           }
           //4.6 给swiperWrapper 设置位移
           categoryWrapper.style.transform = 'translate3d(0px,' + translateY + 'px,0px)';

           //4.7 设置一个过渡效果 慢慢位移
           categoryWrapper.style.transition = 'all 0.2s';

           //4.8 遍历所有的li 先删除所有人 active 给当前点击添加active
           for(var j = 0; j<lis.length; j++){
               lis[j].classList.remove('active');

           }

           //4.9 给当前li添加active
           this.classList.add('active');

           })

        }

});


