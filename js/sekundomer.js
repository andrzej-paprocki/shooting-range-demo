
	// var timer = 0;
	function funcSekundomer() 
	{
		timer = new Date().getTime();


		var interval = setInterval(function()
		{
			if (timer2 == 0) return;
			sekundomer.innerHTML = (new Date().getTime() - timer) / 1000
		}, 10);
	}



												// Если закончились патроны ИЛИ поражены все мишени, то останавливаем секундомер
												// Посмотреть в коде, переменная "popadaniy".
												// Посмотреть в коде, переменная "ammo".


												// document.getElementById('stop').onclick = function(){timer = 0}