// client side javascript
import Dashboard from './views/Dashboard.js';
import Posts from './views/Posts.js';
import Settings from './views/Settings.js';
import FourOFour from './views/404.js';

// this function will prevent the page from refreshing each time a nav link is clicked
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

// async function loads required settings before the page itself is loaded
const router = async () => {
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/posts", view: Posts },
        { path: "/settings", view: Settings },
        { path: "/404", view: FourOFour },
    ];

    // Test each route for a potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    // isMatch will return 'true' if the path matches an existing path (i.e /posts)
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    // if there is no match, the path doesnt exist-- default to a 404 page path
    if(!match) {
        match = {
            route: routes[3],
            isMatch: true
        };
    }

    // creates a new instance of the view at the route
    const view = new match.route.view();

    // get the html from the selected view and inject it into the div #app
    document.querySelector("#app").innerHTML = await view.getHtml();

    console.log(match.route.view());

};

// if the user navigates using the back-arrow, it will run the router and it wont break the application
window.addEventListener("popstate", router);

// once the DOM has loaded, the router function can run and load the page
document.addEventListener("DOMContentLoaded", () => {

    // if the user clicks on a nav link, it will call the navigateTo function
    document.body.addEventListener("click", e => {
        // *note that there must be a 'data-link' attribute on the nav-a in the html for this to work
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })

    router();
});
