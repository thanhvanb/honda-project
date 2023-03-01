new WOW().init();
		var swiper = new Swiper('.swiper-container', {
			centeredSlides: true,
			loop: true,
   navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
					el: '.swiper-pagination',
					clickable:true,
			},	
			
  });

		$('#vehicle-list').mCustomScrollbar({
			theme:'dark'
		});
		function move(value){
			$('#vehicle-list').mCustomScrollbar("scrollTo",value,{
				scrollEasing:'easeOut'
			})
		}
		$('.vehicle-nav ul li').click(function(){
			$('.vehicle-nav ul li').removeClass('active');
			$(this).addClass('active');
				})
		$('.vehicle-nav ul li a').click(function(){
			if($(this).attr('id')==="cars-nav"){
				move("#cars");
			}		
		})
		$('.vehicle-nav ul li a').click(function(){
			if($(this).attr('id')==="suvs-nav"){
				move("#suvs");
			}		
		})
		$('.vehicle-nav ul li a').click(function(){
			if($(this).attr('id')==="minivan-nav"){
				move("#minivan");
			}		
		})
		$('.vehicle-nav ul li a').click(function(){
			if($(this).attr('id')==="environmental-nav"){
				move("#environmental");
			}		
		})
		$('.vehicle-nav ul li a').click(function(){
			if($(this).attr('id')==="future-nav"){
				move("#future");
			}		
		})
	
		var count ="";	
		$('#navbar > a').click(function(){
			if(count === ""){
				count = $(this).attr('id');
				$(this).addClass('active');
				if(count === "vehicles-link"){
					$('#vehicles').removeClass('hide-vehicle');
					$('.vehicle-nav').addClass('fadeInDown')
					$('#vehicle-list').addClass('fadeInUp')
				}
			}
			else{
				if(count === $(this).attr('id')){
					$(this).removeClass('active');
					count = "";
					
					$('.vehicle-nav').addClass('fadeOutUp');
					$('#vehicle-list').addClass('fadeOutDown')
					$('.shopping-tool-nav').addClass('fadeOutUp');

					setTimeout(function(){
						$('#vehicles').addClass('hide-vehicle');
						$('.vehicle-nav').removeClass('fadeOutUp');
						$('#vehicle-list').removeClass('fadeOutDown')
						
					},300)		
				}
				else{
					$('#navbar > a').removeClass('active');
					$(this).addClass('active');
					count = $(this).attr('id');
					
					if(count != "vehicles-link"){
						$('.vehicle-nav').addClass('fadeOutUp');
						$('#vehicle-list').addClass('fadeOutDown')
						
						setTimeout(function(){
							$('#vehicles').addClass('hide-vehicle');
							$('.vehicle-nav').removeClass('fadeOutUp');
							$('#vehicle-list').removeClass('fadeOutDown')	
						},300)							
					}
					else{
						$('#vehicles').removeClass('hide-vehicle');
						$('.vehicle-nav').addClass('fadeInDown')
						$('#vehicle-list').addClass('fadeInUp')
						
					}
				}
			}
		})
		
		var countS ="";
		$('#navbar > a').click(function(){
			if(countS === ""){
				countS = $(this).attr('id');
				$(this).addClass('active');
				if(countS === "tools-link"){
					$('#shopping-tools').removeClass('hide-tool');
					$('.shopping-tool-nav').addClass('fadeInDown')
				}
			}
				else{
					if(countS === $(this).attr('id')){
						$(this).removeClass('active');
						countS = "";
						$('.shopping-tool-nav').addClass('fadeOutUp');
						
						setTimeout(function(){
							$('#shopping-tools').addClass('hide-tool');
							$('.shopping-tool-nav').removeClass('fadeOutUp');
						},300)		
					}
					else{
						$('#navbar > a').removeClass('active');
						$(this).addClass('active');
						countS = $(this).attr('id');
						if(countS != "tools-link"){
							
							$('.shopping-tool-nav').addClass('fadeOutUp');
							
							setTimeout(function(){
								
								$('#shopping-tools').addClass('hide-tool');
								$('.shopping-tool-nav').removeClass('fadeOutUp');
							},300)							
						}
						else{
							$('#shopping-tools').removeClass('hide-tool');
							$('.shopping-tool-nav').addClass('fadeInDown')
						}
					}
				}	
		})
		$('#vehicle-close').click(function(){
			$('.vehicle-nav').addClass('fadeOutUp');
			$('#vehicle-list').addClass('fadeOutDown');
			setTimeout(function(){
				$('#vehicles').addClass('hide-vehicle');
				$('.vehicle-nav').removeClass('fadeOutUp');
				$('#vehicle-list').removeClass('fadeOutDown');
			},300)
			$('#navbar a').removeClass('active');
			count ="";
		})
		$('.vehicle-product').addClass('animated fadeInUp');
		$('.carousel-indicators-config li').click(function(){
			$('.carousel-indicators-config li').removeClass('active');
			$(this).addClass('active');
		})
		$('.indicators-xs-header').click(function(){
			$('.carousel-indicatiors-xs ol').slideToggle();
			if($('.indicators-xs-header i').hasClass('transform-rotate')){
				$('.indicators-xs-header i').removeClass('transform-rotate')
			}
			else{
				$('.indicators-xs-header i').addClass('transform-rotate')
			}
			
		})
		$('.carousel-indicatiors-xs ol li').click(function(){
			$('.indicators-title span').html($(this).html());
			$('.carousel-indicatiors-xs ol').slideUp();
		})
		var count= 0;
		$('.carousel-control-prev').click(function(){
			$('.carousel-indicators-config li').removeClass('active');
			if(count ==0){
				count= 4;
			}
			else{
				count--;
			}
			$('.carousel-indicators-config li').each(function(i){
				if(i == count){
					$(this).addClass('active');
					$('.indicators-title span').html($(this).html());
				}
			})
		})
		$('.carousel-control-next').click(function(){
			$('.carousel-indicators-config li').removeClass('active');
			if(count ==4 ){
				count= 0;
			}
			else{
				count++;
			}
			$('.carousel-indicators-config li').each(function(i){
				if(i == count){
					$(this).addClass('active');
					$('.indicators-title span').html($(this).html());
				}
			})
		})
		$('.back-to-top').click(function(){
			$('body,html').animate({scrollTop:0},1000);
		})
		function collapse(){
			var width = $(window).width();
			console.log(width);
			if(width >= 750){
				$('.collapse-ul').removeClass('collapse');
			}
			if(width<750){
				$('.collapse-ul').addClass('collapse');
			}
		}
		$(window).resize(function(){
			collapse();
		})
		$(document).ready(function(){
			collapse();
		})
		$(function(){
			$('.select-lang').selectpicker();
});