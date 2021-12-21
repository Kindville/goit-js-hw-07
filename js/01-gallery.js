import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery')
const galleryMarkup = createGallery(galleryItems)
galleryEl.innerHTML = galleryMarkup;


function createGallery(images) {
    return images
        .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
                <a class="gallery__link" href="${preview}">
                <img
                class="gallery__image"
                src="${original}"
                data-source="large-image.jpg"
                alt="${description} "
                />
            </a>
            </div> `
         })
    .join('')
}


galleryEl.addEventListener('click', onGalleryElClick)
  
function onGalleryElClick(event) {

    if (!event.target.classList.contains('gallery__item')) {
        return;
    }
    const imgSrc = event.target.dataset.source;
        const modal = basicLightbox.create(`
            <img 
            class="gallery__image"
             src="${imgSrc}"/>
        `)

        modal.show()
}

console.log(galleryItems);
