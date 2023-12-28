function loadDataUser() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadDataDisplay(data));
}

function loadDataDisplay(x) {
  const result = x;
  console.log(result);
}
