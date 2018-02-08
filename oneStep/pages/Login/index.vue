<template>
    <v-container fluid>
        <!-- <div>
            <v-tabs v-model="active">
                <v-tabs-bar class="cyan" dark>
                    <v-tabs-item
                        v-for="tab in tabs"
                        :key="tab"
                        :href="'#' + tab"
                        ripple>
                        {{ tab.slice(-1) }}
                    </v-tabs-item>
                    <v-tabs-slider color="yellow"></v-tabs-slider>
                </v-tabs-bar>
                <v-tabs-items>
                    <v-tabs-content
                        v-for="tab in tabs"
                        :key="tab"
                        :id="tab">
                        <v-card flat>
                            <v-card-text>{{ text }}</v-card-text>
                        </v-card>
                    </v-tabs-content>
                </v-tabs-items>
            </v-tabs>
        </div> -->
        <v-layout row class="login-form">
            <v-flex xs3>
                <v-subheader>手机</v-subheader>
            </v-flex>
            <v-flex xs9>
                <input type="text" class="login-input" placeholder="手机号">
            </v-flex>
        </v-layout>
        <v-layout row class="login-form">
            <v-flex xs3>
                <v-subheader>验证码</v-subheader>
            </v-flex>
            <v-flex xs5>
                <input type="text" class="login-input" placeholder="验证码">
            </v-flex>
            <v-flex xs4>
                <div>
                    <button class="login-btn_code">提交</button>
                </div>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <p style="text-align:right" class="text-lg-right">忘记密码</p>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-alert
                type="success"
                :value="alertww"
                transition="scale-transition">
                手机号错误
            </v-alert>
        </v-layout>
        <v-layout>
            <v-flex xs12>
                <button class="login-btn">提交</button>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'login',
    data () {
      return {
        e1: false,
        e2: false,
        e3: false,
        e4: false,
        alertww:false,
        phoneNum: '',
        tabs: ['登录', '注册'],
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        
      }
    },
    methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0).toString()
      },
      verifyPhone (e) {
            if (!(/^1[34578]\d{9}$/.test(this.phoneNum))) { 
                this.alertww = true;
                console.log(e);
            }
            else {
                // 发送
            }
      }
    }
  }
</script>
<style lang="stylus" scoped>
@require '~@/assets/stylus/variable'
.login-form
    margin-bottom 2rem
    border-bottom 1px solid $theme

.login-input
    width 100%
    height 100%
    outline none
.login-btn_code
    padding 0.8rem
    width 100%
    border-radius 5px
    background $theme
    text-align center
.login-btn
    width 100%
    padding 1rem
    border-radius 5px
    background $theme
    text-align center
</style>

