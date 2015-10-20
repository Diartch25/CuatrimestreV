/*$(document).ready( function() {
    var displayClass = $('.nav-bar').css('display');
    console.log(displayClass);
    $('#display').click(
        function(){
            if(displayClass == "none"){
                $('.nav-bar').slideToggle().css('display', 'block');
            }else if (displayClass == "block") {
                $('.nav-bar').slideToggle().css('display', 'none');
            }
    })
    
} );*/
$('#display').on('click', function(){
    $('.toggle-off').toggleClass('toggle-on');
});