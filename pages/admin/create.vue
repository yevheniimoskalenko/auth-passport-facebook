<template>
  <div>
    <el-form :model="controls" ref="form" :rules="rules">
      <el-form-item label="title" prop="title">
        <el-input v-model="controls.title" />
      </el-form-item>
      <el-form-item label="description" prop="description">
        <el-input type="textarea" class="text-real" v-model="controls.description" />
      </el-form-item>
      <el-form-item label="img src" prop="img">
        <el-input v-model="controls.img" />
      </el-form-item>
      <el-form-item label="amount" prop="amount">
        <el-input v-model="controls.amount" />
      </el-form-item>
      <el-button @click="create">SEND</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  layout: "panel",
  middleware: ["auth"],
  head: {
    title: "Створення товару"
  },
  data() {
    return {
      controls: {
        title: "",
        description: "",
        amount: "",
        img: ""
      },
      rules: {
        title: [{ required: true }],
        description: [{ required: true }],
        amount: [
          { required: true }
          //   { type: "number", message: "age must be a number" }
        ],
        img: [{ required: true }]
      }
    };
  },
  methods: {
    create() {
      this.$refs.form.validate(async valid => {
        const formData = {
          title: this.controls.title,
          description: this.controls.description,
          amount: this.controls.amount,
          img: this.controls.img
        };
        if (valid) {
          await this.$store.dispatch("admin/createCatalog", formData);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>