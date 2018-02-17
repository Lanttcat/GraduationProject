<template>
    <v-layout row>
        <v-flex xs12 flat>
            <v-card flat>
                <v-toolbar color="white" flat>
                    <!-- <v-toolbar-side-icon> {{ subHeaderData.leftIcon }}</v-toolbar-side-icon> -->
                    <v-btn 
                        v-if="subHeaderData.leftIcon"
                        icon>
                        <v-icon>{{ subHeaderData.leftIcon }}</v-icon>
                    </v-btn>
                    <v-toolbar-title
                        v-if="subHeaderData.title">
                        {{ subHeaderData.title }}
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <!-- <v-btn icon>
                        <v-icon>search</v-icon>
                    </v-btn> -->
                    <v-btn 
                        v-if="subHeaderData.rightIcon"
                        icon>
                        <v-icon>{{ subHeaderData.rightIcon }}</v-icon>
                    </v-btn>    
                </v-toolbar>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
export default {
   name: 'sub-header',
   props: ['subHeaderData']
}
</script>
<style lang="stylus" scoped>

</style>

