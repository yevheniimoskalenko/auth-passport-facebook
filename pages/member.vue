<template>
  <div>
    Учасик з квитками:
    <el-table :data="tickets" style="width: 100%">
      <el-table-column prop="number_tikets" label="Номер квитка" width="180"></el-table-column>
      <el-table-column prop="id_catalog.title" label="Назва товару">
        <template slot-scope="scope">
          <nuxt-link
            :to="{ name: 'catalog-id', params: { id: `${scope.row.id_catalog._id}` } }"
          >{{scope.row.id_catalog.title}}</nuxt-link>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="Час" width="250"></el-table-column>
    </el-table>
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