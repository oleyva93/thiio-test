<template>
    <v-menu v-if="Object.keys(locales).length > 1">
        <template v-slot:activator="{ props }">
            <a class="nav-link dropdown-toggle" v-bind="props" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                {{ locales[locale] }}
            </a>
        </template>
        <v-list>
            <v-list-item v-for="(value, key) in locales" :key="key" class="dropdown-item" href="#"
                @click.prevent="setLocale(key)">
                <v-list-item-title>{{ value }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { loadMessages } from '@/plugins/i18n'

const store = useStore();
const i18n = useI18n({ useScope: "global" });

const locale = computed(() => store.getters["lang/locale"])
const locales = computed(() => store.getters["lang/locales"])

function setLocale(locale) {
    if (i18n.locale !== locale) {
        loadMessages(locale)
        store.dispatch('lang/setLocale', { locale })
    }
}

</script>

<style scoped></style>
