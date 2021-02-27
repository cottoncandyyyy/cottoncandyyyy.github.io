const pass = 1991;

let trys = 3;

for( i = 0; i < 3; i++ ){
	const new_try = prompt(`Введіть пароль. Залишилось спроб ${trys}`);
	
	trys--;
	
	if( new_try == pass){
		alert(`Вірно`);
		break;
	}
	
	/* 
	Додатково
	if( trys == 1 ){
		alert(`Підказка - Рік незалежності України`)
	}
	*/
}	



