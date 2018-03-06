// $(window).resize(function(){ 
//     var Height = $(window).height();
//     var Width = $(window).width();
    
//     if(Width>=1000){
  
// }
// if(Width>=1000){
//   $('.img-responsive').removeClass('bigger');
// }


// console.log(Width);


// })
// var widt=document.documentElement.clientWidth;
// if(widt>=759){
//   $(document).ready(function(){
//   $('.bigger').mouseover(function(){
//     $(this).stop().animate({"width":"+=50px"},200); 
//   })
//   $('.bigger').mouseout(function(){
//     $(this).stop().animate({"width":"-=50px"},200); 
//   })
  
// })
// }else{
//   $('.img-responsive').removeClass('bigger');
// }

/** 
 * 获取滚动条距离顶端的距离 
 * @return {}支持IE6 
 */  
function getScrollTop() {  
        var scrollPos;  
        if (window.pageYOffset) {  
        scrollPos = window.pageYOffset; }  
        else if (document.compatMode && document.compatMode != 'BackCompat')  
        { scrollPos = document.documentElement.scrollTop; }  
        else if (document.body) { scrollPos = document.body.scrollTop; }   
        return scrollPos;   
} 
/*头部*/
$(".navbar-toggle").click(function(){
  $(".navbar-nav>li").css("background-color","rgba(255,255,255,0.8)").css("border-bottom","1px solid #ccc");
});

/***************************************************************/


$().ready(function() { 

 $(".H5-app-span").addClass("animated bounceInDown ").show();
  $(".phone").addClass("animated rubberBand ").show();
}); 
 




 <!-- /**********************以上是H5-app部分*********************/ -->
//   var curScrollTop,
//       isFirst = true;
// window.onscroll = function () {
//   curScrollTop = getScrollTop();
//   if (curScrollTop >= 0 ) {
    
//     console.log(curScrollTop);
//   }
// }
var wid=document.documentElement.clientWidth;
// alert(wid);
/*距离测试*/

 var curScrollTop,
      isFirst = true;
window.onscroll = function () {
  if(wid>=633){
  curScrollTop = getScrollTop();

	/*距离测试*/
   if (curScrollTop >= 0 ) {
    
    console.log(curScrollTop);
  }
  /*******************Show-down*****************/
  if (curScrollTop >= 500 && isFirst ) {
  	$(".Srctaobao").css("visibility","visible");
    $(".Srctaobao").addClass("animated zoomIn ");

     
  }
  if (curScrollTop >= 580 && isFirst ) {
  	$(".ewm-download").css("visibility","visible");
    $(".ewm-download").addClass("animated zoomIn ");

  }
  if (curScrollTop >= 860 && isFirst ) {
  	$(".ewm2-download").css("visibility","visible");
    $(".ewm2-download").addClass("animated zoomIn ");
  }
   if (curScrollTop >= 1600 && isFirst ) {
  	$(".Show-explain-img").css("visibility","visible");
    $(".Show-explain-img").addClass("animated fadeInDown ");
   
  }
  if (curScrollTop >= 3500 && isFirst ) {
  	$(".img-2").css("visibility","visible");
    $(".img-2").addClass("animated fadeInLeft ");

  }
   if (curScrollTop >= 4800 && isFirst ) {
  	$(".Apache-2-img").css("visibility","visible");
    $(".Apache-2-img").addClass("animated fadeInDown ");

  }
  if (curScrollTop >= 5800 && isFirst ) {
  	$(".Apache-2-img2").css("visibility","visible");
    $(".Apache-2-img2").addClass("animated fadeInRight ");

  }
  if (curScrollTop >= 6432 && isFirst ) {
  	$(".show-1").css("visibility","visible");
    $(".show-1").addClass("animated fadeInDown ");

  }
  if (curScrollTop >= 6733 && isFirst ) {
  	$(".show-2").css("visibility","visible");
    $(".show-2").addClass("animated fadeInDown ");
     
  }
  if (curScrollTop >= 6930 && isFirst ) {
  	$(".show-3").css("visibility","visible");
    $(".show-3").addClass("animated fadeInDown ");

  }
  if (curScrollTop >= 7132 && isFirst ) {
  	$(".show-4").css("visibility","visible");
    $(".show-4").addClass("animated fadeInDown ");
	
  }
  if (curScrollTop >= 7600 && isFirst ) {
  	$(".Row-six-two").css("visibility","visible");
    $(".Row-six-two").addClass("animated fadeInRight ");
      isFirst = false; 
  }
  /*背景延迟加载*/



  if (curScrollTop >= 1210 && isFirst ) {  
    $(".Show-explain").addClass("preload");
  }
  if (curScrollTop >= 3060 && isFirst ) {  
    $(".Fast-develop").addClass("preload");
  }
  if (curScrollTop >= 5318 && isFirst ) {  
    $(".BeX5").addClass("preload");
  }
  if (curScrollTop >= 7395 && isFirst ) {  
    $(".Download").addClass("preload");
  }

 /*变大变小*/
 $(document).ready(function(){
  $('.bigger').mouseover(function(){
    $(this).stop().animate({"width":"150%"},'slow'); 
  })
  $('.bigger').mouseout(function(){
    $(this).stop().animate({"width":"80%"}); 
  })
  
})


}



/*在手机上*/
if(wid<633){

  /*******************Show-down*****************/

    $(".Srctaobao").css("visibility","visible");
   

    $(".ewm-download").css("visibility","visible");

    $(".ewm2-download").css("visibility","visible");


    $(".Show-explain-img").css("visibility","visible");


    $(".img-2").css("visibility","visible");


    $(".Apache-2-img").css("visibility","visible");


    $(".Apache-2-img2").css("visibility","visible");


    $(".show-1").css("visibility","visible");


    $(".show-2").css("visibility","visible");


    $(".show-3").css("visibility","visible");


    $(".show-4").css("visibility","visible");


    $(".Row-six-two").css("visibility","visible");

  /*背景延迟加载*/

    


    $(".Show-explain").addClass("preload");

  
    $(".Fast-develop").addClass("preload");


    $(".BeX5").addClass("preload");


    $(".Download").addClass("preload");

}

 
}