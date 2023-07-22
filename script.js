const categorySelect = document.getElementById("category");
const getJokeBtn = document.getElementById("getJokeBtn");
const jokeText = document.getElementById("joke");

getJokeBtn.addEventListener("click", getJoke);

async function getJoke() {
  const category = categorySelect.value;
  const apiUrl = `https://v2.jokeapi.dev/joke/${category}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.type === "single") {
      jokeText.innerText = data.joke;
    } else {
      jokeText.innerText = `${data.setup} ${data.delivery}`;
    }
  } catch (error) {
    console.log("Error fetching joke:", error);
  }
}