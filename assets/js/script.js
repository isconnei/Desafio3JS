///////////////////////////////////////////
//************** Punto 2.2 *************//
/////////////////////////////////////////
//Nota: Se comenta para hacer punto 2.3

// const ele = document.getElementById("ele1");

// ele.addEventListener(
//   "click",
//   (pintar = () => (ele.style.backgroundColor = "yellow"))
// );

///////////////////////////////////////////
//************** Punto 2.3 *************//
/////////////////////////////////////////
const ele = document.getElementById("ele1");

const pintar = (color = "green") => (ele.style.backgroundColor = color);
ele.addEventListener("click", () => pintar("yellow"));
