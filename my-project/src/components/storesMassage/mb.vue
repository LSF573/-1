<template>
<!-- 蒙版 -->
  <div>
    <div class="elm-search header">
      <Input v-model="value" placeholder="搜索饿了么商家、商品名称" style="width: 300px" />
      <Button type="warning">搜索</Button>
    </div>
    <div class="sort">
      <div :class="{active:show==1}" @click="comRanking">综合排序<Icon type="ios-arrow-down"></Icon></div>
      <div :class="{active:show==2}" @click="distance">距离最近</div>
      <div :class="{active:show==3}" @click="quality">品质联盟</div>
      <div>筛选</div>
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>
