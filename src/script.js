const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");
let col1 = document.getElementById("colOne");
let col2 = document.getElementById("colTwo");


onload = () => {
    filterItem.onclick = (selectedItem) => {
        if (selectedItem.target.classList.contains("item")){
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-name");
            filterImg.forEach((image)=>{
                let filterImages = image.getAttribute("data-name");
                if ((filterImages === filterName) || filterName === "Tout") {
                    image.classList.remove("hide");
                    image.classList.add("show");
                    col1.classList.remove("col-12");
                    col1.classList.add("col-6");
                    col2.classList.remove("col-12");
                    col2.classList.add("col-6");
                   if (filterImages === filterName && filterName === "Grossesse") {
                    col1.classList.remove("col-6");
                    col1.classList.add("col-12");
                    col2.classList.remove("col-6");
                    col2.classList.add("col-12");
                   } 
                }else{
                    image.classList.add("hide");
                    image.classList.remove("show");
                    col1.classList.remove("col-6");
                    col1.classList.add("col-12");
                    col2.classList.remove("col-6");
                    col2.classList.add("col-12");
                }

            });
        } 
    }
}






const client = contentful.createClient({
  space: 'dj69i7y41zl2',
  accessToken: "8vXSpQIN19zqkIo-HT4m9nCkimiNWqno0mqD_bRaIHI",
  host: "cdn.contentful.com"
});

// Récupérer les données des images depuis Contentful
client.getEntries({
  content_type: 'images' // Spécifier le CONTENT TYPE ID
})
  .then((response) => {
    const images = response.items; // Liste des images récupérées depuis Contentful
    const imageElements = document.querySelectorAll('.customPhoto[data-name]'); // Sélectionner tous les éléments HTML correspondant aux images

    // Mettre à jour le contenu des éléments HTML avec les images récupérées
    images.forEach((image, index) => {
      const imageURL = image.fields.image.fields.file.url; // Récupérer le chemin d'accès à l'image depuis Contentful
      const imageElement = imageElements[index]; // Accéder à l'élément HTML correspondant à l'index actuel

      if (imageElement) {
        imageElement.src = imageURL; // Mettre à jour le chemin d'accès à l'image dans l'élément HTML
      }
    });
  })
  .catch(console.error);
