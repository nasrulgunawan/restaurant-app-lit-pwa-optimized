import { LitElement, html } from 'lit-element';
import { detailStyle } from './style';
import CONFIG from '../../globals/config';

class ContentDetailComponent extends LitElement {
  static get properties() {
    return {
      restaurant: { type: Object },
    };
  }

  static get styles() {
    return [
      detailStyle,
    ];
  }

  constructor() {
    super();
    this.restaurant = {};
  }

  render() {
    const { name, description, city, address, pictureId, categories, menus, rating, customerReviews } = this.restaurant;
    
    return html`
      <div class="container">
        <div class="card card-restaurant">
          <div class="card-img">
            <img src="${CONFIG.BASE_IMAGE_URL + pictureId}">
            <div class="rating">
              <svg class="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span>${rating}</span>
            </div>
          </div>
          <div class="card-text">
            <div class="header-text">
              <div class="information">
                <h2>${name}</h2>
                <div class="categories">
                  ${categories.map((category) => html`<div class="label-category">${category.name}</div>`)}
                </div>
              </div>
              <div class="divider"></div>
              <div class="address">
                <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div class="detail-address">
                  <p class="city">${city}</p>
                  <p>${address}</p>
                </div>
              </div>
            </div>
            <p class="description">${description}</p>
          </div>
        </div>

        <div class="card flex-column">
          <h2 class="menu-header">Daftar Makanan</h2>
          <div class="list-menu mb-2">
            ${menus.foods.map((food) => html`<div class="menu">${food.name}</div>` )}
          </div>
          <h2 class="menu-header">Daftar Minuman</h2>
          <div class="list-menu">
          ${menus.drinks.map((drink) => html`<div class="menu">${drink.name}</div>` )}
          </div>
        </div>

        <div class="card flex-column">
          <h2 class="menu-header">Review</h2>
          <div class="list-review">
            <div class="review">
              ${customerReviews.map((review) =>
                 html`
                  <div class="review-name">
                    <div class="avatar">${review.name.substring(0, 1)}</div>
                    <span><strong>${review.name}</strong></span>
                  </div>
                  <div class="review-content">
                    <p>${review.review}</p>
                    <span>${review.date}</span>
                  </div>
                 `
              )}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('x-content-detail', ContentDetailComponent);