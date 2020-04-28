<template>
  <div>
    <el-row :gutter="20">
      <app-catalog v-for="catalog in catalogs" :key="catalog.id" :catalog="catalog" />
    </el-row>
  </div>
</template>
<script>
import AppCatalog from "@/components/main/catalog";
export default {
  layout: "panel",
  middleware: ["auth"],
  components: {
    AppCatalog
  },
  async asyncData({ store }) {
    const catalogs = await store.dispatch("catalog/fetch");
    return { catalogs };
  }
};
</script>