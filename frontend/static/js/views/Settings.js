import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
            <h1>Settings</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>
                <a href="/" data-link>Return to Dashboard</a>
            </p>
        `;
    }
}