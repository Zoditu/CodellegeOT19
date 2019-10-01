    $(function() {
     
    	$('#carousel').carouFredSel({
    		width: '100%',
    		items: {
    			visible: 'odd+2'
    		},
    		scroll: {
    			pauseOnHover: true,
    			onBefore: function() {
    				$(this).children().removeClass( 'hover' );
    			}
    		},
    		auto: {
    			items: 1,
    			easing: 'linear',
    			duration: 1250,
    			timeoutDuration: 0
    		},
    		pagination: {
    			container: '#pager',
    			items: 1,
    			duration: 0.5,
    			queue: 'last',
    			onAfter: function() {
    				var cur = $(this).triggerHandler( 'currentVisible' ),
    					mid = Math.floor( cur.length / 2 );
     
    				cur.eq( mid ).addClass( 'hover' );
    			}
    		}
    	});
     
    });

    $('#carousel-example').on('slide.bs.carousel', function (e) {
        /*
            CC 2.0 License Iatek LLC 2018 - Attribution required
        */
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 5;
        var totalItems = $('.carousel-item').length;
     
        if (idx >= totalItems-(itemsPerSlide-1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i=0; i<it; i++) {
                // append slides to end
                if (e.direction=="left") {
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                }
                else {
                    $('.carousel-item').eq(0).appendTo('.carousel-inner');
                }
            }
        }
    });