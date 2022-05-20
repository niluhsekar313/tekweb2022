Vue.createApp({
  data() {
    return {
      articles: null,
    };
  },
  methods: {
    getMarkdownData() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const articles = urlParams.get("articles");
      var converter = new showdown.Converter();
      console.log(articles);
      axios
        .get("https://raw.githubusercontent.com/niluh12345/tekweb2022/main/contents/" + articles)
        .then((res) => {
          var html = converter.makeHtml(res.data);
          this.articles = html;
          console.log(html);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeMount() {
    this.getMarkdownData();
  },
}).mount("#app");
