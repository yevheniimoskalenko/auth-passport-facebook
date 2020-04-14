<template>
  <div>
    <el-card>
      <img :src="post.url_img" class="image" />
      <div style="padding: 14px;">
        <span>{{post.title}}</span>
        <div class="bottom clearfix">
          <div>{{post.description}}</div>
        </div>
      </div>
      <div class="tikets">
        <el-button
          type="primary"
          v-for="index in post.amount"
          @click="addtiket(index)"
          :key="index"
        >{{index}}</el-button>
        <el-input v-model="activeButton" type="text" disabled></el-input>
        <el-button @click="buy">Придбати</el-button>
        <el-button @click="reset">Відмінити</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  validate({ params }) {
    return Boolean(params.id);
  },
  async asyncData({ store, params }) {
    const catalog = await store.dispatch("catalog/fetchById", params.id);
    const tickets = await store.dispatch("catalog/fetchTikets", params.id);
    return { post: catalog[0], ticket: tickets.listTickets };
  },
  layout: "panel",
  middleware: ["auth"],
  head: {
    // title: `${this.catalog.title}`
  },

  data() {
    return {
      activeButton: []
    };
  },
  methods: {
    addtiket(tiket) {
      this.activeButton.push(tiket);
    },
    async buy() {
      const Data = {
        tikets: this.activeButton,
        id_catalog: this.$route.params.id,
        id: this.$auth.user.id
      };
      try {
        await this.$store.dispatch("tiket/buyTiket", Data);
        this.$message.success("Ви успішно придбали!");
        this.activeButton = [];
      } catch (e) {
        console.log(e);
      }
    },
    reset() {
      this.activeButton = [];
    }
  }
};
</script>
<style lang="sass" scoped>
.tikets 
  display: flex;
  flex: row;
  flex-wrap: wrap;
  .tiket
    padding: 10px;
    border: 1px solid #ccc;
    margin: 5px;
    border-radius: 5px;
    &:hover
      color: yellow;
      cursor: pointer;

</style>