<template>
    <div class="article-Bottom-navigator">
        <v-bottom-nav absolute :value="true" color="transparent">
            <v-btn
                v-for="nav in btns"
                :key="nav.name"
                flat>
                <v-icon>{{nav.icon}}</v-icon>
            </v-btn>
        </v-bottom-nav>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    name: 'article-bottom-navigator',
    computed: {
        ...mapState('articleShell/articleBottom', [
            'btns'
        ])
    }
}
</script>
<style lang="stylus" scoped>

</style>
