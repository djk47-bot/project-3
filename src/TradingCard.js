// dependencies / things imported
import { LitElement, html, css } from 'lit';

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class TradingCard extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'trading-card';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.need = 'all need to succeed';
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      need: { type: String, reflect: true },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'need' && this[propName] === 'joy') {
        this.classList.add('joyful');
      }
    });
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved
  connectedCallback() {
    super.connectedCallback();
  }

  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        display: block;
      }
      .cardBorder {
        border: 1px solid black;
      }
      :host([need='joy']) {
        color: yellow;
        background-color: black;
      }
      :host([need='invert']) {
        color: blue;
        background-color: lightgray;
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div class="cardBorder"></div>
      <h1>Make me awesome</h1>
      <p>Color scheme for ${this.need}.</p>
      <slot></slot>

      <h2>Trading card</h2>
      <div>some outline element</div>
      <p>description info here in a slot</p>
      <slot></slot>
    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`../lib/trading-card.haxProperties.json`, import.meta.url)
      .href;
  }
}