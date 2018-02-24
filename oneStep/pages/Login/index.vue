<template>
    <v-tabs
        v-model="active"
        color="white"
        fixed-tabs
        slider-color="yellow">
        <v-tab
            v-for="item in navs"
            :key="item"
            ripple>
            {{ item }}
        </v-tab>
        <!-- 登录tab -->
        <v-tab-item>
            <v-layout row class="login-form">
                <v-flex xs3>
                    <v-subheader>手机</v-subheader>
                </v-flex>
                <v-flex xs9>
                    <input type="text" class="login-input" v-model="phoneNum" placeholder="手机登录更安全哟">
                </v-flex>
            </v-layout>
            <v-layout row class="login-form">
                <v-flex xs3>
                    <v-subheader>密码</v-subheader>
                </v-flex>
                <v-flex xs9>
                    <input type="text" class="login-input" v-model="phoneNum" placeholder="">
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
        </v-tab-item>
        <!-- 注册tab -->
        <v-tab-item>
            <v-card flat style="padding-top:1rem">
                <v-layout row class="login-form">
                    <v-flex xs3>
                        <v-subheader>手机</v-subheader>
                    </v-flex>
                    <v-flex xs9>
                        <input type="text" class="login-input" v-model="phoneNum" placeholder="手机号">
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
                            <button @click="getCode" class="login-btn_code">提交</button>
                        </div>
                    </v-flex>
                </v-layout>
                <v-layout row class="login-form">
                    <v-flex xs3>
                        <v-subheader>密码</v-subheader>
                    </v-flex>
                    <v-flex xs9>
                        <input type="text" class="login-input" v-model="phoneNum" placeholder="手机号">
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
            </v-card>
        </v-tab-item>
    </v-tabs>
    <!-- <v-container fluid>
        
    </v-container> -->
</template>
<script>
import storage from '../../lib/storage.js';
import {mapState} from 'vuex';

function setState(store) {
    store.dispatch("appShell/appHeader/setAppHeader", {
        isShowHeader: false
    });
}
export default {
    name: "login",
    data() {
        return {
            navs: ['登录', '注册'],
            alertww: true,
            phoneNum: "",
            tipInfo: ["号码格式错误", "验证码错误"],
            active: null,
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        };
    },
    async asyncData({ store, route }) {
        setState(store);
    },
    activated() {
        setState(this.$store);
    },
    methods: {
        next() {
            const active = parseInt(this.active);
            this.active = (active < 2 ? active + 1 : 0).toString();
        },
        verifyPhone(e) {
            if (!/^1[34578]\d{9}$/.test(this.phoneNum)) {
                this.alertww = true;
                console.log(e);
            } else {
                // 发送
            }
        },
        getCode() {
            console.log(this.phoneNum);
            this.$http.get("/data/userInfo", {
                phone: this.phoneNum
            }).then(
                function (res) {
                    console.log(res);
                },
                function (err) {
                    console.log(err)
                }
            );
        }
    }
};
</script>
<style lang="stylus" scoped>
@require '~@/assets/stylus/variable';

.login-form {
    margin: 1rem;
    border-bottom: 1px solid $theme;
}

.login-input {
    width: 100%;
    height: 100%;
    outline: none;
}

.login-btn_code {
    padding: 0.8rem;
    width: 100%;
    border-radius: 5px;
    background: $theme;
    text-align: center;
}

.login-btn {
    width: 100%;
    padding: 1rem;
    border-radius: 5px;
    background: $theme;
    text-align: center;
}
</style>

