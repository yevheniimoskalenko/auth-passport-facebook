<template>
  <div>
    <el-carousel :interval="5000" arrow="always" height="650px">
      <el-carousel-item v-for="item in 4" :key="item"></el-carousel-item>
    </el-carousel>
    <nuxt-link to="/auth/login">Увійти</nuxt-link>
    <nuxt-link to="/auth/create">Створити контакт</nuxt-link>
  </div>
</template>
<script>
export default {
  middleware: ["user"]
};
</script>
<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>