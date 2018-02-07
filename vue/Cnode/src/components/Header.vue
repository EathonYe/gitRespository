<template>
  <div class="header">
    <div class="header-inner">
      <div class="left">
        <router-link to='/'>
          <img src='@/assets/cnodejs.svg' title='cnodejs.svg'>
        </router-link>
        <form action="">
          <input type="text" class="form_input-query">
        </form>
      </div>
      <div class="right">
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/">新手入门</router-link></li>
          <li><router-link to="/">API</router-link></li>
          <li><router-link to="/">关于</router-link></li>
          <li><router-link to="/">注册</router-link></li>
          <li><router-link to="/login">登录</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      dialogVisible: false
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #324057;
  position: absolute;
  left: 0;
  top: 0;
}
.header .header-inner {
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 5px;
  line-height: 40px;
}
.header .header-inner img {
  width: 120px;
  vertical-align: middle;
  margin-top: -5px;
  cursor: pointer;
}
.header .header-inner form {
  display: inline-block;
  line-height: 1;
  padding: 0px 20px;
}
.header .header-inner form .form_input-query {
  width: 206px;
  height: 20px;
  padding: 3px 5px 3px 22px;
  background: url(../assets/search.png) no-repeat 3px 3px;
  background-color: #aeaeae;
  color: #666;
  outline: none;
  border: none;
  border-radius: 13px;
  transition: all 0.5s;
}
.header .header-inner form .form_input-query:hover,
.header .header-inner form .form_input-query:focus {
  background-color: #fff;
}
.header ul {
  list-style: none;
  font-size: 14px;
  color: #aeaeae;
  line-height: 40px;
}
.header ul li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
}
.header ul li a {
  color: #aeaeae;
  transition: color 0.5s;
}
.header ul li a:hover {
  color: #fff;
}
</style>
