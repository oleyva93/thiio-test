import { inject, ref } from "vue";
import store from "../store";

export default function useProfile() {
    const profile = ref({
        name: "",
        email: "",
    });

    const validationErrors = ref({});
    const isLoading = ref(false);
    const swal = inject("$swal");

    const getProfile = async () => {
        profile.value = store.getters["auth/user"];
    };

    const updateProfile = async (profile) => {
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};

        axios
            .put("/api/user", profile)
            .then(({ data }) => {
                if (data.success) {
                    store.commit("auth/SET_USER", data.data);
                    swal({
                        icon: "success",
                        title: "Profile updated successfully",
                    });
                }
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    return {
        profile,
        getProfile,
        updateProfile,
        validationErrors,
        isLoading,
    };
}
