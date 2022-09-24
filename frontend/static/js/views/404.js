import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("404");
    }

    async getHtml() {
        return `
            <h1>Error 404: Page Not Found!</h1>
            <p>
                <a href="/" data-link>Return to Dashboard</a>
            </p>
        `;
    }
}