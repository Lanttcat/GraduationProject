<template>
    <div class="article-detail">

    </div>
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

</style>
