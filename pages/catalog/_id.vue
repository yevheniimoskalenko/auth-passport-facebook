<template>
  <div>{{post}}</div>
</template>
<script>
export default {
  validate({ params }) {
    return Boolean(params.id);
  },
  async asyncData({ store, params }) {
    const catalog = await store.dispatch("catalog/fetchById", params.id);
    return { post: catalog.data };
  },
  layout: "panel",
  middleware: ["auth"]
};
</script>