<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: '按钮'
    }
  },
  data () {
    return {
      content: this.text
    }
  }
}
</script>

<style scoped>
.btn {
  border-width: 0;
  line-height: 3.5rem;
  font-size: 2rem;
  background-color: transparent;
  color: #fff;
  outline: none;
  cursor: pointer;
}
.btn:hover {
  color: #e8e8e8;
}
</style>
