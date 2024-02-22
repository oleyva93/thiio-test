<template>
    <div class="container vh-100">
        <div class="row justify-content-center align-items-center my-5 h-100">
            <div class="col-md-6">
                <div class="card border-0 shadow-sm">
                    <div class="d-flex align-items-center card-header bg-transparent" style="gap: 5px">
                        <router-link class="btn-primary" to="/">
                            <ArrowBack />
                        </router-link>
                        <h4 class="m-0">
                            {{ $t('forgot_password_t') }}
                        </h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="submitForgotPassword">
                            <div class="">
                                <!-- Email -->
                                <div class="mb-3">

                                    <v-text-field autofocus autocomplete="username" v-model="forgotForm.email" id="email"
                                        type="email" :label="$t('email')" required></v-text-field>

                                    <!-- Validation Errors -->
                                    <div class="text-danger mt-1">
                                        <div v-for="message in validationErrors?.email">
                                            {{ message }}
                                        </div>
                                    </div>
                                </div>
                                <!-- Buttons -->
                                <div class="flex items-center justify-end mt-10">
                                    <button class="btn btn-primary" :class="{ 'opacity-25': processing, 'w-100': true }"
                                        :disabled="processing">
                                        {{ $t('send_password_reset_link') }}
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
import ArrowBack from '../../../components/icons/ArrowBack.vue';

const { forgotForm, validationErrors, processing, submitForgotPassword } = useAuth();
</script>

<style scoped></style>
