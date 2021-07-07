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
    console.log("DETAIL", this.restaurant);
    
    return html`
      <div class="container">
        <div class="card">
          <div class="card-img">
            <img src="${CONFIG.BASE_IMAGE_URL + pictureId}">
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
        <div class="card">
        </div>
      </div>
    `;
  }
}

customElements.define('x-content-detail', ContentDetailComponent);