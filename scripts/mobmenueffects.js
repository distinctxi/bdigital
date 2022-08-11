$(document).mouseup(function(e){
    var container = $("#mobnavbar");

    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length){
        $('#mobnavbar').css('width','0');
    }
});