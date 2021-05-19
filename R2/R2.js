let table = document.createElement("table");
let thead = document.createElement("thead");

let tbody = document.createElement("tbody");
let trHead = document.createElement("tr");
for (let i = 0; i <= 6; i++) {
  let thHead = document.createElement("th");
  thHead.innerText = `Column title ${i}`;
  trHead.appendChild(thHead);
}
for (let i = 0; i <= 10; i++) {
  let trbody = document.createElement("tr");
  for(let j=0; j<=6; j++){
      if (i % 2 === 0){
          let tdBody = document.createElement("td");
          tdBody.innerText = `lorem ipsum  ${i}`;
          tdBody.style = "background: gainsboro"
          tbody.appendChild(tdBody);
      }else{
        let tdBody = document.createElement("td");
        tdBody.innerText = `lorem ipsum  ${i}`;
        tbody.appendChild(tdBody);
      }
  }
  tbody.appendChild(trbody);
}
table.appendChild(trHead);
table.appendChild(tbody);
document.body.appendChild(table);
