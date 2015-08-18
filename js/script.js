$(document).ready(function () {

	/* Субменю в хедере */

	var slideAllow = true;

	function toggleSmth(someItem, someDir, someSpeed) {
		if (slideAllow)	{
			$(someItem).toggle('slide',  {direction: someDir || 'up'}, someSpeed || 300);
			slideAllow = false;
		}
		setTimeout(function() {slideAllow = true}, 500);
	}

	$('.js-nav-link').hoverIntent(function() {
		if (!$('.js-nav-submenu').is(':visible')) {
			toggleSmth('.js-nav-submenu', 'up');
		}
	}, function() {return true});

	$('.js-nav-wrapper').on('mouseleave', function() {
		if ($('.js-nav-submenu').is(':visible')) {
			toggleSmth('.js-nav-submenu', 'up');
		}
	});

	$('.js-submenu-close').click(function(){
		toggleSmth('.js-nav-submenu', 'up');
	});

	/* Попап в хедере */

	$('.header .js-popup-open').click(function() {
		toggleSmth('.js-header-form-wrapper', 'right', 600);
	});

	if ($('.js-header-form-wrapper').length) {
		$(document).click(function(event) {
			if ($('.js-header-form-wrapper').is(':visible')) {
				if(!$(event.target).closest('.js-header-form-wrapper, .js-popup-open').length) {
					toggleSmth('.js-header-form-wrapper', 'right', 600);
				}
			}
		});
	}

	$('.header .js-popup-close').click(function() {
		toggleSmth('.js-header-form-wrapper', 'right', 600);
	});

	/* Форма */

	$('.js-fancy-field').click(function() {
		$('.js-fancy-field').removeClass('is-focused');
		$('input', $('.js-fancy-field')).each(function() {
			if (!$(this).val()) {
				$(this).parent().removeClass('has-label')
			}
		});
		if (!$(this).hasClass('is-focused')) {
			$(this).addClass('is-focused').addClass('has-label');
		}
	});

	if ($('.js-fancy-field').length) {
		$(document).click(function(event) {
			if(!$(event.target).closest('.js-fancy-field').length) {
				if ($('.js-fancy-field').hasClass('is-focused')) {
					$('.js-fancy-field').removeClass('is-focused');
				}
				$('input', $('.js-fancy-field')).each(function() {
					if (!$(this).val()) {
						$(this).parent().removeClass('has-label')
					}
				});
			}
		});
	}

	/* Валидация */

	if ($('.js-form').length) {

		$('.js-form').each(function(){
			var $form = $(this);
			$form.ajaxForm({
				dataType : 'html',
				success : function(){
					$('.js-form-content', $form).hide();
					$('.js-fancy-field input', $form).val('');
					$('.js-form-success', $form).fadeIn();
					setTimeout(function(){
						$('.js-form-success', $form).hide();
						$('.js-form-content', $form).fadeIn();
					}, 5000);
				}
			});

		});
	}

	/* Телефон */

	if($('.js-phone').length) {

		$('.js-phone').mask("+7 999 999 99 99");

	}

});
