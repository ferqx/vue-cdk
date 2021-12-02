<template>
  <button @click="openDialog">打开对话框</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Modal } from './components/modal';
import Demo from './demo/index.vue';

export default defineComponent({
  setup() {
    const openDialog = () => {};

    Modal.create({
      title: '对话框',
      content: Demo
    })

    return { openDialog  };
  },
});
</script>
