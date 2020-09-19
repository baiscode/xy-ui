<template>
  <component 
    :class="classes" 
    :is="tagName" 
    :disabled="disabled" 
    @click="handlerClick"
    v-bind="tagProps"
  >
    <slot name="default"></slot>
  </component>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { oneOf } from '../../utils/utils';
import { AddInstall } from '../../utils/decorator';
const prefixCls = 'xy-button';

@AddInstall
@Component
export default class XyButton extends Vue {
  @Prop({
    default: 'default',
    validator: function(value) {
      return oneOf<string>(value, ['default', 'success', 'warn', 'error']);
    }
  }) 
  type!: string

  @Prop({
    default: 'medium',
    validator: function(value) {
      return oneOf<string>(value, ['mini', 'small', 'medium', 'large']);
    }
  })
  size?: string

  @Prop({
    default: false
  })
  disabled?: boolean

  @Prop({
    default: false
  })
  ghost?: boolean

  @Prop({
    default: false
  })
  round?: boolean

  @Prop({
    default: 'button',
    validator: function(value) {
      return oneOf<string>(value, ['button', 'submit', 'reset'])
    }
  })
  htmlType?: string

  @Prop({
    default: undefined
  })
  to?: string

  showSlot = true;

  get classes() {
    return [
      `${prefixCls}`,
      `${prefixCls}-${this.size}`,
      {
        [`${prefixCls}-${this.type}`]: this.type,
        [`${prefixCls}-disabled`]: !!this.disabled,
        [`${prefixCls}-ghost`]: !!this.ghost,
        [`${prefixCls}-round`]: !!this.round
      }
    ]
  }

  get tagName() {
    const { to } = this;
    return !!to ? 'a' : 'button';
  }

  get tagProps() {
      const { to } = this;
      if(!!to) {
        return { href: to, ...this.$attrs };
      }else {
        return { type: this.htmlType };
      }
    }

  mounted () {
    this.showSlot = this.$slots.default !== undefined;
  }

  handlerClick(e: MouseEvent) {
    this.$emit('click', e);
  }
}
</script>
