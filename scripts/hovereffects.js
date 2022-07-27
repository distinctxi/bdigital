$(document).ready(function(){
    $('#img1desc').mouseover(function(){
        $('#img1').css('filter',' none');
    });
    $('#img2desc').mouseover(function(){
        $('#img2').css('filter',' none');
    });
    $('#img3desc').mouseover(function(){
        $('#img3').css('filter',' none');
    });
    $('#img4desc').mouseover(function(){
        $('#img4').css('filter',' none');
    });
    $('#img5desc').mouseover(function(){
        $('#img5').css('filter',' none');
    });
    $('#img6desc').mouseover(function(){
        $('#img6').css('filter',' none');
    });
    $('#img7desc').mouseover(function(){
        $('#img7').css('filter',' none');
    });
    $('#img8desc').mouseover(function(){
        $('#img8').css('filter',' none');
    });
    $('#img9desc').mouseover(function(){
        $('#img9').css('filter',' none');
    });
    $('.gridinfo').mouseout(function(){
        $('#img1').css('filter',' grayscale()');
        $('#img2').css('filter',' grayscale()');
        $('#img3').css('filter',' grayscale()');
        $('#img4').css('filter',' grayscale()');
        $('#img5').css('filter',' grayscale()');
        $('#img6').css('filter',' grayscale()');
        $('#img7').css('filter',' grayscale()');
        $('#img8').css('filter',' grayscale()');
        $('#img9').css('filter',' grayscale()');
    });
});