import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(`.gallery`);
const galleryMarkup = createGallery(galleryItems);

gallery.insertAdjacentHTML(`beforeend`, galleryMarkup);
function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `        
        <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`;
    })
    .join(``);
}

const lightboxGallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: `img`,
  captionType: `attr`,
  captionPosition: `bottom`,
  captionsData: `alt`,
  captionDelay: 250,
});

gallery.addEventListener(`click`, onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
}
