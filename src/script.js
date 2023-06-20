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
  environment: "master",
  accessToken: "8vXSpQIN19zqkIo-HT4m9nCkimiNWqno0mqD_bRaIHI",
  host: "cdn.contentful.com"
});

// Récupérer les données des images depuis Contentful
client.getEntries({
  content_type: 'images' // Spécifier le CONTENT TYPE ID
})
  .then((response) => {
    const images = response.items;
    console.log(images);

    images.forEach((entry) => {
      const imageFields = entry.fields;
      console.log(imageFields);

      Object.keys(imageFields).forEach((imageKey) => {
        const image = imageFields[imageKey];
        const imageTitle = image.fields.title;
        const imageURL = image.fields.file.url;
        console.log(imageTitle, imageURL);

        // Sélectionner l'élément HTML en utilisant l'attribut data-title correspondant au titre de l'image
        const imageElement = document.querySelector(`[data-title="${imageTitle}"]`);

        if (imageElement) {
          imageElement.src = imageURL;
        }
      });
    });
  })
  .catch(console.error);



