// client side javascript

// async function loads required settings before the page itself is loaded
const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("Viewing the Dashboard") },
        { path: "/posts", view: () => console.log("Viewing the Posts") },
        { path: "/settings", view: () => console.log("Viewing the Settings") },
        { path: "/404", view: () => console.log("Error 404 Not Found") },
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

    console.log(match.route.view());

};

// once the DOM has loaded, the router function can run and load the page
document.addEventListener("DOMContentLoaded", () => {
    router();
});
