/**
 * Created by patrickhalton on 9/6/14.
 */
$(document).ready(function(){
    //$("#container #flip").click(function(){
    //    $("#container #panel").slideToggle("slow");
    //});
    $(function () {
       $('.showSingle').click(function () {
            var index = $(this).index(),
                newTarget = $('.targetDiv').eq(index).slideDown();
            $('.targetDiv').not(newTarget).slideUp();

        });
    });
});

//=====================modal=================================


$('.modal2Click').on('click', function(event){
    event.preventDefault();

    $('#overlay2')
        .fadeIn()
        .find('#modal2')
        .fadeIn();
    // top.location.href = '#modal2';
});

$('.close').on('click', function(event){
    event.preventDefault();
    $('#overlay2')
        .fadeOut()
        .find('#modal2')
        .fadeOut();
});


$('.mystatus').mouseover(function(){
    $(this).fadeTo(100,.3);
});

$('.mystatus').mouseout(function(){
    $(this).fadeTo(100,1);
});

//=======================array================================

var player = [{"name":"peyton manning", "stats":"tryhdhfj"}];
var player2 = [{"name":"peyton manning", "stats":"tryhdhfj"}];

console.log(player2[0].name);