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
        $("#moonSurface").css({
          top: (-10)+'vh'
        });
        $("#moonSurface2").css({
          top: (1)+'vh'
        });
        $("#moonBlur").css({
          top: (-45)+'vh'
        });
        $("#moonBlur2").css({
          top: (-120)+'vh'
        });
      }else if(scroll >= 300 && scroll < 600){
        $("#chat1").hide();
        $("#chat2").show();
        $("#chat3").hide();
        $("#chat4").hide();
        $("#chat5").hide();
        $("#chat6").hide();
        $("#moonSurface").css({
          top: (-10)+'vh'
        });
        $("#moonSurface2").css({
          top: (1)+'vh'
        });
        $("#moonBlur").css({
          top: (-45)+'vh'
        });
        $("#moonBlur2").css({
          top: (-120)+'vh'
        });
      }else if(scroll >= 600 && scroll < 900){
        $("#chat1").hide();
        $("#chat2").hide();
        $("#chat3").show();
        $("#chat4").hide();
        $("#chat5").hide();
        $("#chat6").hide();
        $("#moonSurface").css({
          top: (-10)+'vh'
        });
        $("#moonSurface2").css({
          top: (1)+'vh'
        });
        $("#moonBlur").css({
          top: (-45)+'vh'
        });
        $("#moonBlur2").css({
          top: (-120)+'vh'
        });
      }else if(scroll >= 900 && scroll < 1200){
        $("#chat1").hide();
        $("#chat2").hide();
        $("#chat3").hide();
        $("#chat4").show();
        $("#chat5").hide();
        $("#chat6").hide();
        $("#moonSurface").css({
          top: (-10)+'vh'
        });
        $("#moonSurface2").css({
          top: (1)+'vh'
        });
        $("#moonBlur").css({
          top: (-45)+'vh'
        });
        $("#moonBlur2").css({
          top: (-120)+'vh'
        });
      }else if(scroll >= 1200 && scroll < 1400){
        $("#chat1").hide();
        $("#chat2").hide();
        $("#chat3").hide();
        $("#chat4").hide();
        $("#chat5").show();
        $("#chat6").hide();
        $("#moonSurface").css({
          top: (-10)+'vh'
        });
        $("#moonSurface2").css({
          top: (1)+'vh'
        });
        $("#moonBlur").css({
          top: (-45)+'vh'
        });
        $("#moonBlur2").css({
          top: (-120)+'vh'
        });
      }else if(scroll >= 1400 && scroll < 1550){
        $("#chat1").hide();
        $("#chat2").hide();
        $("#chat3").hide();
        $("#chat4").hide();
        $("#chat5").hide();
        $("#chat6").show();
        $("#moonSurface").css({
          top: (-10)+'vh'
        });
        $("#moonSurface2").css({
          top: (1)+'vh'
        });
        $("#moonBlur").css({
          top: (-45)+'vh'
        });
        $("#moonBlur2").css({
          top: (-120)+'vh'
        });
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
        // landing in mars
          
        $("#marsColony").stop().fadeIn();
      }else{
        $("#marsColony").stop().fadeOut();
      }

      if (scroll >= 4000) {
        $("#astronautMe").show();
        if (scroll >= 4100) {
          $("#frame").show();
          $("#astronautMe").removeClass('dim');
          $("#martian1").addClass('dim');
          $("#martian2").addClass('dim');
          $("#martian3").addClass('dim');
          $("#astronautMeAvatar").show();
          $("#martian1Avatar").hide();
          $("#martian2Avatar").hide();
          $("#martian3Avatar").hide();
          $("#martian1").hide();
          $("#martian2").hide();
          $("#martian3").hide();
          $("#frameText").text("We're here!");

          if (scroll >= 4400 && scroll < 4600) {
            $("#astronautMe").removeClass('dim');
            $("#martian1").addClass('dim');
            $("#martian2").addClass('dim');
            $("#martian3").addClass('dim');
            $("#astronautMeAvatar").show();
            $("#martian1Avatar").hide();
            $("#martian2Avatar").hide();
            $("#martian3Avatar").hide();
            $("#martian1").hide();
            $("#martian2").hide();
            $("#martian3").hide();
            $("#frameText").text("Welcome to Mars!");
          }
          if (scroll >= 4600 && scroll < 4800) {
            $("#astronautMe").addClass('dim');
            $("#martian1").removeClass('dim');
            $("#martian2").addClass('dim');
            $("#martian3").addClass('dim');
            $("#astronautMeAvatar").hide();
            $("#martian1Avatar").show();
            $("#martian2Avatar").hide();
            $("#martian3Avatar").hide();
            $("#martian1").show();
            $("#martian2").hide();
            $("#martian3").hide();
            $("#frameText").text("Hep! hep!");
          }
          if (scroll >= 4800 && scroll < 5100) {
            $("#astronautMe").addClass('dim');
            $("#martian1").addClass('dim');
            $("#martian2").removeClass('dim');
            $("#martian3").addClass('dim');
            $("#astronautMeAvatar").hide();
            $("#martian1Avatar").hide();
            $("#martian2Avatar").show();
            $("#martian3Avatar").hide();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").hide();
            $("#frameText").text("Hoooraayyy!!");
          }
          if (scroll >= 5100 && scroll < 5400) {
            $("#astronautMe").addClass('dim');
            $("#martian1").addClass('dim');
            $("#martian2").addClass('dim');
            $("#martian3").removeClass('dim');
            $("#astronautMeAvatar").hide();
            $("#martian1Avatar").hide();
            $("#martian2Avatar").hide();
            $("#martian3Avatar").show();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();
            $("#frameText").text("Ola!");
          }
          if (scroll >= 5400 && scroll < 5700) {
            $("#astronautMe").addClass('dim');
            $("#martian1").addClass('dim');
            $("#martian2").removeClass('dim');
            $("#martian3").addClass('dim');
            $("#astronautMeAvatar").hide();
            $("#martian1Avatar").hide();
            $("#martian2Avatar").show();
            $("#martian3Avatar").hide();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();
            $("#frameText").text("Hi Marc! Welcome back!");
          }
          if (scroll >= 5700 && scroll < 6000) {
            $("#astronautMe").removeClass('dim');
            $("#martian1").addClass('dim');
            $("#martian2").addClass('dim');
            $("#martian3").addClass('dim');
            $("#astronautMeAvatar").show();
            $("#martian1Avatar").hide();
            $("#martian2Avatar").hide();
            $("#martian3Avatar").hide();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();
            $("#frameText").text("Hi friends! I miss you all. How's your day?");
          }
          if (scroll >= 6000 && scroll < 6300) {
            $("#astronautMe").addClass('dim');
            $("#martian1").removeClass('dim');
            $("#martian2").addClass('dim');
            $("#martian3").addClass('dim');
            $("#astronautMeAvatar").hide();
            $("#martian1Avatar").show();
            $("#martian2Avatar").hide();
            $("#martian3Avatar").hide();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();
            $("#frameText").text("huh? I've noticed that you have accompanied by someone");
          }
          if (scroll >= 6300 && scroll < 6500) {
            $("#astronautMe").removeClass('dim');
            $("#martian1").addClass('dim');
            $("#martian2").addClass('dim');
            $("#martian3").addClass('dim');
            $("#frame").show();
            $("#frameText").show();
            $("#astronautMeAvatar").show();
            $("#martian1Avatar").hide();
            $("#martian2Avatar").hide();
            $("#martian3Avatar").hide();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();
            $("#frameText").text("yeah! He/She is my portfolio's visitor");
            // $("#inputValue").text("hello");
            // $("#empty2").hide();
          }
          if (scroll >= 6500 && scroll < 6600) {
            $("#frame").hide();
            $("#frameText").hide();
            $("#astronautMeAvatar").hide();
            $("#name").hide();
            $("#userName").hide();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();
          }
          if (scroll >= 6600 && scroll < 7000) {
            $("#frame").show();
            $("#frameText").show();
            $("#astronautMe").removeClass('dim');
            $("#martian1").addClass('dim');
            $("#martian2").addClass('dim');
            $("#martian3").addClass('dim');
            $("#astronautMeAvatar").show();
            $("#martian1Avatar").hide();
            $("#martian2Avatar").hide();
            $("#martian3Avatar").hide();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();

            var inputValue = $("#inputValue").text();

              if(inputValue == "hello"){
                $("#frameText").text("by the way, may we know your name? sir/maam ?");
                $("#name").show();
                $("#userName").show();
              }

              else if(inputValue == "Earthling"){
                $("#frameText").text('').append("you scrolled back? don't you want to be called <span class='valText'>"+inputValue
                  +"</span>");
                $("#name").show();
                $("#userName").show();
                //alert('hello '+inputValue);
              }
              else{
                $("#frameText").text('').append("want to change your screen name <span class='valText'>"+inputValue
                  +"</span>");
                $("#name").show();
                $("#userName").show();
              }


          }
          if(scroll >= 7000 && scroll <7300){
            var inputValue = $("#inputValue").text();
            if(inputValue == "" || inputValue == "Earthling"){
                inputValue = "Earthling";
                $("#inputValue").text("Earthling");
                $("#name").hide();
                $("#userName").hide();
                $("#frame").show();
                $("#frameText").show();
                $("#astronautMe").removeClass('dim');
                $("#martian1").addClass('dim');
                $("#martian2").addClass('dim');
                $("#martian3").addClass('dim');
                $("#astronautMeAvatar").show();
                $("#martian1Avatar").hide();
                $("#martian2Avatar").hide();
                $("#martian3Avatar").hide();
                $("#martian1").show();
                $("#martian2").show();
                $("#martian3").show();
                $("#frameText").text('').append("Since you didn't give a name, we will call you <span class='valText'>"+inputValue
                  +"</span>! let me indroduce you my friends");
              } else if(inputValue != "Earthling") {
                $("#frame").show();
                $("#frameText").show();
                $("#astronautMe").removeClass('dim');
                $("#martian1").addClass('dim');
                $("#martian2").addClass('dim');
                $("#martian3").addClass('dim');
                $("#astronautMeAvatar").show();
                $("#martian1Avatar").hide();
                $("#martian2Avatar").hide();
                $("#martian3Avatar").hide();
                $("#martian1").show();
                $("#martian2").show();
                $("#martian3").show();
                $("#frameText").text('').append('Alright! your name is <span class="valText">'+inputValue
                  +'</span> let me indroduce you my friends');
                
              }
          }
          if (scroll >= 7300 && scroll < 7600) {
            $("#frame").show();
            $("#frameText").show();
            $("#astronautMe").removeClass('dim');
            $("#martian1").removeClass('dim');
            $("#martian2").addClass('dim');
            $("#martian3").addClass('dim');
            $("#astronautMeAvatar").show();
            $("#martian1Avatar").hide();
            $("#martian2Avatar").hide();
            $("#martian3Avatar").hide();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();
            $("#frameText").text("His name is ").append('<span class="valText">Marcus</span>');
          }

          if (scroll >= 7600 && scroll < 7900) {
            $("#frame").show();
            $("#frameText").show();
            $("#astronautMe").removeClass('dim');
            $("#martian1").addClass('dim');
            $("#martian2").removeClass('dim');
            $("#martian3").addClass('dim');
            $("#astronautMeAvatar").show();
            $("#martian1Avatar").hide();
            $("#martian2Avatar").hide();
            $("#martian3Avatar").hide();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();
            $("#frameText").text("The next one ").append('<span class="valText">Marlon</span>');;
          }

          if (scroll >= 7900 && scroll < 8100) {
            $("#frame").show();
            $("#frameText").show();
            $("#astronautMe").removeClass('dim');
            $("#martian1").addClass('dim');
            $("#martian2").addClass('dim');
            $("#martian3").removeClass('dim');
            $("#astronautMeAvatar").show();
            $("#martian1Avatar").hide();
            $("#martian2Avatar").hide();
            $("#martian3Avatar").hide();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();
            $("#frameText").text("The third one is ").append('<span class="valText">Martin</span>');;
          }

          if (scroll >= 8100 && scroll < 8400) {
            var inputValue = $("#inputValue").text();
            $("#frame").show();
            $("#frameText").show();
            $("#astronautMe").removeClass('dim');
            $("#martian1").addClass('dim');
            $("#martian2").addClass('dim');
            $("#martian3").addClass('dim');
            $("#astronautMeAvatar").show();
            $("#martian1Avatar").hide();
            $("#martian2Avatar").hide();
            $("#martian3Avatar").hide();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();
            $("#frameText").text(inputValue+' meet "The Martians"');
            $("#frameText").text("").append('<span class="valText">'+inputValue+'</span> meet <span class="valText">"The Martians"</span>');
          }

          if (scroll >= 8400 && scroll < 8700) {
            var inputValue = $("#inputValue").text();
            if (inputValue == 'hello') {
              inputValue = 'Earthling';
              $("#inputValue").text('Earthling');
            }
            $("#frame").show();
            $("#frameText").show();
            $("#astronautMe").addClass('dim');
            $("#martian1").addClass('dim');
            $("#martian2").addClass('dim');
            $("#martian3").removeClass('dim');
            $("#astronautMeAvatar").hide();
            $("#martian1Avatar").hide();
            $("#martian2Avatar").hide();
            $("#martian3Avatar").show();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();
            $("#frameText").text("hey "+inputValue+", nice to meet you");
            $("#frameText").text("hey ").append('<span class="valText">'+inputValue+'</span>, nice to meet you');
          }

          if (scroll >= 8700 && scroll < 9000) {
            $("#frame").show();
            $("#frameText").show();
            $("#astronautMe").addClass('dim');
            $("#martian1").addClass('dim');
            $("#martian2").addClass('dim');
            $("#martian3").removeClass('dim');
            $("#astronautMeAvatar").hide();
            $("#martian1Avatar").hide();
            $("#martian2Avatar").hide();
            $("#martian3Avatar").show();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();
            $("#frameText").text("since you've visit Marc's portfolio, we are here to let you know about him");
          }

          if (scroll >= 9000 && scroll < 9300) {
            $("#frame").show();
            $("#frameText").show();
            $("#astronautMe").addClass('dim');
            $("#martian1").addClass('dim');
            $("#martian2").addClass('dim');
            $("#martian3").removeClass('dim');
            $("#astronautMeAvatar").hide();
            $("#martian1Avatar").hide();
            $("#martian2Avatar").hide();
            $("#martian3Avatar").show();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();
            $("#frameText").text('His full name is ').append('<span class="valText">Marc Vincent C. Reyes</span>');
          }

          if (scroll >= 9300 && scroll < 9600) {
            $("#frame").show();
            $("#frameText").show();
            $("#astronautMe").addClass('dim');
            $("#martian1").addClass('dim');
            $("#martian2").removeClass('dim');
            $("#martian3").addClass('dim');
            $("#astronautMeAvatar").hide();
            $("#martian1Avatar").hide();
            $("#martian2Avatar").show();
            $("#martian3Avatar").hide();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();
            $("#frameText").text('yeah! He finished Computer Engineering course at ').append('<span class="valText">Bulacan State University</span>');
          }

          if (scroll >= 9600 && scroll < 9900) {
            $("#frame").show();
            $("#frameText").show();
            $("#astronautMe").addClass('dim');
            $("#martian1").removeClass('dim');
            $("#martian2").addClass('dim');
            $("#martian3").addClass('dim');
            $("#astronautMeAvatar").hide();
            $("#martian1Avatar").show();
            $("#martian2Avatar").hide();
            $("#martian3Avatar").hide();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();
            $("#frameText").text("that's right, and in year 2014-2016, he worked at ").append('<span class="valText">Accenture Inc</span> as a <u>Software Engineer</u>');
          }

          if (scroll >= 9900 && scroll < 10200) {
            $("#frame").show();
            $("#frameText").show();
            $("#astronautMe").addClass('dim');
            $("#martian1").removeClass('dim');
            $("#martian2").addClass('dim');
            $("#martian3").addClass('dim');
            $("#astronautMeAvatar").hide();
            $("#martian1Avatar").show();
            $("#martian2Avatar").hide();
            $("#martian3Avatar").hide();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();
            $("#frameText").text("he then switch to web development by studying at ").append('<span class="valText">Tuitt</span>, a very awesome coding bootcamp. Visit their facebook page here -> <a target="_blank" href="https://www.facebook.com/tuittphilippines/?fb_dtsg_ag=Adz1RCXPKMXVtkWyCX7jjoGMVRqZzUEQ2eHg3b7zVTtqTA%3AAdwv0rFyMHInOilHt-_STIm4cREqXJdaDfOeMYiWlEgghQ"><img src="assets/images/tuitt.png" style="width:35px; height:40px"></img></a>');
            $("#orb1").hide();
            $("#resume").hide();
          }

          if (scroll >= 10200 && scroll < 10500) {
            $("#frame").show();
            $("#frameText").show();
            $("#astronautMe").addClass('dim');
            $("#martian1").addClass('dim');
            $("#martian2").addClass('dim');
            $("#martian3").removeClass('dim');
            $("#astronautMeAvatar").hide();
            $("#martian1Avatar").hide();
            $("#martian2Avatar").hide();
            $("#martian3Avatar").show();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();
            $("#frameText").text("You can click this orb to view Marc's ").append("<span class='valText'>cv/Resume</span>");
            $("#orb1").show();
            $("#resume").show();
            $("#orb2").hide();
            $("#projects").hide();
            $("#orb3").hide();
            $("#skills").hide();
          }

          if (scroll >= 10500 && scroll < 10800) {
            $("#frame").show();
            $("#frameText").show();
            $("#astronautMe").addClass('dim');
            $("#martian1").addClass('dim');
            $("#martian2").removeClass('dim');
            $("#martian3").addClass('dim');
            $("#astronautMeAvatar").hide();
            $("#martian1Avatar").hide();
            $("#martian2Avatar").show();
            $("#martian3Avatar").hide();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();
            $("#frameText").text("or click this orb for his ").append("<span class='valTextLink' onclick='launchProjects()'>sample projects</span>");
            $("#orb1").show();
            $("#resume").show();
            $("#orb2").show();
            $("#projects").show();
            $("#orb3").hide();
            $("#skills").hide();
          }

          if (scroll >= 10800 && scroll < 11100) {
            $("#frame").show();
            $("#frameText").show();
            $("#astronautMe").addClass('dim');
            $("#martian1").removeClass('dim');
            $("#martian2").addClass('dim');
            $("#martian3").addClass('dim');
            $("#astronautMeAvatar").hide();
            $("#martian1Avatar").show();
            $("#martian2Avatar").hide();
            $("#martian3Avatar").hide();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();
            $("#frameText").text("also check this orb for Marc's ").append("<span class='valTextLink' onclick='launchModalSkills()'>skills</span>");
            $("#orb1").show();
            $("#resume").show();
            $("#orb2").show();
            $("#projects").show();
            $("#orb3").show();
            $("#skills").show();
          }

          if (scroll >= 11100 && scroll < 11400) {
            $("#frame").show();
            $("#frameText").show();
            $("#astronautMe").removeClass('dim');
            $("#martian1").addClass('dim');
            $("#martian2").addClass('dim');
            $("#martian3").addClass('dim');
            $("#astronautMeAvatar").show();
            $("#martian1Avatar").hide();
            $("#martian2Avatar").hide();
            $("#martian3Avatar").hide();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();
            $("#frameText").text("Thank you friends for all these info");
            $("#orb1").show();
            $("#resume").show();
            $("#orb2").show();
            $("#projects").show();
            $("#orb3").show();
            $("#skills").show();
          }

          if (scroll >= 11400 && scroll < 11700) {
            $("#frame").show();
            $("#frameText").show();
            $("#astronautMe").removeClass('dim');
            $("#martian1").addClass('dim');
            $("#martian2").addClass('dim');
            $("#martian3").addClass('dim');
            $("#astronautMeAvatar").show();
            $("#martian1Avatar").hide();
            $("#martian2Avatar").hide();
            $("#martian3Avatar").hide();
            $("#martian1").show();
            $("#martian2").show();
            $("#martian3").show();
            $("#frameText").text("Alright, you can always jump in this area to view my information. Just click the ").append("<span class='valText'>About</span> link in our nav bar");
            $("#orb1").show();
            $("#resume").show();
            $("#orb2").show();
            $("#projects").show();
            $("#orb3").show();
            $("#skills").show();
          }


        }
      }else{
        $("#astronautMe").hide();
        $("#astronautMeAvatar").hide();
        $("#frame").hide();
      }

      // mars conversation


    $("#count").text(scroll);
}); //end of script

 $(function(){
  console.log($("#inputValue").text());
  $("#count2").text($(document).height());
 });
