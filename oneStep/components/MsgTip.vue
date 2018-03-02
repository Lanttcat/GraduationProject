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
export default {
    name: 'msgTip',
    props: ['msgText'],
    data () {
        return {
            snackbar: false,
            y: 'top',
            x: null,
            mode: '',
            timeout: 3000
        }
    }
}
</script>
<style lang="stylus" scoped>
    
</style>

