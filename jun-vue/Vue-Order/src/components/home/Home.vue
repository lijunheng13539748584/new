<template>
  <div>
    <div class="row mb-5">
      <div class="col-4">
        <div class="list-group mb-5">
          <router-link tag="li" class="nav-link" :to="{name:'breakfastLink'}">
            <a class="list-group-item list-group-item-action">早餐</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name:'lunchLink'}">
            <a class="list-group-item list-group-item-action">午餐</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name:'afternoonteaLink'}">
            <a class="list-group-item list-group-item-action">下午茶时光</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name:'dinnerLink'}">
            <a class="list-group-item list-group-item-action">晚餐</a>
          </router-link>

        </div>
      </div>
      <!--内容 -->
      <div class="col-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'Home',
    components: {}
  }
</script>

<style>

</style>
