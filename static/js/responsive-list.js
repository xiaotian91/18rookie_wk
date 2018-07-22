var bgColor;
var effect = 'animated bounceInLeft';
/* bounceIn, bounceInUp, bounceInDown, bounceInLeft,
										 bounceInRight, rotateIn, rotateInUpLeft, rotateInDownLeft,
										 rotateInUpRight, rotateInDownRight  */

$('.all-content').hide();

$('.responsive-list-content li').click(function() {
	$('.card-front, .card-back').hide();
	$('.responsive-list-content li').removeClass('active').hide().css('border', 'none');
	$(this).addClass('active').show();
	bgColor = $('.active .card-back').css('background-color');
	$('.responsive-list-content').css('background-color', bgColor);
	$('.close, .all-content').show();
	$('.responsive-list').append('<span class="close">关闭</span>').addClass(effect);
});


$('.responsive-list').on('click', '.close', function() {

	$('.close').remove();
	bgColor = $('.active .card-front').css('background-color');
	$('.responsive-list').removeClass(effect);
	$('.all-content').hide();
	$('.responsive-list-content li').removeClass('active').show().css({
		'border-bottom': '1px solid #2c2c2c',
		'border-left': '1px solid #2c2c2c'
	});
	$('.card-front, .card-back').show();
	$('.responsive-list-content').css('background-color', bgColor);
});