/**
 *@author Create by zhoulujun.cn on 1/4/1910:30 AM
 *@version 1.0.0
 */
import Vue from  'vue/dist/vue.common';//这是个坑 非：'vue'
import App from './App.vue';
new Vue({
   el:'#app',
   render:h=>h(App)
});