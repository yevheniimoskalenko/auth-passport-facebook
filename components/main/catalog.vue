<template>
  <el-card class="catalog__item" shadow="hover">
    <div @click="openPage">
      <div class="catalog__title">
        <h2>AirPods</h2>
        <div class="catalog__small">с беспроводным зарядным футляром</div>
        <div class="catalog__image">
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MRXJ2?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551489675083"
            class="ct_img"
          />
        </div>
        <div class="catalog__descriptin">
          Больше магии.
          AirPods в беспроводном зарядном футляре полностью изменят ваше представление об использовании беспроводных наушников. Достаньте их из футляра — и они уже готовы к работе с iPhone, Apple Watch, iPad или Mac.
          AirPods настраиваются в одно касание и буквально творят чудеса. Они сразу готовы к работе и мгновенно подключаются к вашим устройствам. Наушники оснащены специальными сенсорами, поэтому воспроизведение автоматически приостанавливается, когда вы их снимаете.
        </div>
        <div class="footer clearfix">
          <span>вільних місць 30 із 400</span>
        </div>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  layout: "panel",
  middleware: ["auth"]
};
</script>
<style lang="scss" scoped>
</style>