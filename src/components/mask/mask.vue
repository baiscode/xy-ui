<template>
  <transition name="mask"></transition>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { oneOf } from '../../utils/utils';
const prefixCls = 'xy-mask';
@Component
export default class XyMask extends Vue {
  @Prop({
    default: 'default',
    validator: (value) => {
      return oneOf<string>(value, ['default', 'transparent'])
    }
  })
  type?: string;

  get prefixCls() {
    return prefixCls;
  }
}
</script>