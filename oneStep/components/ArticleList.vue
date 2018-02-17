<template>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-list>
                    <v-list-tile avatar v-for="item in listArray" :key="item.title">
                        <!-- <v-list-tile-action>
                            <v-icon v-if="item.icon" color="pink">star</v-icon>
                        </v-list-tile-action> -->
                        <v-list-tile-content>
                            <v-list-tile-title v-text="item.title"></v-list-tile-title>
                            <v-list-tile-sub-title>{{ item.time }}-{{item.status}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-avatar
                            v-if="item.image"
                            tile>
                            <img :src="item.iamge">
                        </v-list-tile-avatar>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
export default {
    name: 'articleList',
    props: ['listArray']
}
</script>
<style lang="stylus" scoped>

</style>
