window.dataLayer = window.dataLayer || [];
window.addEventListener("click", receiveMessage, false);
let count = 0;

function helpfulTip(){
  console.log("Dont forget to check the README :)");
}

function receiveMessage(event) {
  console.log("event.data: ", event.srcElement.id);
  console.log("dataLayer ", dataLayer);
  createAnEvent(event.srcElement.id);
  count += 1;
  localStorage.setItem( event.srcElement.id, `Click Number: ${count}`);
}

function createAnEvent(elementID) {
  dataLayer.push({ YouClicked: elementID, subject: true, message: "Message",  });
  console.log(dataLayer);
}

// Still works but not best practice
function setCookie(){
  document.cookie = "Cookie OG"
  document.cookie = "Cookie Overwrite" //method overwrites
}



// function cookieMonster(){ // this will freeze your browser tab 
//   // REDACTED
// }

// // Reads from JSON file 
// // Might use later
// function jsonRead() {
//   fetch("./events.json")
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }

