<template>
  <div>
    <app-catalog v-for="catalog in catalogs" :key="catalog.id" :catalog="catalog" />
  </div>
</template>
<script>
import AppCatalog from "@/components/main/Catalog";
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