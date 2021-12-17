<template>
  <div class="toasts">
    <ui-toast v-for="toast in toastList" :key="toast.id" :toast="toast" @close="closeToast" />
  </div>
</template>

<script>
import UiToast from './UiToast';

export default {
  name: 'TheToaster',

  components: { UiToast },

  toastId: 0,

  data() {
    return {
      toastList: [],
      message: null,
    };
  },

  methods: {
    error(message) {
      this.addToast(message, 'error', 5);
    },

    success(message) {
      this.addToast(message, 'success', 5);
    },

    addToast(message, type, lifeTime) {
      this.toastList.push({ id: `toast-${this.$options.toastId}`, message, type, lifeTime: lifeTime });
      this.$options.toastId++;
    },

    closeToast(id) {
      this.toastList = this.toastList.filter((toast) => toast.id !== id);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
