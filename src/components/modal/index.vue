<template>
  <div
    class="cdk-modal"
    :class="{ 'cdk-modal-show': visible }"
    :style="{ width: width }"
  >
    <div class="cdk-modal-header">
      <span>{{ title }}</span>
    </div>
    <div ref="content" class="cdk-modal-body">
      <slot name="content"></slot>
    </div>
    <div class="cdk-modal-footer">
      <button type="button">取消</button>
      <button type="button">确定</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, getCurrentInstance, render } from 'vue';

export default defineComponent({
  props: {
    header: {
      type: null,
    },
    footer: {
      type: null,
    },
    title: {
      type: Boolean,
      default: false,
    },
    content: {
      type: null,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: null,
    },
  },
  setup(props, vm) {
    const _this = getCurrentInstance()?.proxy;

    onMounted(() => {
      if (_this) {
        console.log(props.content, _this?.$refs.content);
        render(props.content, _this?.$refs.content as HTMLElement);
      }
    });
    return {};
  },
});
</script>
<style lang="scss">
.cdk-modal {
  width: 300px;
  border: 1px solid #ddd;
}
.cdk-modal-body {
  padding: 16px;
}
.cdk-modal-footer {
  padding: 10px 16px;
}
</style>
