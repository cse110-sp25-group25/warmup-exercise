class PlayingCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['rank', 'suit', 'flipped'];
  }

  connectedCallback() {
    const rank = this.getAttribute('rank') || '?';
    const suit = this.getAttribute('suit') || '♠';
    const flipped = this.hasAttribute('flipped');
    
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          height: 100%;
        }
        .card {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }
        .front, .back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 8px;
          font-size: 72px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .back {
          transform: rotateY(180deg);
          background-image: url('assets/card-back.png');
          background-size: cover;
          background-position: center;
          border: 2px solid white;
        }
        .front {
          border: 2px solid #ddd;
          font-family: serif;
        }
        .red {
          color: #D40000;
        }
        .black {
          color: #000;
        }
        .card.flipped {
          transform: rotateY(180deg);
        }
      </style>
      <div class="card ${flipped ? 'flipped' : ''}">
        <div class="front ${(suit === '♥' || suit === '♦') ? 'red' : 'black'}">${rank}${suit}</div>
        <div class="back"></div>
      </div>
    `;

    this.shadowRoot.querySelector('.card').addEventListener('click', () => {
      this.toggleAttribute('flipped');
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.shadowRoot) return;
    
    if (name === 'flipped') {
      const card = this.shadowRoot.querySelector('.card');
      if (card) {
        card.classList.toggle('flipped', this.hasAttribute('flipped'));
      }
    } else {
      this.connectedCallback(); // Refresh the card content
    }
  }
}

customElements.define('playing-card', PlayingCard);
