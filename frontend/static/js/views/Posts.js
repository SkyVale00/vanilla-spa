import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Check out these Posts:</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>
                <a href="/" data-link>Return to Dashboard</a>
            </p>
        `;
    }
}