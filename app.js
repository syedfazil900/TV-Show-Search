const form = document.querySelector("#searchForm");
const h1 = document.querySelector("h1");
let div = document.querySelector("#imagesDiv");
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
            div.querySelectorAll('*').forEach((n) =>{
                n.classList.add("col-lg-4", "col-md-6","img",);
            })
        }
  
    }
}
const removeImages = () =>
{
    div.querySelectorAll('*').forEach(n => n.remove());

}