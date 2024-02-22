<template>
    <nav class="bg-white sidebar">
        <div class="pt-3 sidebar-sticky">
            <ul id="menu" class="nav flex-column mb-2">
                <li class="nav-item">
                    <router-link to="/admin" class="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2">
                                <path
                                    d="M7 3H5a2 2 0 0 0-2 2v2m0 10v2a2 2 0 0 0 2 2h2m10 0h2a2 2 0 0 0 2-2v-2m0-10V5a2 2 0 0 0-2-2h-2" />
                                <circle cx="12" cy="9" r="3" fill="currentColor" />
                                <path fill="currentColor" d="M12 12c-2.761 0-5 1.79-5 4h10c0-2.21-2.239-4-5-4" />
                            </g>
                        </svg>
                        <span class="d-none d-sm-inline ps-2">User</span>
                    </router-link>
                </li>
                <li v-if="can('user-list')" class="nav-item">
                    <a href="#submenu2" data-bs-toggle="collapse" class="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2">
                                <path d="M11 5h10M11 9h5" />
                                <rect width="4" height="4" x="3" y="5" fill="currentColor" rx="1" />
                                <path d="M11 15h10m-10 4h5" />
                                <rect width="4" height="4" x="3" y="15" fill="currentColor" rx="1" />
                            </g>
                        </svg>
                        <span class="d-none d-sm-inline ps-2">Management</span>
                    </a>
                    <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                        <li v-if="can('permission-list')" class="nav-link w-100">
                            <router-link :to="{ name: 'permissions.index' }" class="nav-link px-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        d="M22.2 4.86L6.69 11.25V27C6.69 35.44 24 43.5 24 43.5S41.31 35.44 41.31 27V11.25L25.8 4.86a4.68 4.68 0 0 0-3.6 0M24 43.5v-39M6.69 24h34.62" />
                                </svg>
                                <span class="d-none d-sm-inline ps-2">Permissions</span>
                            </router-link>
                        </li>
                        <li v-if="can('role-list')" class="nav-link">
                            <router-link :to="{ name: 'roles.index' }" class="nav-link px-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M15 21h-2a2 2 0 0 1 0-4h2v-2h-2a4 4 0 0 0 0 8h2Zm8-2a4 4 0 0 1-4 4h-2v-2h2a2 2 0 0 0 0-4h-2v-2h2a4 4 0 0 1 4 4" />
                                    <path fill="currentColor"
                                        d="M14 18h4v2h-4zm-7 1a5.989 5.989 0 0 1 .09-1H3v-1.4c0-2 4-3.1 6-3.1a8.548 8.548 0 0 1 1.35.125A5.954 5.954 0 0 1 13 13h5V4a2.006 2.006 0 0 0-2-2h-4.18a2.988 2.988 0 0 0-5.64 0H2a2.006 2.006 0 0 0-2 2v14a2.006 2.006 0 0 0 2 2h5.09A5.989 5.989 0 0 1 7 19M9 2a1 1 0 1 1-1 1a1.003 1.003 0 0 1 1-1m0 4a3 3 0 1 1-3 3a2.996 2.996 0 0 1 3-3" />
                                </svg>
                                <span class="d-none d-sm-inline ps-2">Roles</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { useAbility } from '@casl/vue'
const { can } = useAbility();
</script>

<style scoped></style>
