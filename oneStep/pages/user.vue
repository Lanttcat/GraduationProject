<template>
    <div>
        <v-container grid-list-md text-xs-center class="home-feed">
            <v-layout row class="card-item">
                <v-flex xs12>
                    <div style="text-align: left">
                        <div class="headline">欢迎来到茶途</div>
                    </div>
                    <v-layout row>
                        <v-flex xs6 full-height>
                            <v-btn @click="toLogin" v-actmoni class="user-btn_login" color="amber accent-2" dark>登录/注册</v-btn>
                        </v-flex>
                        <v-flex xs6>
                            <v-card-media
                                src="../static/img/testimg/1.JPG"
                                height="80px"
                                contain>
                            </v-card-media>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container style="width:100%;padding:0;margin-top:1rem">
          <v-layout row wrap>
            <v-flex
                xs4
                v-for="n in 9"
                :key="n"
                >
                <v-card flat tile class="user-setting_item">
                    <v-flex full-height>
                        <v-btn
                            icon flat x-large
                            style="position: relativel;top:10px">
                            <v-icon class="app-header-icon">star</v-icon>
                        </v-btn>
                        <div>
                            <v-btn flat small>我的收藏</v-btn>
                        </div>
                    </v-flex>
                </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </div>
</template>

<script>
import { mapActions } from "vuex";
function setState(store) {
  store.dispatch("appShell/appHeader/setAppHeader", {
    show: true,
    title: "Lavas",
    showMenu: true,
    showBack: false,
    showLogo: false,
    actions: [
      {
        icon: "search",
        route: "/search"
      }
    ]
  });
}

export default {
  name: "index",
  data() {
    return {
      items: [
        {
          src: "../static/img/testimg/1.JPG"
        },
        {
          src: "../static/img/testimg/1.JPG"
        },
        {
          src: "../static/img/testimg/1.JPG"
        },
        {
          src: "../static/img/testimg/1.JPG"
        }
      ]
    };
  },
  metaInfo: {
    title: "Home",
    titleTemplate: "%s - Lavas",
    meta: [
      { name: "keywords", content: "lavas PWA" },
      {
        name: "description",
        content:
          "基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"
      }
    ]
  },
  async asyncData({ store, route }) {
    setState(store);
  },
  activated() {
    setState(this.$store);
  },
  methods: {
      toLogin() {
          console.log(this.$router);
          this.$router.replace('Login');
      }
  }
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/variable';
 #app 
    .app-view-with-header
        top 0
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-wrap: wrap;

    h2 {
        font-size: 46px;
        font-weight: 500;
    }
}

.home-feed {
    background-color: #fff;

    .card-item {
        padding: 8px 0px;
        border-bottom: 1px solid $colorBorder;
        box-shadow: none;
    }
}

.carousel {
    height: 200px;
}

.user-btn_login {
    background: $theme;
    box-shadow: none;
    width: 100%;
    color: $colorFont;
}

.user-setting_item {
    height: 100px;
    border-right: 1px $colorBorder solid;
    border-bottom: 1px $colorBorder solid;
}
</style>
