// Домашнее задание 6

// Домашнее задание 6 -1

let a=5
let b = +prompt("Введите число")


switch (true) {
        case (!Number.isFinite(b)) :
          alert ("Не сработало");
        break;

        case ( a==b ): 
         alert ("Да");
         break;
             case (a !== b): 
              alert ("Нет");
              break;

  default:
    alert ("Нет");
    break;

}


// Задание 6 -2

let s = +prompt("Введите число")
     switch (s) {
      case 1:
      case 2:
      case 3:
  alert ( "Зима");
      break;

      case  4:
      case  5:
      case  6:
  alert (" Весна")
      break;

    case  7:
    case  8:
    case  9:
  alert ("Лето");
    break;

    case 10:
    case 11:
    case 12 :
  alert ( "Осень")
   break;

 }


// Задание 6 - 3

let x= 1
let y = 2
let z = null
alert ( x ?? y ?? z ??  "  Оператор нулевого слияния") ;



// alert ( "zvzvzvzv")

// Урок 6

// let i= 0;
// while (i<=10) {
// if(i !=0){
// console.log(i);}
// i+=2;
// }

//let a=0
//console.log(++a);

//let a=2;
//console.log(--a);


// let x=1
// switch (x){
// case Значение 1
// ....
// break

// case Значение 2
// ...
// break

// default:

// }

// let a = 5
// switch (a) {
// case 5:
// alert ("1")
 
// case 10:
// alert ("2")
 
 
// case 15:
// alert ("3")
 
 
// default:
// alert ("4");
 
//}

// let a = "1";
// let b = 0;
// console.log(typeof a);
// switch (+a) {
// case b+1:
// alert ("1")
// break; 
 
// default:
// alert ("4");
 
// }

// let a=122
// switch (a) {
// case 12:
// alert ("1")
// break;

// case 5:
// case 10:
// alert ( " 2")
// alert ( "3")
// break;
 
// default:
// alert ( "4")
 
// }

// let arg = prompt ( "Число")
// switch (arg) {
// case "0":
// case "1":
// alert ( " Один ли ноль")
// break;
// case "2":
// alert ( "2" )
// case 3:
// alert( "3")

// }

// оператор двойного слияния ??
// null undefined

// a ?? b

// let result = a !==null && a!== undefined ? a:b

// let user = 1
// alert (user ?? "Аноним")

// let fierstname = null
// let lastName = null
// let nickName = " Timur"

// alert ( fierstname ?? lastName?? nickName ?? " Aninim")

// let fierstname = null
// let lastName = null
// let nickName = " Timur"

// alert ( fierstname || lastName || nickName || " Aninim")

// || возвращает первое истинное значение
// ?? возвращает первое определенное значение