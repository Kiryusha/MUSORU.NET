$(document).ready(function () {

	if ($('#map').length) {

				var myMap, 
					myPlacemark;
		
				
				function init(){ 
					myMap = new ymaps.Map ("map", {
						center: [55.74449889, 37.63017369],
						zoom: 18
					}); 
					
					myPlacemark = new ymaps.Placemark([55.74449889, 37.63017369], {
						hintContent: 'Большой Овчинниковский переулок'
					});								
					
					myMap.geoObjects.add(myPlacemark);
					
					myMap.controls.add('zoomControl', { left: 5, top: 5 })
				}
	
		ymaps.ready(init);
	}

	if ($('#video-slider').length) {
		$("#video-slider").muslider({
			"ratio": "maximum",
			"min_width": 1160,
			"animation_duration": 800
		});
		var title = $('.js-video-slide.active').data('title');
		$('.js-video-title').text(title);
	};

	if($('.js-phone').length) {

		$('.js-phone').mask("+7 999 999 99 99");

	};

	if($('.fancybox').length) {
		$('.fancybox')
	    .attr('rel', 'gallery')
	    .fancybox({
	        padding : 0,
	        helpers: {
			    overlay: {
			      locked: false
			    }
			}
	    });
	};

	if ($('.js-checkbox').length) {
		$('.js-checkbox').iCheck({
			checkboxClass: 'icheckbox_flat-blue',
			radioClass: 'iradio_flat-blue'
		});
	};

	$('.js-input-show-tooltip').click(function() {
		$(this).next().next().css('opacity',0);
	});

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

	/* Карта подарков */

	giftCount();

	var giftItemId = 0;

	$('.js-gift-pick').click(function(e){
		e.preventDefault();
		giftItemId++;			
		var picSrc = $('.js-gift-item-pic', $(this).parent())
		var newItem = $('.js-gift-meter-item:first').clone().appendTo('.js-gift-cart');
		newItem.show();
		newItem.attr('ItemId', giftItemId);
		$(this).parent().attr('ItemId', giftItemId);
		$('.js-gift-meter-item-pic', newItem).attr('src', picSrc.attr('src'));
		if ($('.js-account-meter-title', newItem).length) {
			$('.js-account-meter-title', newItem).text($('.gift-item__title', $(this).parent()).text())
		}
		if ($('.js-account-meter-price', newItem).length) {
			$('.js-account-meter-price', newItem).text($(this).parent().data('price'))
		}
		$('.js-gift-meter-item-pic', newItem).parent().css('display','inline-block');
		if (picSrc.hasClass('gift-item__img--full')) {
			$('.js-gift-meter-item-pic', newItem).addClass('gift-meter__item-pic--full')
		}
		$(this).parent().addClass('gift-item--active');
		$('.js-gift-item-hover', $(this).parent()).fadeIn();
		giftCount();
	});

	$('.js-gift-cart').click(function(){
		if($(event.target).closest('.js-account-meter-close').length) {
			var thisId = $(event.target).parent().attr('ItemId');
			var grandFather = $(document).find('.js-gift-item[ItemId='+thisId+']');
			$('.js-gift-item-reject', grandFather).click();
		};
	});

	$('.js-account-meter-link').click(function(e){
		e.preventDefault();
		if (!$('.js-account-meter-popup').is(':visible')) {
			$('.js-account-meter-popup').fadeIn()
		} else {
			$('.js-account-meter-popup').fadeOut()
		}
	});

	$(document).on('click',function(event) { 
		if(!$(event.target).closest('.js-account-meter-popup, .js-account-meter-link, .js-gift-pick, .js-account-meter-close, .js-gift-item-reject').length) {
			$('.js-account-meter-popup').fadeOut();
		}        
	});

	$('.js-gift-item-reject').click(function(){
		var thisId = $(this).closest('.js-gift-item').attr('ItemId');
		var thisClone = $(document).find('.js-gift-meter-item[ItemId='+thisId+']');
		thisClone.remove();
		$(this).parent().fadeOut();
		$(this).closest('.js-gift-item').removeClass('gift-item--active');
		giftCount();
	});

	function giftCount() {
		var giftAmount = $('.js-gift-meter-item-pic').length - 1;
		if (giftAmount < 0) {
			giftAmount = 0
		}
		$('.js-gift-counter').text(giftAmount);
		if (giftAmount == 0) {
			$('.js-meter-full').hide();
			$('.js-meter-empty').fadeIn();
		} else {
			$('.js-meter-empty').hide();
			$('.js-meter-full').fadeIn();
		}
	}

	$('.js-like-gift').click(function(){
		$('input', this).val(parseInt($('input', this).val()) + 1);
	});

	$('.js-hidden-gifts').hide();

	$('.js-more-gifts').click(function(e){
		e.preventDefault();
		$(this).hide();
		$(this).next().fadeIn();
	});

	/* Плагин для буфера обмена, не получилось */

	if ($('.js-clipboard-button').length) {

		$('.js-clipboard-button').click(function(){
			var tooltip = $(this).next();
			tooltip.fadeIn(function(){
				setTimeout(function(){
					tooltip.fadeOut();
				},2000);
			});
		});

		/*

		$('.js-clipboard-input').val(window.location.href);

		ZeroClipboard.setDefaults({moviePath: 'js/ZeroClipboard.swf'});

		var clip = new ZeroClipboard.Client();

	    clip.setText(''); // will be set later on mouseDown

	    clip.addEventListener('mouseDown', function (client) {
	        // set text to copy here
	        clip.setText($('.js-clipboard-input').val());

	        // alert("mouse down"); 
	    });

	    clip.glue('.js-clipboard-button');

    	*/
    };



	$(window).scroll(function () {
	
		if ($('.js-gift-meter').length) {
		
			if (550 < $(window).scrollTop() && !$('.js-gift-meter').hasClass('gift-meter--fixed')) {
				$('.js-gift-meter').parent().css('padding-top', $('.js-gift-meter').outerHeight(true))
				$('.js-gift-meter').hide().addClass('gift-meter--fixed').fadeIn()
			} 
			if (550 > $(window).scrollTop() && $('.js-gift-meter').hasClass('gift-meter--fixed')) {
				$('.js-gift-meter').parent().css('padding-top', 0)
				$('.js-gift-meter').removeClass('gift-meter--fixed').hide().fadeIn()
			}
			
		};

	});

	/* Попап */

	var winHeight = $(window).height() + 100;
	
	function getScrollbarWidth() {
		var outer = document.createElement("div");
		outer.style.visibility = "hidden";
		outer.style.width = "100px";
		outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

		document.body.appendChild(outer);

		var widthNoScroll = outer.offsetWidth;
		// force scrollbars
		outer.style.overflow = "scroll";

		// add innerdiv
		var inner = document.createElement("div");
		inner.style.width = "100%";
		outer.appendChild(inner);        

		var widthWithScroll = inner.offsetWidth;

		// remove divs
		outer.parentNode.removeChild(outer);

		return widthNoScroll - widthWithScroll;
	}	
	
	var scrollbarWidth = getScrollbarWidth();
		
	$('.blackout').css({'height' : winHeight+'px'});
	
	$('.blackout').click(function() { 
		$('.popup-wrapper').stop().fadeOut(300);
		setTimeout(function() {			
			$('body').removeClass('js-popup-open');
			$('body').css({'padding-right' : ''});
		},300);
	});
	
	$('.js-popup-close').click(function() {
		$('.blackout').click();
	});

	/* Личный кабинет */

	/* Чекбокс оплаты */
	
	if($('.payment-methods__checkbox').length) {
		$('.payment-methods__checkbox').iCheck({
			radioClass: 'iradio_flat-blue'
		});
		$('.js-payment-img').on('click', function(){
			var parent = $(this).parent();
			$('.js-payment-img').removeClass('payment-methods__checkbox-img--active');
			$('.iCheck-helper', parent).click();
			$(this).addClass('payment-methods__checkbox-img--active');
		});
	}

	$('.js-account-login').click(function(){
		$('.popup-wrapper--login').stop().fadeIn(300);
		$('body').addClass('js-popup-open');
		if ($(document).height() > $(window).height()) {
			$('body').css({'padding-right' : scrollbarWidth + 'px'});
		}
	});

	$('.js-add-idea').click(function(){
		$('.popup-wrapper--add-idea').stop().fadeIn(300);
		$('body').addClass('js-popup-open');
		if ($(document).height() > $(window).height()) {
			$('body').css({'padding-right' : scrollbarWidth + 'px'});
		}
	});

	$('.js-popup-events').click(function(){
		$('.popup-wrapper--events').stop().fadeIn(300);
		$('body').addClass('js-popup-open');
		if ($(document).height() > $(window).height()) {
			$('body').css({'padding-right' : scrollbarWidth + 'px'});
		}
	});

	/* Аплоад плагин */
	if ($('.js-fileupload').length) {
		$('.js-fileupload').fileupload({
			dataType: 'json',
			done: function (e, data) {
				$.each(data.result.files, function (index, file) {
					$('<p/>').text(file.name).appendTo('#files');
				});
			},
			progressall: function (e, data) {
				var progress = parseInt(data.loaded / data.total * 100, 10);
				$('.step-block__progress .step-block__progress-bar').css(
					'width',
					progress + '%'
				);
			}
		}).prop('disabled', !$.support.fileInput)
			.parent().addClass($.support.fileInput ? undefined : 'disabled');
	}

	/* Обучение */

	if ($(".js-joy-ride").length) {
		$(".js-joy-ride").joyride({
		    autoStart: true,
		    modal: true,
	        expose: true,
	        scrollSpeed: 600,
	        postExposeCallback:
	        	function() {
	        		var rightCoord = $(window).width() - ($('.joyride-expose-wrapper').offset().left + $('.joyride-expose-wrapper').outerWidth())
	        		if (rightCoord > 5) {
		        		$('.joyride-expose-wrapper').css({
		        			top : parseInt($('.joyride-expose-wrapper').css('top')) - 15,
		        			left : parseInt($('.joyride-expose-wrapper').css('left')) - 15,
		        			width : parseInt($('.joyride-expose-wrapper').css('width')) + 30,
		        			height : parseInt($('.joyride-expose-wrapper').css('height')) + 40
		        		});
		        	} else {
		        		$('.joyride-expose-wrapper').css({
		        			top : parseInt($('.joyride-expose-wrapper').css('top')) - 15,
		        			height : parseInt($('.joyride-expose-wrapper').css('height')) + 40
		        		});
		        	}
	        	},
	        preRideCallback:
	        	function() {
	        		$('.joyride-close-tip', $('.js-jr-finish')).hide();
	        		$('.joyride-next-tip', $('.js-jr-finish')).addClass('joyride-next-tip--finish');

	        		$('.joyride-close-tip', $('.js-jr-first')).addClass('joyride-close-tip--first');
	        		$('.joyride-next-tip', $('.js-jr-first')).addClass('joyride-next-tip--first');

	        	},
	        template : { // HTML segments for tip layout
		        'link'    : '<a href="#close" class="joyride-close-tip">Пропустить</a>',
	      	}
		});
	};
});