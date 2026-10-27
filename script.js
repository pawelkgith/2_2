(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");
  const select = document.getElementById("options");
  const popup = document.getElementById("popup-window");

  example.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  cw1.addEventListener("click", function () {
    popup.style.display = "block";
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        let html = `<table><tr><td>ID</td><td style="color: red">Tytul</td><td style="color: green">Tresc</td></tr>`;
        data.forEach((row) => {
          html += `<tr><td>${row.id}</td><td style="color: red">${row.title}</td><td style="color: green">${row.body}</td></tr>`;
        });
        html += "</table>";
        setTimeout(() => {
          answer.innerHTML = html;
          popup.style.display = "none";
        }, 500);
      });
  });

  cw2.addEventListener("click", function () {
    const value = select.value;
    popup.style.display = "block";

    fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let html =
          "<table><tr><td>ID</td><td style='color: red'>Tytul</td><td style='color: green'>Tresc</td></tr>";
        html += `<tr><td>${data.id}</td><td style='color: red'>${data.title}</td><td style='color: green'>${data.body}</td></tr></table>`;
        answer.innerHTML = html;
        popup.style.display = "none";
      });
  });

  cw3.addEventListener("click", function () {
    popup.style.display = "block";
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      body: JSON.stringify({
        title: "Nowy tytul",
        body: "Tresc nowego posta",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        answer.innerHTML = `Dodano nowy post o ID = ${data.id}`;
        popup.style.display = "none";
      });
  });
})();
