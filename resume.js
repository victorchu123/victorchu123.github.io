var main = function(){
    $(".dropdown-toggle").click(function(){
        $(".dropdown-menu").toggle();
    });
    /*$(document.body).click(function(){
      $(".dropdown-menu").hide();
    });*/
    
};

$(document).ready(main);