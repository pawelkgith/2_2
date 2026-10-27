(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");
  const select = document.getElementById("options");

  example.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  cw1.addEventListener("click", function () {
    answer.innerHTML = "Loading...";
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        let html = "<ol>";
        data.forEach((row) => {
          html += `<li>${row.title} - ${row.body}</li>`;
        });
        html += "</ol>";
        setTimeout(() => {
          answer.innerHTML = html;
        }, 500);
      });
  });

  cw2.addEventListener("click", function () {
    const value = select.value;

    fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
      .then((res) => res.json())
      .then((data) => {
        answer.innerHTML = `<p>${data.id} - ${data.title} - ${data.body}</p>`;
      });
  });

  cw3.addEventListener("click", function () {
    answer.innerHTML = "Processing...";
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
      });
  });
})();
