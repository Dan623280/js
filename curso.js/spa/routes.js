
import { loginView } from "./login.js";
import { dashboardView } from "./dashboard.js";

const routes = {
    "/": loginView,
    "/dashboard": dashboardView
};

export function router() {

    const path = window.location.pathname;

    const view = routes[path];

    if (view) {
        document.getElementById("app").innerHTML = view();
    } else {
        document.getElementById("app").innerHTML = `
            <h1>404</h1>
        `;
    }
}