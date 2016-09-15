var main = function(){
    $('.icon-menu').click(function(){
    $('.menu').animate({
        left: '0px'
        }, 200);
        
    $('body').animate({
        left: '285px'
        }, 200);
    });
    
    $('.icon-close').click(function(){
    $('.menu').animate({
        left: '-285px'
        }, 200);
        
    $('body').animate({
        left: '0px'
        }, 200);
    });
};

$(document).ready(main);

$(document).ready(function(){
    
    $("#col-sm-3").mouseenter(function(){
        $("#col-sm-3").addClass("grayscale");
    });
    
    $("#col-sm-3").mouseleave(function(){
        $("#col-sm-3").addClass("grayscale");
    });
    
});
