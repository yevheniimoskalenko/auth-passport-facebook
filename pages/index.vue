<template>
  <el-card class="box-card">
    <el-form ref="form" :model="controls" class="form">
      <el-form-item label="email">
        <el-input v-model="controls.email"></el-input>
      </el-form-item>
      <el-form-item label="password">
        <el-input v-model="controls.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="login" type="primary" round>Войти</el-button>
        <a href="/auth/facebook">войти через facebook</a>
        <nuxt-link to="/create">Зарегистрироватся</nuxt-link>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      controls: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          try {
            const dataForm = {
              email: this.controls.email,
              password: this.controls.password
            };
            await this.$store.dispatch("register", dataForm);
          } catch (e) {
            console.log(e);
          }
        }
      });
    }
  }
};
</script>
<style>
.box-card {
  width: 500px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
}
</style>