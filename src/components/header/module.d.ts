import Vue from 'vue';
export interface TitleProp {
  name: string;
  label: string;
}

export class XyHeader extends Vue {
  value: string | string[];

  isCancel: boolean;

  title: string | TitleProp[];
}