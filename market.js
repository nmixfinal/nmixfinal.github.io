$(function(){
  $('.content').mixItUp();
});

$('input').on('click',function() {
    if ($(this).hasClass('grid')) {
        $('#contain ul').removeClass('small-block-grid-1').addClass('small-block-grid-3 medium-block-grid-4 large-block-grid-5');
    }
    else if($(this).hasClass('list')) {
        $('#contain ul').removeClass('small-block-grid-3 medium-block-grid-4 large-block-grid-5').addClass('small-block-grid-1');
    }
});

$('.mix').on('click',function() {
    alert('hi');
});

function pullModal () {
	alert('hi');
	$('#myModal').modal('show');
}
