import {LitElement, html} from 'lit-element';
import {mainStyle} from './style';
import {sharedStyle} from '../../shared/style';
import '../card/card';
import emptyImage from './empty-data.svg';

function renderRestaurantCards(restaurants) {
  return restaurants.map((restaurant) => html`<x-card restaurant='${JSON.stringify(restaurant)}'></x-card>`);
}

class ContentComponent extends LitElement {
  static get properties() {
    return {
      title: {type: String},
      subtitle: {type: String},
      restaurants: {type: Array},
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
    this.restaurants = [];
  }

  render() {
    if (this.restaurants.length > 0) {
      this._displayHero();

      return html`
        <div class="container">
          <div class="content-header">
            <h1>${this.title}</h1>
            <p>${this.subtitle}</p>
          </div>
  
          <div class="cards">
            ${renderRestaurantCards(this.restaurants)}
          </div>
        </div>
      `;
    } else {
      this._displayHero('none');

      return html`
        <div class="empty-data">
          <img src="${emptyImage}" alt="Empty Data Image" loading="lazy">
          <p>Data tidak tersedia</p>
        </div>;
      `;
    }
  }

  _displayHero(display = 'block') {
    document.querySelector('x-hero').style.display = display;
  }
}

customElements.define('x-content', ContentComponent);
