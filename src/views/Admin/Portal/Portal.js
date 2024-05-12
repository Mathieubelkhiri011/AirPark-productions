export default {
    data() {
        return {
            CLIENT_ID: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
            CLIENT_SECRET: import.meta.env.VITE_APP_GOOGLE_CODE_SECRET
        };
    },
    mounted() {
        const code = encodeURIComponent(this.getCodeFromUrl());
        const bearerToken = localStorage.getItem(import.meta.env.VITE_APP_BEARER_TOKEN_GOOGLE_CACHE);

        if (code && !bearerToken) {
            this.exchangeCodeForToken(code).then();
        } else {

        }
    },
    methods: {
        getCodeFromUrl() {
            const params = new URLSearchParams(window.location.search);
            return params.get('code');
        },

        async exchangeCodeForToken(code) {
            const redirectUri = import.meta.env.VITE_APP_GOOGLE_REDIRECT_URL;

            const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `code=${code}&client_id=${this.CLIENT_ID}&client_secret=${this.CLIENT_SECRET}&redirect_uri=${redirectUri}&grant_type=authorization_code`
            });

            const tokenData = await tokenResponse.json();
            localStorage.setItem(import.meta.env.VITE_APP_BEARER_TOKEN_GOOGLE_CACHE, tokenData.id_token);
            localStorage.setItem(import.meta.env.VITE_APP_ACCESS_TOKEN_GOOGLE_CACHE, tokenData.access_token);
        },

        async handleLogout() {
            const accessToken = localStorage.getItem(import.meta.env.VITE_APP_ACCESS_TOKEN_GOOGLE_CACHE);
            const response = await fetch('https://oauth2.googleapis.com/revoke', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `token=${accessToken}&client_id=${this.CLIENT_ID}&client_secret=${this.CLIENT_SECRET}`
            });

            if (response.ok) {
                localStorage.removeItem(import.meta.env.VITE_APP_BEARER_TOKEN_GOOGLE_CACHE);
                localStorage.removeItem(import.meta.env.VITE_APP_ACCESS_TOKEN_GOOGLE_CACHE);
                this.$router.push('/admin/login');
            } else {
                console.error('Échec de la révocation du token');
            }
        },

        redirectToUrl(url) {
            this.$router.push(url);
        }
    }
};