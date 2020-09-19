<template>
  <div :class="[prefixCls]">
      <span :class="[`${prefixCls}-back`]" @click="backClick">
        <span :class="[`${prefixCls}-cancel`]" v-if="isCancel">取消</span>
        <i :class="[`icon-back ${prefixCls}-icon`]" v-else></i>
      </span>
      <div :class="[`${prefixCls}-title`]">
        <span 
          v-for="title in titles" 
          :class="{ [`${prefixCls}-context`]: true, [`${prefixCls}-active`]: titles.length > 1 && value === title.name }" 
          :key="title.name" 
          @click="titleClick(title)"
        >{{title.label}}</span>
      </div>
      <div :class="[`${prefixCls}-options`]" v-if="showSlot">{{$slots.default}}</div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Model, Emit } from 'vue-property-decorator';
import { TitleProp } from './module';
import { AddInstall } from '../../utils/decorator';
const prefixCls = 'xy-header';
@AddInstall
@Component
export default class XyHeader extends Vue {
  @Model('change')
  readonly value!: string | string[];
  @Prop()
  isCancel?: boolean;
  @Prop()
  title!: string | TitleProp[];

  showSlot = false;

  get titles() {
    return typeof this.title === 'string' ? [{ label: this.title, name: this.title }] : this.title;
  }

  get prefixCls() {
    return prefixCls;
  }

  mounted() {
    this.showSlot = this.$slots.default !== undefined;
  }

  backClick() {
    if(!this.$router) { return; }
    this.$router.go(-1); 
  }

  @Emit('change')
  titleClick(name: string) {
    return name;
  }
}
</script>