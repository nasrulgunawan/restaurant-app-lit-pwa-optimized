

import {LitElement, html} from 'lit-element';
import {heroStyle} from './style';

class HeroComponent extends LitElement {
  static get properties() {
    return {
      heading: {type: String},
      tagline: {type: String},
    };
  }

  static get styles() {
    return [
      heroStyle,
    ];
  }

  constructor() {
    super();
    this.heading = 'Temukan Restaurant Favoritmu disini.';
    this.tagline = 'Pilihan terbaik dengan penawaran menarik.';
  }

  render() {
    return html`
    <section class="hero">
      <picture>
          <source media="(max-width: 600px)"
            srcset="./images/hero-small.webp">

          <img 
            src='./images/hero-large.webp' 
            alt="Hero" loading="lazy"></img>
      </picture>
      <div class="hero-container">
        <h1 class="hero-heading">${this.heading}</h1>
        <p class="hero-tagline">${this.tagline}</p>
      </div>
    </section>
    `;
  }
}

customElements.define('x-hero', HeroComponent);
