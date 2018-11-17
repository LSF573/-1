<template>
<!-- 店家详情 -->
  <div>
    <div class="head">
        
    </div>
    <div>
        {{$route.params.id}}
      <h3>{{$route.params.title}}</h3>  
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .head{
        height:110px;
        background-image: url("//fuss10.elemecdn.com/4/ea/3ba6162582331123e0b6cee35c9b8png.png?imageMogr/format/webp/thumbnail/750x/");
    }
</style>
