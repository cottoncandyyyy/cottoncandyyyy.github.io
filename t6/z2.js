//2.1

const num = prompt('Введіть число.');

for(i=1;i<11;i++){
	console.log(`${num} * ${i} = ${num*i}`)
}

//2.2

for(i=1;i<16;i++){
	console.log(`${i} ^ 2  = ${i**2}`)
}

//2.3
let sum = 0;

const last_num = Number(prompt("Введіть число.")) + 1;

for( i=1; i < last_num; i++){
	sum +=i;
}
console.log(`Сума чисел від 1 до ${last_num - 1} рівна - ${sum}.`)