<template>
  <xy-mask></xy-mask>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ConfirmProps } from './module';
import XyMask from '../mask';

@Component({
  components: {
    XyMask
  }
})
export default class XyConfirm extends Vue {
  confirmVis = false;
  opts: ConfirmProps= {
    onlyOk: true,
    image: undefined,
    title: '',
    template: '',
    okText: '',
    cancelText: '',
    ok: () => {},
    cancel: () => {}
  }

  get prefixCls() {
    return 'xy-confirm';
  }


  open(opts: ConfirmProps) {
    this.opts = opts;
    this.confirmVis = true;
  }

  close() {
    this.confirmVis = false;
  }

  cancelClick() {
    if(typeof this.opts.cancel !== 'function') {
      return;
    }
    this.opts.cancel();
  }

  okClick() {
    if(typeof this.opts.ok !== 'function') {
      return;
    }
    this.opts.ok();
  }

}
</script>