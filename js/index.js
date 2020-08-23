$(function(){
    
    //calculate padding for the body dynamically considering the height of the navbar
    
    $("body").css("padding",$(".navbar").innerHeight());
    
    //calculating the padding of the class"block" dynamically considering the height of the fixed navbar 
    $(".block").css("padding",$(".navbar").innerHeight() +10);
    
    $(".navbar li a").click(function(e){
        e.preventDefault();
       $("html , body").animate({
           scrollTop:$("#"+$(this).data("scroll")).offset().top +1
       },1000);
    })
    
    
    //ading class"active" to one of the list item and removing it from the others 
    
    $(".navbar li a").click(function(){
        
        $(".navbar a").removeClass("active");
        $(this).addClass("active");
       // $(this).addClass("active").parent().siblings().find("a").removeClass("active");
    });
    
   
    
    $(window).scroll(function(){
        
     //sync navbar links with sections    
       
        $(".block").each(function(){
            
            if($(window).scrollTop()>$(this).offset().top)
                {
                    var blockid = $(this).attr("id");
                    $(".navbar li a").removeClass("active");
                    
                    $(".navbar li a[data-scroll="+blockid+"]").addClass("active");
                }
        });
        
    //to top button 
        
        var scrolltotop = $(".topbutton a");
        if($(window).scrollTop()>1500)
            {
                if($(".topbutton a").is(":hidden"))
                    {
                         scrolltotop.fadeIn(1000);
                    }
               
            }
        else
            {
                scrolltotop.fadeOut(1000);
            }
    });
    
    
    // click on to top button to scroll to the top 
    
    $(".topbutton ").click(function(e){
        e.preventDefault();
        
        $("html,body").animate({
            
            scrollTop:0
        }, 500);
    });
    
    
    //show popup
    
    $(".show-popup").click(function(){
       
        $($(this).data("popup")).fadeIn(1000);
    });
    
    $(".popup").click(function(){
        
       $(this).fadeOut(); 
    });
    
    $(".popup .inner").click(function(e){
        
       e.stopPropagation();
    });
    
    $(".popup .closepopup").click(function(e){
        
        e.preventDefault();
        
       $(this).parentsUntil(".popup").parent().fadeOut(); 
    });
    
    $(document).keydown(function(e)
                       {
        if(e.keyCode==27)
            {
                $(".popup").fadeOut();
            }
    });
    
    
    //error message 
    
    $(".my-error-message").each(function(){
       
        $(this).animate({
            
            right:0
        },1000,function(){
            
            $(this).delay(3000).fadeOut( );
        });
    });
    
    //buttomn effects
    
    $(".from-top").hover(function(){
        $(this).find("span").eq(0).animate({
            height:'100%'
        },500);
    },function(){
        $(this).find("span").eq(0).animate({
            height:0     
        },500);
    });
    
    $(".border-left").hover(function(){
        
        $(this).find("span").eq(0).animate({
           width:"100%" 
        },1000);
    },function(){
        $(this).find("span").eq(0).animate({
           width:0 
        },1000);
    })
    
    $(".border-top").hover(function(){
       $(this).find("span").eq(0).animate({
          height:"100%"
           
       },1000);
       
    },function(){
        $(this).find("span").eq(0).animate({
            height:0
        },1000);
    });
    
    
//progress bar
    
    $(".animated-progress-bar span").each(function(){
        

      $(this).animate({
            width: $(this).attr("data-progress") + "%"
        },2500,function(){
          
          $(this).text( $(this).attr("data-progress") + "%")
      });
    });
    
    
    //fixed menu
    
    $(".fixed-menu .fixed-menu-icon").on("click",function(){
        
        $(this).parent(".fixed-menu").toggleClass("is-visible");
        
        if($(this).parent(".fixed-menu").hasClass("is-visible"))
            {
                $(this).parent(".fixed-menu").animate({
                   left:0 
                },1000);
                
                $("body").animate({
                    paddingLeft:$(this).parent(".fixed-menu").innerWidth()
                },1000);
            }
        else
        {
            $(this).parent(".fixed-menu").animate({
                
               left: "-"+ $(this).parent(".fixed-menu").innerWidth()
            },1000);
            
            
                 
             $("body").animate({
                    paddingLeft:"80px"
                },1000);
            
        }
     
            
    })
     
    

 //change color of body
    
    $(".change-colors li").on("click",function(){
       
        $("body").attr("data-choosen-color",$(this).data("color"));
    });
    
    
//gallery images 
    
    var numberofthumbnails= $(".thumbnails").children().length,
        marginbetweenimgs="0.5",
        totalmargin=(numberofthumbnails-1)*marginbetweenimgs,
        widthofthumbnail=(100-totalmargin)/numberofthumbnails;
    
    
    $(".thumbnails img").css({
       
        "width":widthofthumbnail+"%",
        "margin-right":    marginbetweenimgs+ "%"
    });
    
    $(".thumbnails img").on("click",function(){
       
        $(".master-image img").hide().attr("src",$(this).attr("src")).slideDown(800);
        
        $(this).addClass("selected-img").siblings().removeClass("selected-img");
        
    });

    
    $("  .master-image  .right-icon").on("click",function(){
        
        if(  $(".thumbnails .selected-img").is(":last-child"))
            {
                $(".thumbnails img").eq(0).click();
            }
    else
        {
              $(".thumbnails .selected-img").next().click();
        }
      
    });
    
      $("  .master-image  .left-icon").on("click",function(){
          
          if($(".thumbnails .selected-img").is(":first-child"))
              {
                  $(".thumbnails img:last").click();
              }
       else
       {
            $(".thumbnails .selected-img").prev().click();
       }
       
    });

    
    
//products
    
    $(".myproducts .product .plus-icon").on("click",function(){
      
        
      
        $(this).next(".descrption").slideToggle();
        
        $(this).fadeOut(1000);
    $(this).next(".descrption").next(".minus-icon").fadeIn(500).css({
            display:"block"
       });
    });
    

    
    $(".myproducts .product .minus-icon").on("click",function(){
    
        $(this).prev(".descrption").slideUp(1000);
        $(this).fadeOut(1000);
        $(this).prev(".descrption").prev(".plus-icon").fadeIn(500);
    });
    
    
//items
    
       $(".items .item .plus-icon").on("click",function(){
      
        
      
        $(this).next(".descrption").slideToggle();
        
        $(this).fadeOut(1000);
    $(this).next(".descrption").next(".minus-icon").fadeIn(500).css({
            display:"block"
       });
    });
    

    
    $(".items .item .minus-icon").on("click",function(){
    
        $(this).prev(".descrption").slideUp(1000);
        $(this).fadeOut(1000);
        $(this).prev(".descrption").prev(".plus-icon").fadeIn(500);
    });
    
    
            //grid and lit view
    
$(".view-option span ").on("click",function(){
    
  
    $(".items").removeClass("list-view grid-view").addClass($(this).data("class"));
    
});
    
    
    
    //contact us
    
    //hide placeholer on focus and restore on blur
    
    
    var placeholderattr="" ;
    $("[placeholder]").focus(function(){
        
        placeholderattr=$(this).attr("placeholder");
        $(this).attr("placeholder","");
        
    }).blur(function(){
        $(this).attr("placeholder",placeholderattr);
        
    });
    
    
    //show verify message for required inouts
    
    $("[required]").blur(function(){
        
     console.log("working");
        
        if( $(this).val() == "" )
            {
                $(this).next("span").fadeIn().delay(2000).fadeOut();
                
            }
        
    });
    
    
    //custmize the inpute type=file
    
    $('.my-form input[type="file"]').wrap('<div class="custom_file"></div>');
    $('.custom_file').prepend('<span>UPLOAD YOUR FILE</span>');
      $(' .custom_file').append('<span class="my-icon-up"><i class="fas fa-upload "></i></span>');
      $('.my-form input[type="file"]').change(function(){
         
        $(this).prev('span').text($(this).val());
          
      });

    
    //state the direction of email input left to right or  from right to left
    
    $(".dirc_status").on('keyup',function(){
       
        if($(this).val().charCodeAt(0) < 200)
        {
            $(this).css('direction','ltr');
         
        }
        else
            {
                $(this).css('direction','rtl');
                
            }
        
    });
    
    
    //triming the over text so it wouldn't ruine te design
    
  function trimtext(selector,maxlenght)
    {
        $(selector).each(function(){
            
            
            if($(this).text().length > maxlenght)
                {
                    var trimmedtext = $(this).text().substr(0,maxlenght);
                    
                    $(this).text(trimmedtext + '.... you have exceeded the maximum lenght of text ');
                }
        });
    }
    
    
 trimtext('.contact-us .texttrimrtst1', 10);   
    
    
    
    //type write effect
    
    var thetext = $('.typedtext').data('text'),
         
        thetextlenght = thetext.length,
        
        n=0,
        
        typer= setInterval(function(){
            
            $('.typedtext').each(function(){
                
                $(this).html($(this).html()+ thetext[n] );
            })
            
            n +=1 ;
            
            $('.typedtext').css('border','1px solid #fff');
            
            if(n === thetextlenght)
                {
                    
                    $('.typedtext').text(' ');
                    n=0;
                    
                   // clearInterval(typer);
                
                }
            
            
        },80);
    
    
    
    
    
    
    
    //services
    
    //shuffling cards
    
    var zindexvalue = 0;
    
    $('.cards .card').on('click',function(){
       
        $(this).animate({
            
            left:'30%',
            marginTop:30,
            
            
        },400,function(){
            zindexvalue--;
            $(this).css('z-index',zindexvalue);
           
            
        }).animate({
            
            left:$(this).css('left'),
            marginTop:0
        },400)
    });
    
    
    //warning 
    
    blinkloop();
    
    
    function blinkloop()
    {
        $('.blink-warning').fadeOut(1000,function(){
            
            $(this).fadeIn(1000);
                blinkloop();
        });
        
    }
    
    
    
    //to do list
    
    var newtask = $('.task-input');
    
    $('.add-task').on('submit',function(e){
        e.preventDefault();
        
        if(newtask.val()  !=  '')
            {
                $('<li>'+newtask.val()+'</li>').appendTo('.tasks');
                newtask.val(''); 
            }
    });
    
    
    $('.tasks').on('click','li',function(){
                   
        $(this).css('text-decoration','line-through').delay(300).fadeOut(200,function(){
            $(this).remove();
        });
        
                   });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});