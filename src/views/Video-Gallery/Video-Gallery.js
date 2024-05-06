export default {
    data () {
        return {
            videos: [
                {link: "https://www.youtube.com/watch?v=TkK6nJrPdsY&ab_channel=TabSheetMusic"},
                {link: "https://www.youtube.com/watch?v=TkK6nJrPdsY&ab_channel=TabSheetMusic"},
                {link: "https://www.youtube.com/watch?v=TkK6nJrPdsY&ab_channel=TabSheetMusic"},
                {link: "https://www.youtube.com/watch?v=TkK6nJrPdsY&ab_channel=TabSheetMusic"}
            ],
        }
    },
    methods: {
        getEmbedUrl(url) {
            let videoId = url.split('v=')[1];
            const ampersandPosition = videoId.indexOf('&');
            if (ampersandPosition !== -1) {
                videoId = videoId.substring(0, ampersandPosition);
            }
            return `https://www.youtube.com/embed/${videoId}`;
        }
    }
};