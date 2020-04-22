<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <layout></layout>
  </div>
</template>

<script>

import layout from "./layout/layout";
export default {
  name: 'app',
  components: {
    layout
  }
}
</script>

<style>

    @import "assets/global.css";
</style>
