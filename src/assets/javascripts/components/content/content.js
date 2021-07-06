import { LitElement, html } from 'lit-element';
import { restaurants } from '../../../../data/restaurants';
import { mainStyle } from './style';
import { sharedStyle } from '../../shared/style';
import CONFIG from '../../globals/config';
import '../card/card';

class ContentComponent extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      subtitle: { type: String },
      data: { type: Array },
    };
  }

  static get styles() {
    return [
      sharedStyle,
      mainStyle,
    ];
  }

  constructor() {
    super();
    this.title = 'Daftar Restaurant';
    this.subtitle = 'Nikmati kebersamaan';
    this.data = [];
  }

  render() {
    if (this.data.length > 0) {
      return html`
        <div class="container">
          <div class="content-header">
            <h1>${this.title}</h1>
            <p>${this.subtitle}</p>
          </div>
  
          <div class="cards">
            ${this.data.map(({
                id, city, name, description, rating, distance, pictureId,
              }) => {
                return html`
                  <x-card>
                    <img slot="img" src="${CONFIG.BASE_IMAGE_URL}${pictureId}" alt="Restaurant ${name}" loading="lazy">
                    <div slot="text" class="card-text">
                      <p class="text-small">${city}</p>
                      <p class="card-title">${name}</p>
                      <p class="card-description">${description}</p>
                    </div>
                    <span slot="rating">${rating}</span>
                    <span slot="distance" class="text-small">${distance} km</span>
                  </x-card>
                `;
            })}
          </div>
        </div>
      `;
    }
  }
}

customElements.define('x-content', ContentComponent);
