
import { LitElement, html } from 'lit-element';
import CONFIG from '../../globals/config';
import favoriteRestaurantIdb from '../../repository/favorite-restaurant-idb';
import setFavoriteData from '../../utils/set-favorite-data';
import { cardStyle } from './style';


function favoriteIcon() {
  return html`
    <svg class="icon icon-favorite" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
    </svg>
  `;
}

function unfavoriteIcon() {
  return html`
    <svg class="icon icon-favorite" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
    </>
  `;
}
class CardComponent extends LitElement {
  static get styles() {
    return [
      cardStyle,
    ];
  }

  static get properties() {
    return {
      restaurant: { type: Object },
      isFavorite: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.restaurant = {};
    this.isFavorite = false;
  }

  render() {
    const { id, city, name, description, rating, pictureId } = this.restaurant;
    this._getResturant(id);

    return html`
      <a class="card" href="#">
        <div class="card-img">
          <img src="${CONFIG.BASE_IMAGE_URL}${pictureId}" alt="Restaurant ${name}" loading="lazy">
          <div class="verified-restaurant" title="Verified Restaurant">
            <svg class="icon text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
          </div>
        </div>
        <div class="card-body">
          <div class="card-text">
            <p class="text-small">${city}</p>
            <p class="card-title">${name}</p>
            <p class="card-description">${description}</p>
          </div>
        </div>
        <div class="card-footer">
          <div class="rating text-small">
            <svg class="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <span>${rating}</span>
          </div>
          <div class="icon-container"
            @click="${this._setFavorite}"
            data-favorite="false">
              ${this.isFavorite ? favoriteIcon() : unfavoriteIcon()}
          </div>
        </div>
      </a>
    `;
  }

  async _getResturant(id) {
    const restaurant = await favoriteRestaurantIdb.getRestaurant(id);
    this.isFavorite = !!restaurant;
  }

  _setFavorite(e) {
    e.preventDefault();
    e.stopPropagation();
    this.isFavorite = !this.isFavorite;

    setFavoriteData.call({ restaurant: this.restaurant });
  }
}

customElements.define('x-card', CardComponent);
