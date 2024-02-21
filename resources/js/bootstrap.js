import _ from "lodash";
window._ = _;

import "bootstrap";

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from "axios";
window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

window.axios.defaults.withCredentials = true;
window.axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (
            error.response?.status === 401 ||
            error.response?.status === 403 ||
            error.response?.status === 419
        ) {
            if (location.pathname !== "/login") {
                location.assign("/login");
            }
        }

        return Promise.reject(error);
    }
);
