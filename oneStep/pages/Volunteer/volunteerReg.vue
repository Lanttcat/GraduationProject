<template>
    <div>
        <v-form v-model="valid">
        <v-text-field
            label="标题"
            :rules="nameRules"
            :counter="10"
            required>
        </v-text-field>
        <v-select
            :items="items"
            v-model="e1"
            label="Select"
            single-line
            bottom>
        </v-select>
        <v-text-field
            label="简介"
            v-model="email"
            :rules="emailRules"
            required>
        </v-text-field>
    </v-form>
    </div>
</template>
<script>
export default {
   name: 'volunteerReg',
   data() {
       return {
           valid: '',
           e1: '',
           email: ''
       }
   }
}
</script>
<style lang="stylus" scoped>

</style>

