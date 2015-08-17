$(document).ready(function () {

	/* Субменю в хедере */

	var slideAllow = true;
	function tglMainSubmenu() {
		if (slideAllow)	{
			$('.js-nav-submenu').toggle('slide',  {direction: 'up'}, 300);
			slideAllow = false;
		}
		setTimeout(function() {slideAllow = true}, 500);
	}

	$('.js-nav-link').hoverIntent(function() {
		if (!$('.js-nav-submenu').is(':visible')) {
			tglMainSubmenu();
		}
	}, function() {return true});

	$('.js-nav-wrapper').on('mouseleave', function() {
		if ($('.js-nav-submenu').is(':visible')) {
			tglMainSubmenu();
		}
	});

	$('.js-submenu-close').click(function(){
		tglMainSubmenu();
	});

	/* Валидация */

	if ($('.js-index-form').length) {

		$('.js-index-form').each(function(){
			var form = $(this);
			$(this).ajaxForm({
				beforeSubmit : function(){
					$('.js-index-form-input', form).each(function(){
						if( $(this).data('require') == true && $.trim($(this).val()) == '') {
							$(this).addClass('form-error');
						} else if( $.trim($(this).val()) != '' ) {
							$(this).removeClass('form-error');
						}
					});
					if($('input.form-error', form).length) {
						return false;
					};
				},
				dataType : 'html',
				success : function(){
					if ($('.js-index-form').hasClass('gift-map')) {
						$('.popup-wrapper--end').stop().fadeIn(300);
						$('body').addClass('js-popup-open');
						if ($(document).height() > $(window).height()) {
							$('body').css({'padding-right' : scrollbarWidth + 'px'});
						}
					} else {
						alert('Success!');
					}
				}
			});

		});
	};

});
