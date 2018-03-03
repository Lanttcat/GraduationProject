<template>
    <v-snackbar
        :timeout="timeout"
        :top="y === 'top'"
        :bottom="y === 'bottom'"
        :right="x === 'right'"
        :left="x === 'left'"
        :multi-line="mode === 'multi-line'"
        :vertical="mode === 'vertical'"
        v-model="snackbar">
        {{ msgText }}
        <v-btn flat color="pink" @click.native="snackbar = false">知道了~</v-btn>
    </v-snackbar>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'msg-tip',
    data () {
        return {
            snackbar: false,
            y: 'top',
            x: null,
            mode: '',
            timeout: 3000
        }
    },
    watch: {
        msgSwitch() {
            this.snackbar = this.msgSwitch;
        }
    },
    computed: {
        ...mapState('global', [
            'msgSwitch',
            'msgText'
        ])
    }
}
</script>
<style lang="stylus" scoped>
    
</style>

