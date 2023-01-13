let obj = {}

for (let i = 1 ; i<11; i++){
 let name= prompt ('введите имя');
 let age = +prompt('введите возраст')

 obj [i] = {
    names: name ,
    ages: age 
 }
 console.log(`пользователь  ${i}`);
 console.log(`ваше имя ${obj[i].names}`);
 console.log(`ваш возраст ${obj[i].ages}`);
}
console.log(obj);


