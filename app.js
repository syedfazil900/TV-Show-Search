const form = document.querySelector("#searchForm");
document.body.style.backgroundColor = "#B1D0E0";
document.body.style.textAlign = "center";
const h1 = document.querySelector("h1");
h1.style.fontFamily = "Roboto"
h1.style.fontSize = "3rem"
let div = document.querySelector("div");
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {
        params: {
            q: searchTerm
        }
    }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config);
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = function(shows) {
    removeImages();
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('IMG');
            img.src= result.show.image.medium;
            div.append(img);
        }
  
    }
}
const removeImages = () =>
{
    div.querySelectorAll('*').forEach(n => n.remove());

}