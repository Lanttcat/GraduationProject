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
        <v-layout row>
            <v-flex xs3>
                <v-subheader>手机</v-subheader>
            </v-flex>
            <v-flex xs9>
                <v-text-field
                name="phone"
                label='请输入手机号'
                hint="输入手机号码"
                v-model="phone"
                min="11"
                max='11'
                class="input-group--focused"
                ></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs3>
                <v-subheader>密码</v-subheader>
            </v-flex>
            <v-flex xs5>
                <v-text-field
                name="pwd"
                label='验证码'
                hint="至少输入8位密码"
                min="8"     
                value=""
                ></v-text-field>
            </v-flex>
            <v-flex xs4>
                <div>
                    <v-btn depressed>获取验证码</v-btn>
                </div>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12>
                <div>
                    <v-btn depressed large>提交</v-btn>
                </div>
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
        phone: '',
        tabs: ['登录', '注册'],
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        
      }
    },
    methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0).toString()
      }
    }
  }
</script>
