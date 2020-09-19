import { XyUIComponent } from '../component';
export class XyButtonProps extends XyUIComponent {
  /** 类型 */
  type?: 'default' | 'success' | 'warn' | 'success';

  /** 大小 */
  size?: 'mini' | 'small' | 'medium' | 'large';

  /** 是否是禁用状态 */
  disabled?: boolean;

  /** 是否是幽灵按钮 */
  ghost?: boolean;

  /** 是否是圆角 */
  round?: boolean;

  /** html相关标签 */
  htmlType?: 'default' | 'submit' | 'reset';

  /** 跳转链接 */
  to?: string
}