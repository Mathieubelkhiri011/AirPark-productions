export default {
    data() {
        return {
            CLIENT_ID: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
            REDIRECT_URI: import.meta.env.VITE_APP_GOOGLE_REDIRECT_URL
        };
    },
    mounted() {
        this.redirectToGoogleAuth();
    },
    methods: {
        redirectToGoogleAuth() {
            const SCOPE = 'https://www.googleapis.com/auth/userinfo.email';
            window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${this.CLIENT_ID}&redirect_uri=${this.REDIRECT_URI}&response_type=code&scope=${SCOPE}`;
        }
    },
};