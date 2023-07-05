// Урок 8 DOM


const one = document.querySelector (".one");
// one.style.color = "red";
// one.style.margiTop = "2000px";
// one.style.paddingleft = "150px";
// //console.log(one.style);
// one.classList.add("black")
// one.classList.add("green")
// one.classList.remove("green")
// one.classList.remove("black")

// let btn = document.querySelector(".btn");
// let body = document.querySelector("body");
// btn.onclick = function () {
//   body.classList.toggle("black");
// };

// console.log(one.getAttribute("data"));
// one.setAttribute("date-num",6);

let genre = document.querySelector(".genre");
for(let i=0; i < genre.Length; i++){
  genre[i].onclick = function(){
    let shop = this.document.querySelector(".shop").value;
    let price= this.getAttrebute("data");
    console.log(shop*price);
  }
}