<template>
    <footer>
        <slot name="nav">
            <v-bottom-nav absolute :value="true" color="transparent">
                <v-btn
                    v-for="nav in navs"
                    :key="nav.name"
                    :value="nav.avtive"
                    flat primary
                    @click.native="handleNavClick(nav.route, nav.name)"
                    class="btn-nav"
                    :class="{'btn-nav-center':nav.center}">
                    <span>{{ nav.text }}</span>
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="nav.icon"></use>
                    </svg>
                </v-btn>
            </v-bottom-nav>
        </slot>
    </footer>
</template>
<script>
import {mapState} from 'vuex';
import EventBus from '@/core/event-bus';;
export default {
    name: 'app-bottom-navigator',
    computed: {
        ...mapState('appShell/appBottomNav', [
            'show',
            'navs'
        ])
    },
    methods: {

        /**
         * 处理底部导航栏的点击行为，跳转到新页面
         *
         * @param {Object} route route
         * @param {string} name 触发的底部导航栏的 name
         */
        handleNavClick(route, name) {
            let eventData = {name};

            // 发送给父组件，内部处理
            this.$emit('click-nav', eventData);

            // 发送全局事件，便于非父子关系的路由组件监听
            EventBus.$emit('app-bottom-navigator:click-nav', eventData);
            if (route) {
                this.$router.replace(route);
            }
        }

    }
}
</script>
<style lang="stylus" scoped>
.btn-nav
    min-width 70px
.btn-nav-center
    // margin-top 8px
    // width 40px
    // height 40px
    min-width 40px
    // border 1px solid rgb(240, 240, 240)
    // border-radius 100%
//     svg
//         position relative
//         top -8px
.icon
    width 1.7rem
    height 1.7rem
    
</style>
