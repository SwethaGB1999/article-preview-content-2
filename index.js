
let svg1='./images/icon-share.svg';
let svg2='./images/icon-share-active.svg';
$('.share-button').on('click',function(){
    
    let currentAttr=$('.share-button>img').attr('src');
    $('.share').toggleClass('hide');
    if(currentAttr===svg1){
        $('.share-button>img').attr('src',svg2);
        $('.share-button').css('background-color','hsl(214, 17%, 51%)');
    }
    else if(currentAttr===svg2){
        $('.share-button>img').attr('src',svg1);
        $('.share-button').css('background-color','hsl(210, 46%, 95%)');
    }

});
$(document).ready(function() {
    function checkMediaQuery() {
      if ($(window).width() <= 1092) {
        $('.share-button').off('click.profile'); 
    // Code to run when the screen is less than or equal to 768px wide
    $('.share-button').on('click',function(){
        $('.profile').toggleClass('hide');
        $('.profile-container').toggleClass('new-style');
        $('.profile-inner-container').toggleClass('profile-inner-container-ns');
    });
}
}

checkMediaQuery(); // Check on initial load
$(window).resize(checkMediaQuery); // Check on window resize
});