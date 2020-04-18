<template>
  <div>
    <!-- <div class="roulette">
      <span class="roulette_item" v-for="ticket in tickets" :key="ticket._id">
        <div class="roulette__user">{{ticket.number_tikets}}</div>
      </span>
    </div>-->
    <div class="panel">
      <div class="panel_start">
        <div class="winner">
          <el-card
            :body-style="{padding: '0px'}"
            v-if="winner != null"
            class="card"
            v-loading="loading"
          >
            <div class="NumberWinner">
              <h2>{{winner.numberWinner}}</h2>
            </div>
            <div class="name">
              <span>{{winner.name}}</span>
            </div>
            <div class="idUser">
              <span>{{winner.idWinner}}</span>
            </div>
          </el-card>
        </div>
        <div class="boom">
          <el-button @click="go" type="primary" round>Розпочати</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  layout: "panel",
  middleware: ["auth", "admin"],
  async asyncData({ store, params }) {
    const tickets = await store.dispatch("catalog/fetchTikets", params.id);
    return { tickets: tickets.listTickets };
  },
  data() {
    return {
      animated: false,
      ticketd: 0,
      winner: { numberWinner: 0, name: "", idWinner: "" },
      loading: false
    };
  },
  computed: {
    lengths() {
      return this.tickets.length;
    }
  },

  methods: {
    async go() {
      this.loading = true;
      const Formdata = {
        count: this.tickets.length,
        id: this.$route.params.id
      };
      try {
        const winner = await this.$store.dispatch("admin/roulette", Formdata);
        this.winner = winner;
      } catch (e) {}
      this.loading = false;
    }
  }
};
</script>
<style scoped>
.boom {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.NumberWinner {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.NumberWinner h2 {
  font-size: 62px;
  font-weight: 300;
}
.name {
  display: flex;
  justify-content: center;
}
.name span {
  font-size: 24px;
}
.idUser {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.panel {
  width: 100%;
  display: flex;
  justify-content: center;
}
.panel_start {
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card {
  padding-bottom: 40px;
}
.list {
  display: flex;
}
.roulette {
  height: 150px;
  display: flex;
  flex-direction: row;
  border: 1px solid #000;
  /* overflow: hidden; */
}
.roulette_item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0px 10px;
  position: relative;
}
.roulette__user {
  font-size: 36px;
  height: 150px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ccc;
  border-radius: 50%;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

@keyframes bounce-in {
  50% {
    left: 0;
    animation-timing-function: ease-in;
  }
  100% {
    left: 100%;
    animation-timing-function: ease-out;
  }
}
</style>