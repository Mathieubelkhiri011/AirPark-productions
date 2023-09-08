export default {
    data: () => ({
        mail: {
            nom: '',
            address: '',
            content: ''
        },
        loading: false,
        rules: {
            required: value => !!value || '',
        },
    }),

    watch: {
        loading(val) {
            if (!val) return

            setTimeout(() => (this.loading = false), 2000)
        },
    },
}