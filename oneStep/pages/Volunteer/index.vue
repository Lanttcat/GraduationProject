<template>
    <div>
        <alert-info :alertData = alertData></alert-info>
    </div>
</template>
<script>
import alertInfo from '@/components/AlertInfo'
export default {
   name: 'Volunteer',
   data() {
       return {
           alertData: {
               isAlert: true,
               text: '欢迎注册成为志愿者'
           }
       }
   },
   components: {
       'alert-info': alertInfo
   }
}
</script>
