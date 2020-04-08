<template>
  <el-card class="catalog" shadow="hover">
    <header>
      <h3>{{catalog.title}}</h3>
    </header>
    <div class="catalog_image">
      <img :src="catalog.url_img" class="catalog_img" />
    </div>
    {{catalog.description}}
    <el-button round @click="openPost">Открыть</el-button>
    <footer>{{catalog.amount}}</footer>
  </el-card>
</template>
<script>
export default {
  layout: "panel",
  middleware: ["auth"],
  props: {
    catalog: {
      type: Object,
      required: true
    }
  },
  methods: {
    openPost() {
      const id = this.catalog._id;
      this.$router.push(`/catalog/${id}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.catalog {
  cursor: pointer;
  margin: 10px;
}
.catalog_img {
  width: 100%;
  display: block;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>