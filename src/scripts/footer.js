class FooterElement extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      const footer = document.createElement('footer');
      footer.innerHTML = `
        <div class="container">
          <p> copyright &copy; 2020 - Hunger Apps</p>
        </div>
      `;
      footer.tabIndex=0;
  
      const style = document.createElement('style');
      style.textContent = `
        footer {
          background-color: #8D7B68;
          color: white;
          padding: 10px 0;
          text-align: center;
        }
  
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
        }
  
        p {
          margin: 0;
        }
      `;
  
      this.appendChild(style);
      this.appendChild(footer);
    }
  }
  
  customElements.define('footer-element', FooterElement);
  