import { h, render } from 'vue';
import ModalComponent from './index.vue';

interface ModalProps {
  header?: any;
  footer?: any;
  title: String;
  content: any;
  width?: String;
  params?: {
    [key: string]: any;
  };
}

const container = document.body;

export async function Modal() {}

Modal.create = (props: ModalProps) => {
  const { content } = props;

  if (!props || !content) {
    return;
  }

  const vNode = h(ModalComponent as any, props, {
    content: h(content, props.params),
  });

  render(vNode, container);
};

Modal.closed = (value: any) => {
  return Promise.all(value);
};
