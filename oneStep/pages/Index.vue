<template>
    <div>
        <loacl-header></loacl-header>
        <v-container grid-list-md text-xs-center class="home-feed">
            <h2>景点推荐</h2>
            <!-- 一般三到四个 -->
            <v-layout
                v-for="item in ssList"
                :key="item.ssId"
                row
                class="card-item">
                <v-flex xs6>
                  <div style="text-align: left">
                    <div class="headline" @click="TurnToArticle('11')">{{ item.ssTitle }}</div>
                    <div class="headline-sub">{{ item.ssSubTitle }}</div>
                    <v-chip
                        v-for="tag in item.tag"
                        :key="tag.id"
                        outline
                        class="item-tag"
                        color="red">
                        {{tag}}
                    </v-chip>
                  </div>
                </v-flex>
                <v-flex x6>
                    <img
                      src="../static/img/testimg/1.jpg">
                    <div>
                        <span>{{ item.browserNumber }}</span>
                        <span>{{ item.zanNumber }}</span>
                    </div>
                </v-flex>
            </v-layout>
            <h2>热门攻略</h2>
            <v-layout row class="card-item">
                <v-flex xs7>
                  <div style="text-align: left">
                    <div class="headline" @click="TurnToArticle('11')">两天时间在济南怎么玩</div>
                    <div>两天的时间在济南其实足够了，并且冬天济南</div>
                    <v-chip outline color="red">
                        <!-- <v-icon left>label</v-icon> -->
                        去处
                    </v-chip>
                    <v-chip outline color="red">
                        <!-- <v-icon left>label</v-icon> -->
                        标签
                    </v-chip>
                  </div>
                </v-flex>
                <v-flex xs5>
                    <v-card-media
                      src="../static/img/testimg/1.JPG"
                      height="8rem"
                      contain
                    ></v-card-media>
                    <div>
                        <span>1111浏览</span>
                        <span>161赞</span>
                    </div>
                </v-flex>
            </v-layout>
            <h2>最新发布</h2>
            <v-layout row class="card-item">
                <v-flex xs7>
                  <div>
                    <div class="headline">Halycon Days</div>
                    <div>Ellie Goulding</div>
                  </div>
                </v-flex>
                <v-flex xs5>
                    <v-card-media
                      src="../static/img/testimg/1.JPG"
                      height="125px"
                      contain
                    ></v-card-media>
                    <v-card-actions>
                        <v-btn flat dark>赞</v-btn>
                    </v-card-actions>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import loaclHeader from '../components/LocalBanner'
import {mapActions} from 'vuex';
function setState(store) {
    store.dispatch('appShell/appHeader/setAppHeader', {
        isShowHeader: true,
        title: '茶途',
        isShowInputSearch: true,
        isShowBtnSearch: true,
        leftBtn: {
            isShow: true,
            isLogo: true,
            src: '/static/img/icons/logo.png',
            alt: 'logo'
        }
    });
}

export default {
    name: 'index',
    data () {
        return {
            ssList: [
                {
                    ssId: 1223,
                    ssTitle: '测试cadlajdjll名字1',
                    ssSubTitle: '测试的副标题或者作者名',
                    tag: ['推荐', '景点'],
                    ssImg: '../static/img/testimg/1.JPG',
                    browserNumber: '1111',
                    zanNumber: '222'
                },
                {
                    ssId: 126623,
                    ssTitle: '测试名字2',
                    ssSubTitle: '测试的副标题',
                    tag: ['推荐', '景点'],
                    ssImg: '../static/img/testimg/1.JPG',
                    browserNumber: '1111',
                    zanNumber: '222'
                },
                {
                    ssId: 125523,
                    ssTitle: '测试名字3',
                    ssSubTitle: '测试的副标题',
                    tag: ['推荐', '景点'],
                    ssImg: '../static/img/testimg/1.JPG',
                    browserNumber: '1111',
                    zanNumber: '222'
                }

            ],
            items: [
                {
                    src: '../static/img/testimg/1.JPG'
                },
                {
                    src: '../static/img/testimg/1.JPG'
                },
                {
                    src: '../static/img/testimg/1.JPG'
                },
                {
                    src: '../static/img/testimg/1.JPG'
                }
            ]
        }
    },
    metaInfo: {
        title: 'Home',
        titleTemplate: '%s - Lavas',
        meta: [
            {name: 'keywords', content: 'lavas PWA'},
            {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
        ]
    },
    async asyncData({store, route}) {
        setState(store);
    },
    activated() {
        setState(this.$store);
    },
    components: {
        'loacl-header': loaclHeader
    },
    methods: {
        TurnToArticle: function (item) {
            console.log(1111)
            this.$router.push({
                path: 'article',
                query: {
                    id: 111111
                }
            });
        }
    }
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/variable'
.content
    display flex
    align-items center
    justify-content center
    height 100%
    flex-wrap wrap
    h2
        font-size 46px
        font-weight 500

.home-feed
    background-color #fff

    .card-item
        padding 4px 0px 8px 0px
        height 11rem
        border-bottom 1px solid $colorBorder
        box-shadow none

        .headline
            height 5rem

        .headline-sub
            height 3rem

        .item-tag
            height 1.5rem

        img 
            height 8rem
.carousel
    height 200px

// 替换header
#app .app-view.app-view-with-header
    top 0
.app-shell-header
    color white
</style>
