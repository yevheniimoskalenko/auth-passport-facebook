<template>
  <el-menu
    router
    :style="{height: '100%'}"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    :default-active="$route.path"
  >
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu-item index="/profile">
      <i class="el-icon-user"></i>
      <span>Профіль</span>
    </el-menu-item>
    <el-menu-item index="/post">
      <i class="el-icon-goods"></i>
      <span>Каталог товарів</span>
    </el-menu-item>
    <el-menu-item index="/member">
      <i class="el-icon-collection-tag"></i>
      <span>Учасник в розіграші</span>
    </el-menu-item>
    <template v-if="$auth.$state.user.admin === 1">
      <el-menu-item index="/admin/create">
        <i class="el-icon-plus"></i>
        <span>Створити товар</span>
      </el-menu-item>
    </template>
    <template v-if="$auth.$state.user.admin === 1">
      <el-menu-item index="/admin/hoax">
        <i class="el-icon-trophy"></i>
        <span>розіграш</span>
      </el-menu-item>
    </template>
    <el-menu-item index="/ticket">
      <i class="el-icon-bank-card"></i>
      <span>Придбати квитки</span>
    </el-menu-item>

    <el-menu-item @click="logout">
      <i class="el-icon-switch-button"></i>
      <span>Вихід</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/auth/login");
    }
  }
};
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

