// local Storage 

// function setData() {
//   localStorage.setItem("username","divyesh");
//   localStorage.setItem("age","21");
// }

// function getData() {
//   let data = localStorage.getItem("username","divyesh");
//   document.getElementById('output').innerHTML = data
// }

// function removeData() {
//   localStorage.removeItem("username","divyesh");
// }

// function clearData() {
//   localStorage.clear("username","divyesh");
// }


// Session 

function setData() {
  sessionStorage.setItem("username","divyesh");
  sessionStorage.setItem("age","21");
}

function getData() {
  let data = sessionStorage.getItem("username","divyesh");
  document.getElementById('output').innerHTML = data
}

function removeData() {
    sessionStorage.removeItem("username","divyesh");
}

function clearData() {
    sessionStorage.clear("username","divyesh");
}