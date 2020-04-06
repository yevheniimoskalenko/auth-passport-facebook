<template>
  <el-menu router :style="{height: '100%'}" :default-active="$route.path">
    <el-menu-item index="/profile">
      <i class="el-icon-user"></i>
      <span>Профіль</span>
    </el-menu-item>
    <el-menu-item index="/catalog">
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
  methods: {
    async logout() {
      await this.$auth.logout();
    }
  }
};
</script>

