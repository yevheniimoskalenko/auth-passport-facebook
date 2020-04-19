<template>
  <div>
    <el-card v-infinite-scroll="load" infinite-scroll-disabled="disabled">
      <div class="card__img">
        <img :src="post.url_img" class="image" />
      </div>
      <div style="padding: 14px;">
        <span>{{post.title}}</span>
        <div class="bottom clearfix">
          <div>{{post.description}}</div>
        </div>
      </div>
      <div class="tikets">
        <el-row :gutter="24">
          <el-col :span="2" v-for="(ticket,index) in tickets" :key="index">
            <div class="ticket">
              <el-button @click="buy(ticket)" :disabled="ticket.isBuy">{{ticket.number_tikets}}</el-button>
            </div>
            <p v-if="loading">Loading...</p>
            <p v-if="noMore">No more</p>
          </el-col>
        </el-row>
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
    return { post: catalog[0], tickets: tickets.listTickets };
  },
  layout: "panel",
  middleware: ["auth"],
  head() {
    return {
      title: `${this.post.title}`
    };
  },
  data() {
    return {
      activeButton: [],
      loading: false
    };
  },
  computed: {
    noMore() {
      return this.count >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    addtiket(tiket) {
      this.activeButton.push(tiket);
    },
    load() {
      this.loading = true;
      console.log("1");
      this.loading = false;
    },
    async buy(val) {
      const Data = {
        ticket: val,
        id: this.$auth.user.id
      };
      try {
        await this.$store.dispatch("tiket/buyTiket", Data);

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
<style lang="scss" scoped>
.card__img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.image {
  width: 400px;
  background-size: cover;
}
.ticket {
  margin: 10px 0;
}
</style>