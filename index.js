function loadDataUserName() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((res) => res.json())
    .then((data) => user2(data));
}

function user2(data) {
  const ul = document.getElementById("user-name");
  for (const user of data) {
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
}

function loadDataUserEmail() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((res) => res.json())
    .then((data) => user3(data));
}

function user3(data) {
  const ul = document.getElementById("user-email");
  for (const user of data) {
    const li = document.createElement("li");
    li.innerText = user.email;
    ul.appendChild(li);
  }
}
