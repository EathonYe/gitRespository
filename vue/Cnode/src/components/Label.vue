<template>
    <div class="label">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Label'
}
</script>

<style>
.label {
  width: 100%;
  min-height: 150px;
  background-color: #F9FAFC;
  border: 1px solid #ddd;
  padding: 10px 10px;
}
</style>
