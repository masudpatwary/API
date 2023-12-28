function loadAnotherBtn(params) {
  const url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url)
    .then((res) => res.json())
    .then((data) => anotherBtn(data));
}

function anotherBtn(data) {
  const ul = document.getElementById("another-btn");
  for (const user of data) {
    const li = document.createElement("li");
    li.innerText = user.body;
    ul.appendChild(li);
  }
}
