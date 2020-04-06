<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="catalog in catalogs" :key="catalog._id">
        <app-catalog :catalog="catalog" />
      </el-col>
    </el-row>
    <!--  -->
  </div>
</template>
<script>
import AppCatalog from "@/components/main/catalog";
export default {
  components: {
    AppCatalog
  },
  async asyncData({ store }) {
    const catalogs = await store.dispatch("catalog/fetch");
    return { catalogs };
  },
  layout: "panel",
  middleware: ["auth"],
  head: {
    title: "Каталог товарів на розіграш"
  }
};
</script>
<style lang="scss" scoped>
</style>