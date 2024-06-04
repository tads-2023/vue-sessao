import axios from "axios";
import { useSessionStore } from "@/stores/session";
import { useRouter } from "vue-router";

const baseConfig = {
    baseUrl: "http://localhost:3000/api/v1/",
    timeout: 15*1000
}

const axiosInstance = axios.create(baseConfig)
const sessionStore = useSessionStore();
const router = useRouter();

axiosInstance.interceptors.request.use(config => {
    if(sessionStore.hasSession) {
        config.headers['Token'] = sessionStore.session.token;
        config.headers['UserEmail'] = sessionStore.session.email;
    }
});

axiosInstance.interceptors.response.use( response => {
    if(response.status == 401) {
        sessionStore.destroySession();
        router.push("home")
    }
})

export const apiService = {
    get: (endpoint, params) => {
        return axiosInstance.get(endpoint, { params })   
    },
    post: (endpoint, body) => {
        return axiosInstance.post(endpoint, body)
    },
    delete: (endpoint) => {
        return axiosInstance.delete(endpoint)
    },
    patch: (endpoint, body) => {
        return axiosInstance.patch(endpoint, body)
    }
}