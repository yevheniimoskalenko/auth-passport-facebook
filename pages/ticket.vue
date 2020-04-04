<template>
  <div class="form-pay">
    <h2>Придбання квитків на сайті на сайті</h2>
    <el-form ref="form" :model="controls" class="form" :rules="rules">
      <el-form-item label="Кількість квитків" prop="amount">
        <span>
          <b>{{controls.amount}}</b>
          за {{controls.amount*15}} грн.
        </span>
        <el-input v-model.number="controls.amount" disabled></el-input>
        <el-slider v-model="controls.amount" :show-tooltip="false"></el-slider>
      </el-form-item>
      <el-form-item>
        <el-button @click="payButton" type="primary" round :loading="loading">Продовжити</el-button>
      </el-form-item>
    </el-form>
    <div v-html="liqpay"></div>
  </div>
</template>
<script>
export default {
  layout: "panel",
  middleware: ["auth"],
  head: {
    title: "Придбати квитки для розіграшу"
  },
  data() {
    return {
      loading: false,
      liqpay: "",
      showButton: false,
      controls: {
        amount: 2
      },
      rules: {
        amount: [
          {
            required: true
          }
        ]
      }
    };
  },
  methods: {
    async payButton() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true;
          const formData = {
            idUser: this.$auth.$state.user.id,
            amount: this.controls.amount,
            money: this.controls.amount * 15
          };
          try {
            await this.$store.dispatch("pay/payButton", formData);

            this.liqpay = this.$store.state.pay.form;
          } catch (e) {
            console.log(e);
          }
        }
        this.loading = false;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.form-pay {
  width: 600px;
}
</style>