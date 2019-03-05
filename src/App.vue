<template>
    <div>
        <div>testHello</div>
        <div class="demo" ref="demo"></div>

    </div>
</template>

<script>

    export default {
        name: 'App',
        mounted(){
          this.$ref.demo.clientWidth;//获取的是父节点宽度
          this.$ref.demo.clientHeight;//值为0

          this.$nextTick(()=>{
            this.$ref.demo.clientWidth;//获取的是父节点宽度
            this.$ref.demo.clientHeight;//值为0
          });
          setTimeout(()=>{//可以获取正确值
            this.$ref.demo.clientWidth;
            this.$ref.demo.clientHeight;
          })
        }
    };
</script>

<style lang="less">
    /*@import "style/index.scss";*/
</style>
