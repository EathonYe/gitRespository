<template>
  <div class="header">
    <router-link to='/'>
        <img src='@/assets/cnodejs.svg' title='cnodejs.svg'>
    </router-link>
    <Button>关于</Button>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'Header',
  data () {
    return {
      dialogVisible: false
    }
  },
  components: {
    Button
  }
}
</script>

<style scoped>
.header {
    width: 100%;
    height: 3.6rem;
    background-color: #324057;
    position: absolute;
    left: 0;
    top: 0;
}
.header img {
  width: 10rem;
  height: 3.5rem;
  margin-left: 10rem;
  cursor: pointer;
}
.header button {
  float: right;
  line-height: 3.6rem;
  margin-right: 10rem;
  font-size: 1.5rem;
  color: #fff;
  letter-spacing: 2px;
}
.header button:hover {
  color: #e8e8e8;
}
</style>
