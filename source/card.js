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
  }

  renderBack() {
    const backDiv = this.shadowRoot.querySelector(".back");
    backDiv.innerHTML = '<span style="border:1px black; border-style:solid">◆</span>';
  }

  renderFront() {
    const frontDiv = this.shadowRoot.querySelector(".front");
    const content = this.innerHTML.trim();
    frontDiv.innerHTML = content
    ? content : '<span style="border:1px solid black; padding: 4px;">?</span>';
  }
  }

customElements.define('playing-card', PlayingCard);
