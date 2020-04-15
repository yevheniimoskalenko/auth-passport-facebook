<template>
  <div>
    <el-card class="box-card" v-loading="loading">
      <el-form ref="pass" :model="controls" class="form" :rules="rules">
        <h3>Змінтити пароль</h3>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Старий пароль" prop="password">
              <el-input v-model="controls.password" type="password" placeholder show-password></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Новий пароль" prop="newpassword">
              <el-input v-model="controls.newpassword" type="password" placeholder show-password></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-button @click="editPass" type="primary" plain>Змінити пароль</el-button>
          </el-col>
        </el-row>
      </el-form>
      <el-form ref="form" :model="controls" class="form" :rules="rules">
        <h3>Змінити місце проживання</h3>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Відділ нової пошти" prop="address">
              <el-input v-model="controls.address" :placeholder="candidat.address"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Місто нової пошти" prop="address">
              <el-input v-model="controls.city" :placeholder="candidat.city"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <h3>Особисті данні:</h3>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Номер телефону" prop="phoneNumber">
              <el-input
                v-model="controls.phoneNumber"
                :placeholder="candidat.phoneNumber"
                v-mask="'(0##)-###-##-##'"
                type="tel"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Прізвище Ім`я по-батькові" prop="fullname">
              <el-input v-model="controls.fullname" :placeholder="candidat.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-button @click="editData" type="primary" plain>Змінити дані</el-button>
          </el-col>
        </el-row>
        <span>Коли ви були зареєстровані: {{$moment(candidat.date).format('YYYY-MM-DD HH:mm:ss')}}</span>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import { mask } from "vue-the-mask";
export default {
  head: {
    title: "Моя сторінка"
  },
  directives: { mask },
  layout: "panel",
  middleware: ["auth"],
  async asyncData({ store, $auth }) {
    const id = $auth.$state.user.id;
    const candidat = await store.dispatch("user/settings", id);
    return { candidat };
  },
  data() {
    return {
      loading: false,
      controls: {
        email: "",
        newpassword: "",
        password: "",
        address: "",
        city: "",
        phoneNumber: "",
        fullname: ""
      },
      rules: {
        email: [
          {
            type: "email",
            message: "Будь ласка ведіть коректно електройний адрес.",
            trigger: ["blur", "change"]
          }
        ],
        password: [
          {
            required: true,
            message: "пароль повине бути заповнений"
          },
          { min: 6, message: "Пароль повинен як мінімум складати 6 символів" }
        ],
        newpassword: [
          {
            required: true,
            message: "пароль повине бути заповнений"
          },
          { min: 6, message: "Пароль повинен як мінімум складати 6 символів" }
        ],
        phoneNumber: [
          {
            min: 15,
            message: "Номер телефону повинен складатися із 10-ти цифер"
          }
        ]
      }
    };
  },
  methods: {
    editPass() {
      this.$refs.pass.validate(async valid => {
        if (valid) {
          this.loading = true;
          const formData = {
            password: this.controls.password,
            newpassword: this.controls.newpassword,
            id_user: this.$auth.$state.user.id
          };
          try {
            await this.$store.dispatch("user/editPass", formData);
            this.$message.success("Пароль успішно був змінений!");
          } catch (e) {}
          this.loading = false;
        }
      });
    },
    editData() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true;
          const formData = {
            id_user: this.$auth.$state.user.id,
            address: this.controls.address,
            city: this.controls.city,
            phoneNumber: this.controls.phoneNumber,
            name: this.controls.fullname
          };

          try {
            await this.$store.dispatch("user/editData", formData);
            this.$message.success("Дані були змінені!");
            this.controls;
          } catch (e) {}
          this.loading = false;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>