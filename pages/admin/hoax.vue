<template>
  <div>
    <ul>
      <li v-for="(catalog,index) in catalogs" :key="index">
        <nuxt-link
          :to="{ name: 'admin-list-id', params: { id: `${catalog._id}` } }"
        >{{ catalog.title}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  layout: "panel",
  middleware: ["auth", "admin"],
  async asyncData({ store }) {
    const catalogs = await store.dispatch("catalog/fetch");
    return { catalogs };
  }
};
</script>