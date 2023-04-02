import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(`.gallery`);
const galleryMarkup = createGallery(galleryItems);

gallery.insertAdjacentHTML(`beforeend`, galleryMarkup);
function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`;
    })
    .join(``);
}

gallery.addEventListener(`click`, onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains(`gallery__image`)) {
    return;
  }
  const instance = basicLightbox.create(
    `
        
         <div class="modal">
        <img
              class="gallery__image forClose"
              src="${event.target.dataset.source}"
              
    </div>
    `,
    {
      onShow: () => {
        window.addEventListener("keydown", onKey),
          window.addEventListener(`click`, onClick);
      },
      onClose: () => {
        window.removeEventListener("keydown", onKey),
          window.removeEventListener(`click`, onClick);
      },
    }
  );
  instance.show();

  function onKey(event) {
    if (event.code === `Escape`) {
      instance.close();
    }
  }
  function onClick(event) {
    if (!event.target.classList.contains(`forClose`)) {
      return;
    }
    instance.close()
  }
}
