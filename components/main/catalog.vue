<template>
  <el-col :span="12">
    <el-card class="catalog" shadow="hover">
      <header>
        <h3>{{catalog.title}}</h3>
      </header>
      <div class="catalog_image">
        <img :src="catalog.url_img" class="catalog_img" />
      </div>
      {{catalog.description | description}}
      <el-button round @click="openPost">Открыть</el-button>
      <footer>{{catalog.amount}}</footer>
    </el-card>
  </el-col>
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
  filters: {
    description(val) {
      return val.substring(0, 100);
    }
  },
  methods: {
    openPost() {
      const id = this.catalog._id;
      this.$router.push({
        name: "catalog-id",
        params: { id: id },
        query: { page: 1 }
      });
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