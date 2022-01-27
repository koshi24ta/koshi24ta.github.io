console.log('Hello');
$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},300); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});

const showScroll = function () {

    const element = document.querySelectorAll( '.fadeinElem' ),
          windowH = window.innerHeight;

    let divisor = 1.2,
        nowY,
        elementY;

    window.addEventListener( 'scroll', function () {
        nowY = window.scrollY || window.pageYOffset;
        let count = 0;
        while ( count < element.length ) {
            ( function ( args ) {
                elementY = element[ args ].getBoundingClientRect().top + nowY;
                if ( nowY > elementY - ( windowH / divisor ) ) {
                    element[ args ].classList.add( 'show' );
                } else {
                    element[ args ].classList.remove( 'show' );
                }
            } ) ( count );
            count++;
        }
    }, false );

};

showScroll();

window.addEventListener('DOMContentLoaded', function(){

			document.getElementById('link_page_top').style.visibility = 'hidden';

			document.getElementById('link_page_top').addEventListener('transitionend', function(){

				if( document.getElementById('link_page_top').className !== 'view' ) {
					document.getElementById('link_page_top').style.visibility = 'hidden';
				}
			});

			window.addEventListener('scroll', function(){
				if( 200 < window.scrollY ) {
					document.getElementById('link_page_top').style.visibility = 'visible';
					document.getElementById('link_page_top').classList.add('view');

				} else {
					document.getElementById('link_page_top').classList.remove('view');
				}
			});
		});
