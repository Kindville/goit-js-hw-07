import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')
const galleryMarkUp =createGallery(galleryItems)
    galleryEl.insertAdjacentHTML('beforeend', galleryMarkUp)

function createGallery(images) {
    return images 
        .map(({ preview, original, description }) => {
            return `<a class="gallery__item"
                   href="${original}">
                   <img class="gallery__image"
                    src="${preview}"
                    alt="${description}" />
                  </a>`
        })
    .join('')
}

let gallery = new SimpleLightbox('.gallery a', {captionPosition: 'bottom', captionsData: 'alt', captionDelay: 250});
gallery.on('show.simplelightbox', function  (e) {
     e.preventDefault()
});

console.log(galleryItems);


