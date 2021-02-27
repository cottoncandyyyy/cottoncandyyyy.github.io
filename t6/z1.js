
const name = "Петро";

const subject = "математика";

const marks = [];

let sum = 0;

for( i = 0 ; i <= 3; i++){
	const num = parseInt( prompt("Вкажіть оцінку.") );
	sum = sum + num;
	marks[i] = num;
}

const last_mark = marks[marks.length - 1];

const result = sum / marks.length;

console.log(`Вітаю ${name}! Кількість оцінок з предмету ${subject} рівна ${marks.length}. Остання оціка - ${last_mark}. Ваш середній бал з даного предмету - ${result}.`);

