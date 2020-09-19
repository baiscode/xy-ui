export interface ConfirmProps {
  onlyOk?: boolean;
  image?: string | undefined;
  title?: string;
  template: string;
  okText?: string;
  cancelText?: string;
  ok: () => any;
  cancel: () => any;
}