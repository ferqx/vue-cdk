import { h, render } from 'vue';
import ModalComponent from './index.vue';

interface ModalProps {
  header: any;
  footer: any;
  title: any;
  content: any;
  visible: Boolean;
  width: String;
}

const container = document.body;

export async function Modal() {}

Modal.create = (props: ModalProps) => {
  const vNode = h(ModalComponent as any, props);
  render(vNode, container);
};
Modal.closed = (value: any) => {
  return Promise.all(value);
};
