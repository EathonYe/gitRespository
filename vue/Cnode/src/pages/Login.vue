<template>
<div class="login">
  <div class="left-container">
    <ul class="bread-crumb">
      <li>
        <router-link to="/">主页</router-link>
        <span class="divider">/</span>
      </li>
      <li>登录</li>
    </ul>
    <form action="">
      <div class="form-group">
        <label for="username" class="form-label">用户名</label>
        <div class="form-input"><input type="text" id="username" size="30"></div>
      </div>
      <div class="form-group">
        <label for="password" class="form-label">密码</label>
        <div class="form-input"><input type="password" id="password"></div>
      </div>
      <div class="form-group">
        <button class="btn btn-deep-primary">登录</button>
        <button class="btn btn-primary">通过<span>GitHub</span>登录</button>
        <router-link to="/"><span>忘记密码了?</span></router-link>
      </div>
    </form>
  </div>
  <div class="side-bar">
    <Label>
      <div style="margin-bottom: 25px;">关于</div>
      <div style="margin-bottom: 15px;">CNode：Node.js专业中文社区</div>
      <div style="margin-bottom: 15px;">在这里你可以：</div>
      <ul style="margin-left: 30px;line-height: 30px;">
        <li>向别人提出你遇到的问题</li>
        <li>帮助遇到问题的人</li>
        <li>分享自己的知识</li>
        <li>和其它人一起进步</li>
      </ul>
    </Label>
  </div>
  <footer>本次登录为不安全登录，造成密码泄露等问题作者概不负责！   -- EathonYe</footer>
</div>
</template>

<script>
import Label from '@/components/Label'

export default {
  name: 'login',
  components: {
    Label
  }
}
</script>

<style>
.login {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.left-container {
  width: 65%;
  height: 299px;
  background-color: #fff;
}
.side-bar {
  width: calc(18% + 20px);
  padding-left: 20px;
}
.bread-crumb {
  list-style: none;
  font-size: 14px;
  color: #999;
  line-height: 20px;
  padding: 10px;
}
.bread-crumb li {
  display: inline-block;
}
.bread-crumb li .divider {
  display: inline-block;
  padding: 0px 5px;
  color: #ccc;
  font-size: 16px;
}
.bread-crumb a {
  color: #9FBD01;
}
.bread-crumb a:hover {
  text-decoration: underline;
}
.left-container form {
  height: 179px;
  padding: 10px;
  margin-top: 40px;
}
form .form-group {
  height: 30px;
  margin-bottom: 20px;
}
form .form-group .form-label {
  float: left;
  width: 20%;
  line-height: 30px;
  font-size: 14px;
  color: #333;
  text-align: right;
}
form .form-group .form-input {
  box-sizing: border-box;
  float: left;
  width: 80%;
  padding: 0px 20px;
}
form .form-group .form-input input {
  box-sizing: border-box;
  width: 284px;
  height: 30px;
  padding: 4px 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: all 0.2s linear;
}
form .form-group .form-input input:focus {
  box-shadow: 0 0 8px 0.5px #5BC0DE;
}
.form-group:last-child {
  margin-left: 18%;
}
.form-group:last-child > a span {
  color: #aeaeae;
  font-size: 16px;
  cursor: pointer;
  transition: all .2s linear;
}
.form-group:last-child > a span:hover {
  color: #333;
  text-decoration: underline;
}
.btn {
  height: 36px;
  line-height: 28px;
  margin: 0px 10px;
  padding: 4px 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
  font-weight: normal;
  color: #fff;
  cursor: pointer;
  transition: all .2s linear;
}
.btn span {
  display: inline-block;
  margin: 0px 5px;
  font-weight: bold;
}
.btn.btn-deep-primary {
  background-color: #08c;
}
.btn.btn.btn-deep-primary:hover {
  background-color: #05c;
}
.btn.btn-primary {
  background-color: #5BC0DE;
}
.btn.btn-primary:hover {
  background-color: #2F96B4;
}
.side-bar {
  font-size: 14px;
}
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  line-height: 70px;
  background-color: #fff;
  text-align: center;
  color: #999;
}
</style>
