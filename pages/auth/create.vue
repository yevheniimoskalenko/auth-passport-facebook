<template>
  <el-card class="box-card">
    <el-form ref="form" :model="controls" class="form" :rules="rules">
      <h2>Зареєструватися на сайті</h2>
      <el-form-item label="Ваш email" prop="email">
        <el-input v-model="controls.email" placeholder="test@test.ua"></el-input>
      </el-form-item>
      <el-form-item label="Ваш пароль" prop="password">
        <el-input v-model="controls.password" type="password" show-password></el-input>
      </el-form-item>
      <el-form-item label="Ваше ПІП" prop="full_name">
        <el-input v-model="controls.full_name" placeholder="Іван Іванович Іванов"></el-input>
      </el-form-item>
      <el-form-item label="Місце проживання" prop="city">
        <el-input v-model="controls.city" placeholder="м. Харків"></el-input>
      </el-form-item>
      <el-form-item label="Номер відділу нової пошти" prop="adress">
        <el-input v-model.number="controls.adress" placeholder="3"></el-input>
      </el-form-item>

      <el-form-item label="Ваше номер телефону" prop="phoneNumber">
        <el-input
          v-model="controls.phoneNumber"
          placeholder="(050)-123-45-67"
          v-mask="'(0##)-###-##-##'"
          type="tel"
        ></el-input>
      </el-form-item>
      <el-form-item prop="success_rules">
        <el-checkbox label="Згоден(на) з" name="checkbox" v-model="controls.success_rules"></el-checkbox>
        <el-button type="text" @click="dialogRules = true">правилами</el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="login" type="primary" round :loading="loading">Зареєструватися</el-button>
        <nuxt-link to="/auth/login">Увійти</nuxt-link>
      </el-form-item>
      <el-dialog title="Правила сайту" :visible.sync="dialogRules">
        <div class="dialog">
          <ol>
            <li>Всі користувачі сайту повіні прийняти зходу цих правил.</li>
            <li></li>
          </ol>
        </div>
      </el-dialog>
    </el-form>
  </el-card>
</template>
<script>
import { mask } from "vue-the-mask";
export default {
  middleware: ["user"],
  auth: false,
  directives: { mask },
  head: {
    title: "Зареєструватися на сайті"
  },
  data() {
    return {
      dialogRules: false,
      loading: false,
      controls: {
        email: "",
        password: "",
        full_name: "",
        success_rules: [],
        phoneNumber: "",
        adress: "",
        city: ""
      },
      rules: {
        email: [
          {
            required: true,
            message: "Ведіть будь ласка електройти адрес.",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Будь ласка ведіть коректно електройний адрес.",
            trigger: ["blur", "change"]
          }
        ],
        password: [
          {
            required: true,
            message: "Ведіть будь ласка пароль.",
            trigger: "blur"
          },
          {
            min: 6,
            message: "Будь ласка пароль повинен містити як мінумум 6 символів",
            trigger: "blur"
          }
        ],
        full_name: [
          {
            required: true,
            message: "Ведіть будь ласка Ваше Прізвище Ім`я по-батькові",
            trigger: "blur"
          }
        ],
        adress: [
          {
            required: true,
            message: "Ведіть будь ласка номер відділу",
            trigger: "blur"
          },
          { type: "number", message: "age must be a number", trigger: "blur" }
        ],
        city: [
          {
            required: true,
            message: "Ведіть будь ласка номер міста відділу нової пошти",
            trigger: "blur"
          }
        ],
        phoneNumber: [
          {
            required: true,
            message: "Ведіть будь ласка Ваший номере телефону",
            trigger: "blur"
          }
        ],
        success_rules: [
          {
            type: "array",
            required: true,
            message: "Підтвердіть флажком, що ви згодні з правилами",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    login() {
      this.$refs.form.validate(async valid => {
        this.loading = true;
        if (valid) {
          const dataForm = {
            email: this.controls.email,
            password: this.controls.password,
            name: this.controls.full_name,
            adress: this.controls.adress,
            phoneNumber: this.controls.phoneNumber,
            city: this.controls.city
          };
          try {
            await this.$store.dispatch("Auth/createUser", dataForm);
            this.$message.success("Ви успішно зареєстровані!");
            this.$router.push("/auth/login");
          } catch (e) {}
        } else {
          this.$message.warning("Форма заповнена не вірно!");
        }
        this.loading = false;
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
.box-card h2 {
  text-align: center;
}
</style>