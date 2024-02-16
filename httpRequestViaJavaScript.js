// Import der 'fetch' Funktion von Node.js
const fetch = require("node-fetch");

// Definition der URLs für die verschiedenen Fetch-Anfragen

// Fetch für URL 1: "https://jsonplaceholder.typicode.com/posts":

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log("Response von JSON Placeholder: ", json));

// Fetch für URL 2: "ToDo Api, die alle todos ausgibt"
fetch("http://localhost:5050/v1/todos/all")
  .then((response) => response.json())
  .then((json) => console.log("Response von der ToDo API: ", json));

// Fetch für URL 3: "ToDo Api, die alle todos zu einer userId ausgibt "
const userId = 1;
fetch(`http://localhost:5050/v1/todos/byuserid?userId=${userId}`)
  .then((response) => response.json())
  .then((json) =>
    console.log(`Rückmeldung - 2Do API (Todos für userId ${userId}):`, json)
  );
