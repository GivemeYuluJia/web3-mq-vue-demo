<template>
  <button @click="handleClick">点击吧</button>
</template>
<script lang="ts">
  export default {
    name: 'Button',
    methods: {
      handleClick: function(ev: any) {
        console.log(ev);
      }
    }
  }
</script>
<style lang="scss">
  button {
    color: red;
  }
</style>