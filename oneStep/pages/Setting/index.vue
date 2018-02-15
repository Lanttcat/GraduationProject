<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="indigo" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>设置</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
        </v-toolbar>
        <v-list>
                <v-list-tile 
                    v-for="item in settingList" 
                    :key="item.id"
                    @click="turnToSeetingDetail(item.id, item.route)"
                    class="setting-list">
                    <!-- <span>{{item.icon}}</span> -->
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'setting',
    computed: {
        ...mapState('appSetting/appSettingList', [
            'settingList'
        ])
    },
    methods: {
        settingItem () {
            console.log('te');
        },
        turnToSeetingDetail(id, route) {
            console.log(id);
            // this.$router.push(route);
        }
    }
  }
</script>
<style lang="stylus" scoped>
.setting-list
    border-bottom 1px solid rgb(220, 220, 200);
    padding 1rem
</style>
