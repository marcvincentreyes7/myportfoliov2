 $(window).scroll(function() {
      var scroll = ($(window).scrollTop());
      var scroll2 = 0;

      // zooming earth
      if(scroll < 1550){
        $(".zoom1 img").css({
          transform: 'translate3d(10%, -'+(scroll2/100)+'%, 0) scale('+(100 + scroll2/10)/100+')',
          marginLeft: (scroll2/2)
        });

        // chatting in the moon
      if(scroll >= 0 && scroll < 300){
        $("#chat1").show();
        $("#chat2").hide();
        $("#chat3").hide();
        $("#chat4").hide();
        $("#chat5").hide();
        $("#chat6").hide();
      }else if(scroll >= 300 && scroll < 600){
        $("#chat1").hide();
        $("#chat2").show();
        $("#chat3").hide();
        $("#chat4").hide();
        $("#chat5").hide();
        $("#chat6").hide();
      }else if(scroll >= 600 && scroll < 900){
        $("#chat1").hide();
        $("#chat2").hide();
        $("#chat3").show();
        $("#chat4").hide();
        $("#chat5").hide();
        $("#chat6").hide();
      }else if(scroll >= 900 && scroll < 1200){
        $("#chat1").hide();
        $("#chat2").hide();
        $("#chat3").hide();
        $("#chat4").show();
        $("#chat5").hide();
        $("#chat6").hide();
      }else if(scroll >= 1200 && scroll < 1400){
        $("#chat1").hide();
        $("#chat2").hide();
        $("#chat3").hide();
        $("#chat4").hide();
        $("#chat5").show();
        $("#chat6").hide();
      }else if(scroll >= 1400 && scroll < 1550){
        $("#chat1").hide();
        $("#chat2").hide();
        $("#chat3").hide();
        $("#chat4").hide();
        $("#chat5").hide();
        $("#chat6").show();
      }

      }else if(scroll >= 1550){
        $("#moonSurface").css({
          top: (-10+((scroll-1550)/10)*-1)+'vh'
        });
        $("#moonSurface2").css({
          top: (1+((scroll-1550)/8)*-1)+'vh'
        });
        $("#moonBlur").css({
          top: (-45+((scroll-1550)/9)*-1)+'vh'
        });
        $("#moonBlur2").css({
          top: (-120+((scroll-1550)/7.5)*-1)+'vh'
        });


      $(".zoom1 img").css({
        transform: 'translate3d(10%, -'+((scroll-1550)/100)+'%, 0) scale('+(100 + (scroll-1550)/10)/100+')',
        marginLeft: ((scroll-1550)/2)
      });

        if(scroll > 2280){
          $(".zoom1").css("visibility", "hidden");
          $(".bg1").css("visibility", "hidden");
          $("#astronaut").hide();
          $("#chat5").hide();
          $("#chat6").hide();
        }else if(scroll <= 2280){

          $(".zoom1").css("visibility", "visible");
          $(".bg1").css("visibility", "visible");
          $("#astronaut").show();
          $("#chat6").show();
        }
      }

      if(scroll >= 0 && scroll < 2600){
        $("#mars").hide();
      }else if(scroll >= 2600 && scroll < 4000){
        $("#mars").show();
        $("#mars").css({
          height: ((scroll-2600)/5)+'vh'
        });
      }else if(scroll >= 4000){
        $("#mars").stop().fadeOut();
      }

      if(scroll >= 3600){
        // $("#empty").height(4500);
          
        $("#marsColony").stop().fadeIn();
      }else{
        $("#marsColony").stop().fadeOut();
      }

      if (scroll >= 4000) {
        $("#astronautMe").show();
      }else{
        $("#astronautMe").hide();
      }

      // mars conversation
      if(scroll >= 4780){
        var inputValue = $("#inputValue").text();
        if(inputValue == 'hello'){
          $("#name").show();
          $("#userName").show();
        }else if(inputValue == ''){
          alert('hello earthling');
        }else{
          $("#name").hide();
          $("#userName").hide();
        }
        
      }else{
        $("#name").hide();
        $("#userName").hide();
      }

    $("#count").text(scroll);
}); //end of script

 $(function(){
  $("#count2").text($(document).height());
 });
