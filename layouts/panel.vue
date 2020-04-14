<template>
  <div class="admin-layout-wrap">
    <el-container :style="{height:'100%'}">
      <el-aside width="250px">
        <app-Aside />
      </el-aside>
      <el-container>
        <!-- <el-header>Header</el-header> -->
        <el-main>
          <el-row :gutter="24" type="flex" justify="center">
            <el-col :span="24" :xs="16" :sm="16" :xl="20" :lg="24" :md="24">
              <nuxt />
            </el-col>
          </el-row>
        </el-main>
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
  }
};
</script>
<style>
.admin-layout-wrap {
  width: 100%;
  height: 100vh;
}
</style>
