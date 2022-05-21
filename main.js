Vue.createApp({
  data() {
    return {
      massage: "Hi",
      header: {
        title: "Niluh Sekar",
        desc: "Mahasiswa Program Studi Sistem Informasi Universitas Ahmad Dahlan  fakultas sains dan teknologi terapan yang sedang mengembangkan  dan memperkaya diri dengan aplikasi desain, menyukai ilustrasi meski masih abstrak dan senang ikut ke volunteer - an. Disamping menjadi mahasiswa juga mengikuti organisasi didalam maupun di luar kampus. ",
        description: "be the best version of yourself ",
        social: {
          ig: {
            url: "https://instagram.com/niluhskrlfa_",
            title: " niluhskrlfa_ ",
          },
          github: {
            url: "https://github.com/niluh12345",
            title: " niluh12345 ",
          },
        },
        imageProfile: "https://raw.githubusercontent.com/Niluhsekar12345/niluh/main/images/profile.png",
      },
      articles: [],
      article: null,
    };
  },
  methods: {
    getHeaderData() {
      axios
        .get("https://raw.githubusercontent.com/Niluhsekar12345/niluh/main/content/header.json")
        .then((res) => {
          this.header = res.data;
          this.getArticles();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getArticles() {
      axios
        .get("https://raw.githubusercontent.com/Niluhsekar12345/niluh/main/content/articles.json")
        .then((res) => {
          this.articles = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMarkdown() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const articles = urlParams.get("article");
      var converter = new showdown.Converter();
      console.log(articles);
      axios
        .get((src = "https://raw.githubusercontent.com//Niluhsekar12345/niluh/main/content/" + articles))
        .then((res) => {
          var html = converter.makeHtml(res.data);
          this.article = html;
          console.log(html);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  beforeMount() {
    this.getHeaderData(), this.getArticles(), this.getMarkdown();
  },
}).mount("#app");
