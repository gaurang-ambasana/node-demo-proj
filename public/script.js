document.getElementById("submit").onclick = () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  fetch("/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

document.getElementById("about").onclick = () => {
  fetch("/about");
};
