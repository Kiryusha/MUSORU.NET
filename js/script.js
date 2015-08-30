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
		setTimeout(function() {
			if ($('.js-nav-submenu').is(':visible')) {
				if ($('.js-inner-nav-link').is(':visible')) {
					$('.js-inner-nav-link').click();
				} else {
					toggleSmth('.js-nav-submenu', 'up');
				}
			}
		}, 400);
	});

	$('.js-submenu-close').click(function(){
		toggleSmth('.js-nav-submenu', 'up');
	});

	$('.js-to-step-form').click(function(event) {
		event.preventDefault();
		$('html, body').animate({ scrollTop: 620 }, 1000);
	});

	/* Внутреннее субменю */

	$('.js-inner-nav-link').click(function() {
		toggleSmth('.js-nav-submenu', 'up');
	});

	/* Попап в хедере */

	$('header .js-popup-open').click(function() {
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

	$('header .js-popup-close').click(function() {
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
					$('.js-step-form-nav', $form).hide();
					$('.step-form-step__title', $form).hide()
					$('.js-prev-step', $form).hide()
					$('.step-form-progress-wrapper', $form).hide()
					$('.js-form-success', $form).fadeIn();
				}
			});

		});
	}

	/* Телефон */

	if($('.js-phone').length) {

		$('.js-phone').mask("+7 999 999 99 99");

	}

	/* Форма онлайн-записи */

	changeProgress();

	function changeProgress(index) {
		var countAllow = $('.step-form-nav__step--active', $('.js-step-form')).length;
		var width = 25 * countAllow;
		$('.js-step-progress').css('width', width + '%');
	}

	var trashAllow = true;

	/* Клик по навигации */

	$('.js-step-nav').click(function() {
		if($(this).hasClass('step-form-nav__step--active')) {
			var index = $(this).index();
			if (!$('.js-single-step').eq(index).is(':visible')) {
				$('.js-single-step').hide();
				$('.js-single-step').eq(index).fadeIn();
			}
		}
	})

	/* Клик выбора типа мусора */

	$('.js-trash-item').click(function() {
		if (!$(this).hasClass('trash-type-item--active') && trashAllow) {
			$('.js-trash-item').removeClass('trash-type-item--active');
			$(this).addClass('trash-type-item--active');
			$('.js-trash-value').attr('NAME', '');
			$('.js-trash-value', $(this)).attr('NAME', 'TRASHTYPE');
			$('.js-next-step', $(this).closest('.js-single-step')).removeClass('button-disabled');
			trashAllow = false;
		}
		setTimeout(function() {trashAllow = true}, 300);
    });

	/* Отменить выбор типа мусора */

	$('.js-trash-close').click(function() {
		var index = $(this).closest('.js-single-step').index();
		$('.js-trash-item').removeClass('trash-type-item--active');
		$('.js-trash-value').attr('NAME', '');
		$('.js-next-step', $(this).closest('.js-single-step')).addClass('button-disabled')
		trashAllow = false;
		setTimeout(function() {trashAllow = true}, 300);
	});

	/* Переход между шагами */

	$('.js-next-step').click(function() {
		var nextIndex = $(this).closest('.js-single-step').index() + 1;
		if (!$(this).hasClass('button-disabled')) {
			$(this).closest('.js-single-step').hide();
			$(this).closest('.js-single-step').next().fadeIn();
			$('.js-step-nav').eq(nextIndex).addClass('step-form-nav__step--active');
			changeProgress();
		}

	});

	$('.js-prev-step').click(function() {
		var prevIndex = $(this).closest('.js-single-step').index() - 1;
		$(this).closest('.js-single-step').hide();
		$(this).closest('.js-single-step').prev().fadeIn();
	});

	$('.js-add-dist-block input').keydown(function(event){
	    if(event.keyCode == 13) {
	        event.preventDefault();
	        var newDist = $(this).val();
	        if (newDist) {
	        $('.js-district-list').append('<div class="step-district__item"><span>' + newDist + '<span class="step-district__item-close js-dist-close"></span></span><input type="hidden" value="' + newDist + '" name="DISTRICTS[]"></div>');
	        }
	        checkDistAmount();
	        return false;
	    }
	});

	checkDistAmount();

	function checkDistAmount() {
		var parentStep = $('.js-district-list').closest('.js-single-step')
		var index = parentStep.index();
	    if ($('.js-district-list').children().length == 0) {
	        $('.js-add-dist-block').fadeIn();
	        $('.js-next-step', parentStep).addClass('button-disabled');
	    } else {
	        $('.js-add-dist-block').fadeOut();
	        $('.js-next-step', parentStep).removeClass('button-disabled');
	    }
	}

	/* Кол-во контейнеров */

	$('.js-cont-type').click(function() {
		var parentStep = $(this).closest('.js-single-step')
		var index = $(this).index();
		var thisSlide = $('.js-cont-slide').eq(index);
		if (!$('.js-cont-slide').eq(index).is(':visible')) {
			$('.js-cont-slide').hide();
			thisSlide.fadeIn();
		}
		$('.js-next-step', parentStep).removeClass('button-disabled');
	});

	/* Карта в футере */

	if ($('#ya-map').length) {

				var myMap,
					myPlacemark;


				function init(){
					myMap = new ymaps.Map ("ya-map", {
						center: [55.75167978, 37.81655332],
						zoom: 15
					});

					myPlacemark = new ymaps.Placemark([55.75167978, 37.81655332], {
						hintContent: 'MUSORY-NET'
					});

					myMap.geoObjects.add(myPlacemark);

					myMap.controls.add('zoomControl', { left: 5, top: 5 })
				}

		ymaps.ready(init);
	}

	var toggles = document.querySelectorAll(".c-hamburger");

	for (var i = toggles.length - 1; i >= 0; i--) {
		var toggle = toggles[i];
		toggleHandler(toggle);
	};

	function toggleHandler(toggle) {
		toggle.addEventListener( "click", function(e) {
			e.preventDefault();
			(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
		});
	}

	$('dl.tabs dt').click(function(){
        $(this)
            .siblings().removeClass('tab-selected').end()
            .next('dd').andSelf().addClass('tab-selected');
    });

    var accAllow = true;

    $('.accordion a').click(function(event) {
        event.preventDefault();
        if (accAllow) {
            accAllow = false;
            var parent = $(this).closest('section');
            if (!parent.hasClass('selected')) {
                $('.accordion section').removeClass('selected');
                parent.addClass('selected');
                $('.inner-form-section').addClass('inner-form-section--border')
            } else {
                parent.removeClass('selected');
            }
            setTimeout(function() {
                accAllow = true;
            }, 400);
        }
    });

});
