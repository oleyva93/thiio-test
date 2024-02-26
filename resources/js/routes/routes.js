import Cookies from "js-cookie";
import store from "../store";

const AuthenticatedLayout = () => import("../layouts/Authenticated.vue");
const GuestLayout = () => import("../layouts/Guest.vue");

function requireLogin(to, from, next) {
    let isLogin = false;
    isLogin = !!store.state.auth.authenticated;

    if (isLogin) {
        next();
    } else {
        next("/login");
    }
}

function guest(to, from, next) {
    let isLogin;
    isLogin = !!store.state.auth.authenticated;

    if (isLogin) {
        next("/admin");
    } else {
        if (to.path === "/") {
            next("/login");
        }
        next();
    }
}

export default [
    {
        path: "/",
        component: GuestLayout,
        beforeEnter: guest,
        children: [
            {
                path: "/login",
                name: "auth.login",
                component: () => import("../views/login/Login.vue"),
                beforeEnter: guest,
            },
            {
                path: "register",
                name: "auth.register",
                component: () => import("../views/register/index.vue"),
                beforeEnter: guest,
            },
            {
                path: "forgot-password",
                name: "auth.forgot-password",
                component: () => import("../views/auth/passwords/Email.vue"),
                beforeEnter: guest,
            },
            {
                path: "reset-password/:token",
                name: "auth.reset-password",
                component: () => import("../views/auth/passwords/Reset.vue"),
                beforeEnter: guest,
            },
        ],
    },
    {
        path: "/admin",
        component: AuthenticatedLayout,
        beforeEnter: requireLogin,
        children: [
            {
                name: "admin.index",
                path: "",
                component: () => import("../views/admin/users/Index.vue"),
                meta: { breadCrumb: "Admin" },
            },
            {
                name: "profile.index",
                path: "profile",
                component: () => import("../views/admin/profile/index.vue"),
                meta: { breadCrumb: "Profile" },
            },
            {
                name: "permissions.index",
                path: "permissions",
                component: () => import("../views/admin/permissions/Index.vue"),
                meta: { breadCrumb: "Permissions" },
            },
            {
                name: "permissions.create",
                path: "permissions/create",
                component: () =>
                    import("../views/admin/permissions/Create.vue"),
                meta: { breadCrumb: "Create Permission" },
            },
            {
                name: "permissions.edit",
                path: "permissions/edit/:id",
                component: () => import("../views/admin/permissions/Edit.vue"),
                meta: { breadCrumb: "Permission Edit" },
            },
            {
                name: "roles.index",
                path: "roles",
                component: () => import("../views/admin/roles/Index.vue"),
                meta: { breadCrumb: "Roles" },
            },
            {
                name: "roles.create",
                path: "roles/create",
                component: () => import("../views/admin/roles/Create.vue"),
                meta: { breadCrumb: "Create Role" },
            },
            {
                name: "roles.edit",
                path: "roles/edit/:id",
                component: () => import("../views/admin/roles/Edit.vue"),
                meta: { breadCrumb: "Role Edit" },
            },
            {
                name: "users.index",
                path: "users",
                component: () => import("../views/admin/users/Index.vue"),
                meta: { breadCrumb: "Users" },
            },
            {
                name: "users.create",
                path: "users/create",
                component: () => import("../views/admin/users/Create.vue"),
                meta: { breadCrumb: "Add New" },
            },
            {
                name: "users.edit",
                path: "users/edit/:id",
                component: () => import("../views/admin/users/Edit.vue"),
                meta: { breadCrumb: "User Edit" },
            },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("../views/errors/404.vue"),
    },
];
