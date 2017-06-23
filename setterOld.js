//проблема в подтверждении ставки

var sale = (function (){
	
	var buttonSetRate = document.querySelectorAll('button')[2],
	//кнопка подтверждения ставки
	buttonCOnfirmRate = document.querySelectorAll('button')[3];
		
	let that = {};
	
	that.time = document.querySelector('[data-time]');
	//последние секунды аукциона
	that.destTime = 5;
	//максимальная ставка
	that.price = '2,70';
	
	//установить максимальную ставку
	that.setRateValue = function(){
		document.querySelector('#lot-input').value = that.price;
	};
	
	//сделать ставку
	that.setRate = function () {
		setTimeout(function (){
			document.querySelector('#lot-input').activate();
		},100);

		setTimeout(function (){
			document.querySelectorAll('.i-button__text')[6].click();
		},200);
		
		setTimeout(function (){
			buttonSetRate.click();
		},300);
		
	};

	
	return that;
})()

	
	//подтвердить ставку
	that.confirmRate = function () {
		buttonCOnfirmRate.click();
	};
	
	that.start = function(){
		//setInterval(function (){
			//if(that.time.textContent == that.destTime + ' сек'){ 
				that.setRateValue();
				setTimeout(that.setRate, 200);
				setTimeout(that.setRate, 300);
				//setTimeout(that.confirmRate, 300);
			//}
		//}, 1000);
	}
