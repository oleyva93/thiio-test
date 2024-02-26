<template>
    <div class="container vh-100">
        <div class="row justify-content-center align-items-center my-5 h-100">
            <div class="col-md-6">
                <div class="card border-0 shadow-sm">
                    <div class="d-flex align-items-center card-header bg-transparent" style="gap: 5px">
                        <router-link class="btn-primary" to="/login">
                            <ArrowBack />
                        </router-link>
                        <h3 class="m-0">
                            {{ $t('register') }}
                        </h3>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="submitRegister">
                            <div class="">
                                <!-- Email -->
                                <div class="mb-3">
                                    <label for="name" class="form-label">{{ $t('name') }}</label>
                                    <input v-model="registerForm.name" id="name" type="text" class="form-control" autofocus>
                                    <!-- Validation Errors -->
                                    <div class="text-danger mt-1">
                                        <div v-for="message in validationErrors?.name">
                                            {{ message }}
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">{{ $t('email') }}</label>
                                    <input v-model="registerForm.email" id="email" type="email" class="form-control"
                                        autocomplete="username">
                                    <!-- Validation Errors -->
                                    <div class="text-danger mt-1">
                                        <div v-for="message in validationErrors?.email">
                                            {{ message }}
                                        </div>
                                    </div>
                                </div>
                                <!-- Password -->
                                <div class="mb-4">
                                    <label for="password" class="form-label">
                                        {{ $t('password') }}
                                    </label>
                                    <input v-model="registerForm.password" id="password" type="password"
                                        class="form-control" autocomplete="current-password">
                                    <!-- Validation Errors -->
                                    <div class="text-danger mt-1">
                                        <div v-for="message in validationErrors?.password">
                                            {{ message }}
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <label for="password_confirmation" class="form-label">
                                        {{ $t('confirm_password') }}
                                    </label>
                                    <input v-model="registerForm.password_confirmation" id="password_confirmation"
                                        type="password" class="form-control" autocomplete="current-password">
                                    <!-- Validation Errors -->
                                    <div class="text-danger-600 mt-1">
                                        <div v-for="message in validationErrors?.password_confirmation">
                                            {{ message }}
                                        </div>
                                    </div>
                                </div>

                                <!-- Buttons -->
                                <div class="flex items-center justify-end mt-10 w-100">
                                    <button class="btn btn-primary w-100" :class="{ 'opacity-25': processing }"
                                        :disabled="processing">
                                        {{ $t('register') }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import useAuth from '@/composables/auth'
import ArrowBack from '../../components/icons/ArrowBack.vue';

const { registerForm, validationErrors, processing, submitRegister } = useAuth();

</script>
