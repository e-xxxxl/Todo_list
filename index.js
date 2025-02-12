const items = [];
function add() {
  if (arr.value == "") {
    alert("NOPE");
  } else {
    items.push(arr.value);
    console.log(items);
    arr.value = "";
    disp.innerHTML = "";
   showAll()
  }
}

// function deleteFIRST() {
//   if (items.length > 0) {
//     items.shift();
//     showAll();
//   } else {
//     alert("nawa o");
//   }
// }
// function addValue() {
//   if (arr.value == "") {
//     alert("typeeee");
//   } else {
//     items.unshift(arr.value);
//     showAll();
//     arr.value = "";
//   }
// }
// function deleteLast() {
//   if (items.length > 0) {
//     items.pop();
//     showAll();
//   } else {
//     alert("mumu");
//   }
// }

// function Dall() {
//   if (items.length > 0) {
//     items.splice(0, items.length);
//     showAll();
//   } else {
//     alert("mumu");
//   }
// }
// function anyd() {
//   if (items.length > 0) {
//     items.splice(prompt(),prompt());
//     showAll();
//   } else {
//     alert("mumu");
//   }
// }
// function editt() {
//   if (items.length > 0) {
//     items.splice(prompt(),prompt(),prompt(''));
//     showAll();
//   } else {
//     alert("mumu");
//   }
// }
function editItem(index){
  if (items.length > 0) {
        items.splice(index,1,prompt()) ;
        showAll();
      } else {
        alert("mumu");
      }
}
function deleteItem(index){
  if (items.length > 0) {
        items.splice(index,1) ;
        showAll();
      } else {
        alert("mumu");
      }
}

function showAll() {
  disp.innerHTML = "";
  for (i = 0; i < items.length; i++) {
    disp.innerHTML += `<p>${i + 1}. ${items[i]}</p>
    <button class="deleteItem-btn" onclick="deleteItem()">Delete</button>
    <button class="edit-btn" onclick="editItem()">edit</button>`;
  }
}