<template>
    <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card" style="border-radius: 1rem;">
                        <div class="card-body p-5 text-center">

                            <div class="mb-md-5 mt-md-4 pb-5">

                                <h2 class="fw-bold mb-2 text-uppercase">Thiio Login</h2>
                                <p class="mb-5">Please enter your login and password!</p>
                                <form @submit.prevent="submitLogin">
                                    <div class="form-outline mb-4">
                                        <v-text-field autofocus autocomplete="username" v-model="loginForm.email"
                                            :rules="emailRules" :label="$t('email')" required></v-text-field>
                                        <div class="text-danger mt-1">
                                            <div v-for="message in validationErrors?.email">
                                                {{ message }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-outline  mb-4">
                                        <v-text-field v-model="loginForm.password" label="Password" type="password"
                                            autocomplete="current-password" required hide-details></v-text-field>
                                        <!-- Validation Errors -->
                                        <div class="text-danger-600 mt-1">
                                            <div v-for="message in validationErrors?.password">
                                                {{ message }}
                                            </div>
                                        </div>
                                    </div>

                                    <p class="small mb-5 pb-lg-2">
                                        <router-link :to="{ name: 'auth.forgot-password' }">{{
                                            $t('forgot_password')
                                        }}</router-link>
                                    </p>


                                    <button class="btn btn-primary btn-lg px-5" :class="{ 'opacity-25': processing }"
                                        :disabled="processing">
                                        {{ $t('login') }}
                                    </button>

                                </form>

                            </div>

                            <div>
                                <p class="mb-0">Don't have an account? <router-link class="btn-primary" to="/register">{{
                                    $t('register') }}</router-link>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import useAuth from '@/composables/auth'

const { loginForm, validationErrors, processing, submitLogin } = useAuth();

</script>








