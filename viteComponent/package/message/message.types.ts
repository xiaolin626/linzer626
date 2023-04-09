/*
 * @Author: linlongxian 641140305@qq.com
 * @Date: 2023-03-23 09:33:11
 * @LastEditors: linlongxian 641140305@qq.com
 * @LastEditTime: 2023-03-23 13:52:30
 * @FilePath: \practices\linlongxian\vite\vite02\package\message\message.types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//参数声明
export interface MessageOptions {
  type: string;
  id?: string;
  message?: string;
  duration?: number;
  onClose?: Function;
  maxCount?: number;
}
export type ImessageParams = MessageOptions | string;
