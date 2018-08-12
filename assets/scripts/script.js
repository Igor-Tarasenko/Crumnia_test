$(document).ready(function() {
    $('.first-dropdown-js').click(function(){
        $('.all-list-js').show("medium", "linear");
    });
    $('.second-dropdown-js').click(function(){
        $('.lifestyle-list-js').show("medium", "linear");
    });
    $('.third-dropdown-js').click(function(){
        $('.handmade-list-js').show("medium", "linear");
    });
    $(document).mouseup(function (e) {
        var div = $(".all-list-js, .lifestyle-list-js, .handmade-list-js");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.hide();
        }
    });
});