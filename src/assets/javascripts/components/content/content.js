import { LitElement, html } from 'lit-element';
import { mainStyle } from './style';
import { sharedStyle } from '../../shared/style';
import CONFIG from '../../globals/config';
import '../card/card';

class ContentComponent extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      subtitle: { type: String },
      restaurants: { type: Array },
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
      return html`
        <div class="container">
          <div class="content-header">
            <h1>${this.title}</h1>
            <p>${this.subtitle}</p>
          </div>
  
          <div class="cards">
            ${this.restaurants.map((restaurant) => {
                return html`
                  <x-card restaurant='${JSON.stringify(restaurant)}'></x-card>
                `;
            })}
          </div>
        </div>
      `;
    }
  }
}

customElements.define('x-content', ContentComponent);
