/*
 * @Author: linlongxian 641140305@qq.com
 * @Date: 2023-03-15 10:41:09
 * @LastEditors: linlongxian 641140305@qq.com
 * @LastEditTime: 2023-03-23 14:42:12
 * @FilePath: \practices\linlongxian\vite\vite02\package\message\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//方法二
import MessageDialog from '../message/MessageDialog.vue';
import { h, render } from 'vue';
import { ImessageParams } from './message.types';
const Message = (options: ImessageParams) => {
  //ts类型保护
  if (typeof options == 'string') {
    options = {
      type: options
    };
  }
  //如果没有传入则是默认3秒
  if (options.duration == undefined) {
    options.duration = 3000;
  }
  if (options.maxCount == undefined) {
    options.maxCount = 5;
  }

  //监测是否为0，非零情况这是需要删除dom的
  if (options.duration == 0) {
    const container = document.createElement('div');

    const vm = h(MessageDialog, options);

    container.setAttribute('class', 'message');
    render(vm, container);

    document.body.appendChild(container.firstElementChild!);

    if (document.querySelectorAll('.message').length > options.maxCount) {
      render(null, container);
    }
  } else {
    const container = document.createElement('div');

    //创建一个vdom，组件的内容为messagevue的内容，参数值则为我们人为传入的值
    const vm = h(MessageDialog, options);
    container.setAttribute('class', 'message');
    render(vm, container);

    //在前节点基础上增加新节点
    document.body.appendChild(container.firstElementChild!);

    //js 获取css选择器是classname为message的元素长度
    if (document.querySelectorAll('.message').length > options.maxCount) {
      render(null, container);
    }
    //建立定时器将null对象传给内容器抵消原本dom内容
    setTimeout(() => {
      render(null, container);
    }, options.duration);
  }
};

// 方法一
// export default function Message(
//   type: 'success' | 'error' | 'warning',
//   msg: string,
//   directive: number = 3000,
//   onClose?: Function
// ) {
//   if (directive == 0) {
//     const container = document.createElement('div');
//     container.setAttribute('class', 'message');
//     const vNode = h(MessageDialog, { type, msg, directive, onClose });

//     render(vNode, container);
//     document.body.appendChild(container.firstElementChild!);
//   } else {
//     const container = document.createElement('div');
//     container.setAttribute('class', 'message');
//     const vNode = h(MessageDialog, { type, msg, directive, onClose });
//     render(vNode, container);
//     document.body.appendChild(container.firstElementChild!);
//     setTimeout(() => {
//       render(null, container);
//     }, directive);
//   }
// }

Message.info = function (
  type: string,
  id?: string,
  message?: string,
  duration?: number,
  onClose?: Function,
  maxCount?: number
) {
  Message({ type, id, message, duration, onClose, maxCount });
};

export default Message;
