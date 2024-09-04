///////////////////////////////////////////
//************** Punto 2 ***************//
/////////////////////////////////////////

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");

div1.addEventListener("click", function () {
  div1.style.borderColor = "black";
});
div2.addEventListener("click", function () {
  div2.style.borderColor = "black";
});
div3.addEventListener("click", function () {
  div3.style.borderColor = "black";
});
div4.addEventListener("click", function () {
  div4.style.borderColor = "black";
});

///////////////////////////////////////////
//************** Punto 3 ***************//
/////////////////////////////////////////

const div5 = document.getElementById("div5");
let color; //Variable global

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "a":
      color = "pink";
      div5.style.borderColor = color;
      break;
    case "s":
      color = "orange";
      div5.style.borderColor = color;
      break;
    case "d":
      color = "aquamarine";
      div5.style.borderColor = color;
      break;
    case "q":
      color = "purple";
      newDiv(color);
      break;
    case "w":
      color = "grey";
      newDiv(color);
      break;
    case "e":
      color = "brown";
      newDiv(color);
      break;
  }
});

newDiv = (color) => {
  const newDiv = document.createElement("div");
  newDiv.id = "divNesimo";
  newDiv.style.width = "200px";
  newDiv.style.height = "200px";
  newDiv.style.border = "4px solid " + color;
  newDiv.style.marginBottom = "5px";

  document.body.appendChild(newDiv);
};
