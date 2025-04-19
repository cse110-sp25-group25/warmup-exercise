class PlayingCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.flipped = false;
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <div class="card">
        <div class="inner">
          <div class="front"></div>
          <div class="back"></div>
        </div>
      </div>
    `;

    this.shadowRoot.querySelector('.card').addEventListener('click', () => this.flip());
  }

  flip(){
    this.flipped = !this.flipped;
    
    const cardElement = this.shadowRoot.querySelector('.card');
    
    if (this.flipped) {
      cardElement.classList.add('flipped');
    } else {
      cardElement.classList.remove('flipped');
    }
  }

  isFlipped(){
    return this.flipped;
  }
}

customElements.define('playing-card', PlayingCard);
