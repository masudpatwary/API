function daynamicDataLoad() {
  const url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url)
    .then((res) => res.json())
    .then((data) => userData(data));
}

function userData(data) {
  const container = document.getElementById("daynamic-data-container");
  for (const user of data) {
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
    <h4>User Id: ${user.id} </h4>
    <h3>Name: ${user.name} </h3>
    <p>Email: ${user.email} </p>
    <p>Discription: ${user.body} </p>
    `;
    container.appendChild(userDiv);
    userDiv.classList.add("bg-color");
  }
}
