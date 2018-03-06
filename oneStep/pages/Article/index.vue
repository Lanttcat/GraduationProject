<template>
    <v-layout>
        <v-flex xs12>
            <v-card flat>
                <v-card-media src="../../static/img/testimg/1.jpg" height="200px">
                </v-card-media>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                        <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn flat color="orange">评论</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                </v-card-actions>
                <!-- 评论框 -->
                <v-text-field
                    class="comment-text"
                    rows='3'
                    name="input-1"
                    label="填写评论信息"
                    multi-line>
                </v-text-field>
                <v-list two-line>
                    <template>
                        <v-subheader>评论</v-subheader>
                        <v-list-tile-content>
                            <v-list-tile-title></v-list-tile-title>
                            <v-list-tile-sub-title>
                                暂时还没有评论，快来抢沙发吧
                            </v-list-tile-sub-title>
                        </v-list-tile-content>
                        <!-- <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
                        <v-list-tile avatar v-else  :key="item.title">
                        <v-list-tile-avatar>
                            <img :src="item.avatar">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                        </v-list-tile-content> -->
                        <!-- </v-list-tile> -->
                    </template>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
import { mapActions, mapState } from "vuex";
function setState(store) {
    store.dispatch("appShell/appHeader/setAppHeader", {
        isShowHeader: false
    });
}
export default {
    name: 'articleDetail',
    async asyncData({ store, route }) {
        setState(store);
    },
    activated() {
        setState(this.$store);
    }
}
</script>
<style lang="stylus" scoped>

.comment-text
    padding auto 16px
</style>
