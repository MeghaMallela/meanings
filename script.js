"use strict";

const b = document.querySelector(".enter");

b.addEventListener("click", function () {
  const a = document.querySelector(".word").value;
  const data = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${a}`);
  data
    .then((data) => {
      return data.json();
    })
    .then((completedata) => {
      let x = completedata[0].meanings[0].definitions[0].definition;
      console.log(x);
      const element = document.getElementById("div1");
      const a = document.querySelector(".word").value;
      let par = document.createElement("p");

      let node = document.createTextNode(`${a} : ` + x);
      par.appendChild(node);
      console.log(par);
      element.append(par);
    });
});

// fetch("https://api.dictionaryapi.dev/api/v2/entries/en/pompous")
//   .then((data) => {
//     return data.json();
//   })
//   .then((completedata) => {
//     b.addEventListener("click", function () {
//       let x = completedata[0].meanings[0].definitions[0].definition;
//       console.log(x);
//       let neww = document.createElement("h4");
//       neww.textContent = x;
//       neww.innerHTML = x;
//       element.append(neww);
//     });
//   });
