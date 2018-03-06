<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <div class="container">
    <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: '',
  components: {
    appHeader:Header
  }
}
</script>

<style>

</style>
