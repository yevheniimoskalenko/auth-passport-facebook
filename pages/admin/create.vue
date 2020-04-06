<template>
  <div class="form-create">
    <el-form :model="controls" ref="form" :rules="rules">
      <el-form-item label="Назва товару" prop="title">
        <el-input v-model="controls.title" />
      </el-form-item>
      <el-form-item label="Опис" prop="description">
        <el-input type="textarea" class="text-real" v-model="controls.description" :rows="5" />
      </el-form-item>
      <el-form-item label="Посилання на зображення" prop="img">
        <el-input v-model="controls.img" />
      </el-form-item>
      <el-form-item label="кількість учасників у розіграші" prop="amount">
        <el-input v-model="controls.amount" />
      </el-form-item>
      <el-button @click="create" :loading="loading" round type="primary">Створити</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  layout: "panel",
  middleware: ["admin", "auth"],
  head: {
    title: "Створення товару"
  },
  data() {
    return {
      loading: false,
      controls: {
        title: "",
        description: "",
        amount: "",
        img: ""
      },
      rules: {
        title: [
          { required: true, message: "Назва товару повина бути заповнена" }
        ],
        description: [
          { required: true, message: "Опис повина бути заповнена" }
        ],
        amount: [
          {
            required: true,
            message: "Кількість учасників повино бути заповнено обов`язково"
          }
        ],
        img: [
          {
            required: true,
            message: "Посилання на зображення повино бути вказане на сайт"
          }
        ]
      }
    };
  },
  methods: {
    create() {
      this.$refs.form.validate(async valid => {
        this.loading = true;
        const formData = {
          title: this.controls.title,
          description: this.controls.description,
          amount: this.controls.amount,
          img: this.controls.img
        };
        if (valid) {
          try {
            await this.$store.dispatch("admin/createCatalog", formData);
            this.$message.success("Ви успішно створили товар для розіграшу!");
          } catch (e) {
            this.$message.warning("Форма заповнена не вірно!");
          }
        }
      });
      this.loading = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.form-create {
  width: 600px;
}
</style>