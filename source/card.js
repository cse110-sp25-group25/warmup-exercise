class PlayingCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.flipped = false;
  }

  static get observedAttributes() {
    return ['flipped'];
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

  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'flipped') {
      const card = this.shadowRoot.querySelector('.card');
      if (card) {
        card.classList.toggle('flipped', newValue !== null);
        this.flipped = newValue !== null;
      }
    }
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

  renderBack() {
    const backDiv = this.shadowRoot.querySelector(".back");
    backDiv.innerHTML = '<span style="border:1px black; border-style:solid">◆</span>';
  }
}

customElements.define('playing-card', PlayingCard);
