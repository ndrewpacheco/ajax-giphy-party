const images = document.querySelector("#images");
const form = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const removeImgs = document.getElementById("remove-imgs");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getGifURL(searchInput.value);
});

removeImgs.addEventListener("click", () => {
  images.innerHTML = "";
});

async function getGifURL(input) {
  const gifResponse = await axios.get("https://api.giphy.com/v1/gifs/random", {
    params: {
      api_key: "Q3uMoVaAuA7Z8B0BS9XG7fHwEsP4MuVh",
      tag: input,
      rating: "g",
    },
  });

  const src = gifResponse.data.data.images.downsized.url;
  const img = document.createElement("img");
  img.src = src;
  images.append(img);
}
