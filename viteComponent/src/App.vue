<!--
 * @Author: linlongxian 641140305@qq.com
 * @Date: 2023-03-15 10:38:37
 * @LastEditors: linlongxian 641140305@qq.com
 * @LastEditTime: 2023-03-23 14:56:16
 * @FilePath: \test\vite_test01\practices\linlongxian\vite\vite02\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import Message from '../package/message';

const onClose = () => {
  console.log('记得删除dom');
};

const successDialog = () => {
  Message.info('success', undefined, '成功了！', 0, onClose, 5);
};
const errorDialog = () => {
  Message.info('error', undefined, '失败了！', undefined, onClose, 5);
};
const warningDialog = () => {
  Message.info('warning', undefined, '有错误了！', 9000, onClose, 5);
};
const infoDialog = () => {
  Message.info('info', undefined, '有消息了！', 9000, onClose, 10);
};
</script>

<template>
  <div class="button_div">
    <button class="button_confirm" @click="successDialog">Success</button>
    <button class="button_confirm" @click="errorDialog">Error</button>
    <button class="button_confirm" @click="warningDialog">Warning</button>
    <button class="button_confirm" @click="infoDialog">info</button>
  </div>
</template>

<style scoped>
.button_div {
  position: absolute;
  top: 50%;
  left: 20%;
}
.button_confirm {
  margin-left: 5px;
  width: 70px;
  height: 30px;
  font-size: 5px;

  white-space: nowrap;

  border-radius: 3px;
  border: 1px solid #a6a6a6;
  background-color: white;
}
</style>
