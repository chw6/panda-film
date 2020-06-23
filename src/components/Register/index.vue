<template>
  <div class="reg">
    <h1>注册页</h1>
    <input placeholder="请输入用户名" class="ipt" v-model="userName" />
    <input
      placeholder="请输入密码"
      class="ipt"
      type="password"
      v-model="password"
    />
    <input
      placeholder="确认密码"
      class="ipt"
      type="password"
      v-model="password1"
    />
    <button class="btn" @click="regSuccess">注册</button>
    <router-link to="login" class="login">已有账号，我要登录</router-link>
  </div>
</template>

<script>
import axios from "axios";
import { reg } from "@/services/auth";
import { setToken } from "@/utils/auth";
export default {
  name: "register",
  data() {
    return {
      userName: "",
      password: "",
      password1: "",
    };
  },
  methods: {
    async regSuccess() {
      const result = await reg({
        userName: this.userName,
        password: this.password,
      });
      console.log(result);
      if (result.code === "success") {
        setToken(result.token);
        this.$router
          .push({
            path: "/mine/login",
          })
          .catch(result.message);
      }
    },
  },
};
</script>

<style scoped>
.reg h1 {
  text-align: center;
  color: red;
  margin: 50px auto;
}
.reg .ipt {
  display: block;
  height: 30px;
  line-height: normal;
  width: 73%;
  margin: 1rem auto;
  border: none;
  border-bottom: 1px solid #d81e06;
}
.login {
  float: right;
  font-size: 0.8rem;
  margin-right: 3rem;
  margin-bottom: 2rem;
  color: #d81e06;
}
a {
  color: black;
  text-decoration: none;
}

.btn {
  border: none;
  background-color: #d81e06;
  color: white;
  width: 75%;
  margin: 1rem auto;
  display: block;
  font-size: 1rem;
  text-align: center;
  height: 2rem;
}
</style>
