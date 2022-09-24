// all the other views will inherit from this default view

export default class {
    constructor() {

    }

    // this will update the title of the page (that appears on the browser tab)
    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }
}