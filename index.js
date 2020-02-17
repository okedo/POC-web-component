class POCwebComponent extends HTMLElement {
  constructor() {
    super();
    this._name = 'Stranger';
  }
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>
    .dialog-title {
      font-family: OpenSans-Light, "Open Sans Light", "Open Sans", sans-serif;
      font-weight: 200;
      font-style: normal;
      font-size: 33px;
      color: rgb(51, 51, 51);
      margin: 10px 0 20px;
    }
    .dialog-content {
      padding: 5px;
    }
    .auth-input {
      display: block;
      width: 97%;
      font-size: 15px;
      padding: 5px;
    }
    .area-container {
      margin: 20px 0;
    }
    .area-label {
      display: block;
      width: 97%;
      font-size: 13px;
    }
    .text-area {
      display: block;
      width: 99%;
      font-size: 18px;
      background-color: #F7F7F7;
      resize: none;
    }
    .btn {
      margin: 5px;
    }
    .btn {
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 18px;
      border: 1px solid transparent;
    }
    
    </style>
    <div class="dialog-body">
      <h1 class="dialog-title">Authorization</h1>
      <div class="dialog-content">
          <div>
              <input class="auth-input" placeholder="Enter Authorization">
          </div>
          <div class="area-container">
              <label class="area-label" for="comments">Override Comments </label>
              <textarea class="text-area" id="comments"></textarea>
          </div>
      </div>
    </div>
    <div>
        <button id="addAuth" class="btn btn-primary">Add Authorization</button>
        <button id="override" class="btn btn-secondary">Override/Submit</button>
        <button id="cancel" class="btn btn-secondary">Cancel</button>
    </div>
    `;
    this.shadowRoot.querySelector('#cancel').onclick = () => {
      this.dispatchEvent(new CustomEvent('cancel'));
    };
  }
}
POCwebComponent.observedAttributes = ['name'];
customElements.define('poc-web-component', POCwebComponent);
