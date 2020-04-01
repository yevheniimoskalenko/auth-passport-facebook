<template>
  <div class="admin-layout-wrap">
    <el-container :style="{height:'100%'}">
      <el-aside width="250px">
        <app-Aside />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <nuxt />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import appAside from "@/components/panel/aside";
export default {
  components: {
    appAside
  },
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(value) {
      this.$message.error(value.response.data.message);
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
.admin-layout-wrap {
  width: 100%;
  height: 100vh;
}
</style>
