<!--
 * @Author: linlongxian 641140305@qq.com
 * @Date: 2023-03-15 10:40:21
 * @LastEditors: linlongxian 641140305@qq.com
 * @LastEditTime: 2023-03-23 14:57:41
 * @FilePath: \test\vite_test01\practices\linlongxian\vite\vite02\src\components\MessageDialog.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <Transition name="down" appear @before-leave="onClose">
    <div class="message" :style="style[type]" v-if="visible" @click="close">
      <span class="text">{{ message }}</span>
    </div>
  </Transition>
</template>
//TODO 记得把msg类型加上
<script lang="ts" setup name="MessageDialog">
import { ref, onMounted } from 'vue';

const props = defineProps<{
  type: string;
  id?: string;
  message?: string;
  duration?: number;
  onClose?: Function;
  maxCount?: number;
}>();

const close = () => {
  visible.value = false;
  console.log('手动关闭');
};
onMounted(() => {
  visible.value = true;
  if (props.duration != 0) {
    setTimeout(() => {
      visible.value = false;
    }, props.duration);
  }
});
const style = {
  warning: {
    top: '20px',
    color: '#E6A23C'
  },
  error: {
    top: '20px',
    color: '#F56C6C'
  },
  success: {
    top: '20px',
    color: '#67C23A'
  },
  info: {
    top: '20px',
    color: '#F8DF72'
  }
};

// 组件状态
const visible = ref<boolean>(true);
// 组件接收的参数
</script>
<style scoped lang="less">
.message {
  width: 300px;
  height: 50px;
  position: relative;
  z-index: 9999;
  left: 50%;
  margin-left: -150px;
  margin-top: 20px;
  line-height: 50px;
  padding: 0 25px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;
  i {
    margin-right: 4px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
  .close {
    color: black;
    position: absolute;
    right: 20px;
  }
}

.down-enter-from {
  transform: translateY(-70px);
  opacity: 0;
}

.down-enter-to {
  transform: translateY(0px);
}
.down-enter-active,
.down-leave-active {
  transition: all 1s;
}
.down-leave-from {
  transform: translateY(0px);
  opacity: 1;
}
.down-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
</style>
