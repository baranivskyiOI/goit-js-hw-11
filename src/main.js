import getImagesByQuery from './js/pixabay-api';
import { createGallery, showLoader, hideLoader } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//!=============================================================

const form = document.querySelector('.form');

const lightbox = new SimpleLightbox('.card a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const formText = e.target.elements['search-text'].value.trim();

  showLoader();

  getImagesByQuery(formText)
    .then(hits => {
      console.log(hits);

      if (!hits.length) {
        iziToast.error({
          title: 'Error',
          message: `Sorry, there are no images matching your search query. Please try again!`,
        });
      }

      createGallery(hits);
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });

  form.reset();
});
