<template>
  <el-card class="box-card">
    <el-form ref="form" :model="controls" class="form" :rules="rules">
      <h2>Увійти в свій профіль</h2>
      <el-form-item label="Електроний адрес" prop="email">
        <el-input v-model="controls.email"></el-input>
      </el-form-item>
      <el-form-item label="Пароль" prop="password" class="mb">
        <el-input v-model="controls.password" type="password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="login" type="primary" round :loading="loading">Увійти</el-button>
        <nuxt-link to="/auth/create">Створити профіль</nuxt-link>
        <!-- <el-button @click="fb">fb</el-button> -->
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
export default {
  auth: false,
  head: {
    title: "Вхід на сайт"
  },
  data() {
    return {
      loading: false,
      controls: {
        email: "",
        password: ""
      },
      rules: {
        email: [
          {
            required: true,
            message: "Електроний адрес не повинен бути пустим."
          }
        ],
        password: [
          {
            required: true,
            message: "Пароль не повинен бути пустим."
          }
        ]
      }
    };
  },
  methods: {
    // fb() {
    //   this.$auth.loginWith("facebook");
    // },
    login() {
      this.$refs.form.validate(async valid => {
        this.loading = true;
        if (valid) {
          try {
            const dataForm = {
              email: this.controls.email,
              password: this.controls.password
            };
            let response = await this.$auth.loginWith("local", {
              data: dataForm
            });
            this.$router.push("/profile");
          } catch (e) {
            console.log(e);
          }
        }
      });
      this.loading = false;
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