$(document).ready(function(){
	/*функция слайдшоу*/
	jQuery(function($){
		/*плагин*/
		$(".slide").cycle({
			fx:"none",
			speed:10,
			timeout:600
		}).cycle("pause");
		/*остановка и запуск при наведении курсора*/
		$(".main_image").hover(function(){
				$(this).find(".slide").addClass("active").cycle("resume");
			},function(){
				$(this).find(".slide").removeClass("active").cycle("pause");
		});
	});
});