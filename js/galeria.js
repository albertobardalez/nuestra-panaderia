// almaceno slider en una variable
var slider=$('#slider');
// almaceno los botones
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

// muevo ultima imagen al primer lugar
$('#slider section:last').insertBefore('#slider section:first');
// mostrar la primera  imagen con margen de -100%
slider.css('margin-left', '-'+100+'%');

function moverD(){
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('#slider section:first').insertAfter('#slider section:last');
		slider.css('margin-left', '-'+100+'%');
	});

}
function moverI(){
	slider.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider section:last').insertBefore('#slider section:first');
		slider.css('margin-left', '-'+100+'%');
		
	});
}
siguiente.on('click', function (){
	 moverD();
});
anterior.on('click', function (){
	 moverI();
});
function autoplay(){
		interval = setInterval(function(){
			moverD();
		},2000);
}
autoplay();


			
	
