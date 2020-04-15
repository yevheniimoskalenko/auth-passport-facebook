<template>
  <div>
    Учасик з квитками:
    <div v-for="(ticket,index) in tickets" :key="index">
      <nuxt-link :to="`/catalog/${ticket.id_catalog}`">{{ticket.number_tikets}}</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  layout: "panel",
  middleware: ["auth"],
  async asyncData({ store, $auth }) {
    const id = $auth.$state.user.id;
    const tickets = await store.dispatch("user/mygemes", id);
    return { tickets: tickets };
  }
};
</script>
<style lang="scss" scoped>
</style>