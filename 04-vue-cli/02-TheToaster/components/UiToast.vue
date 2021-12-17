<template>
  <div class="toast" :class="toastClass">
    <ui-icon class="toast__icon" :icon="toastIcon" />
    <span>{{ toast.message }}</span>
  </div>
</template>

<script>
import UiIcon from './UiIcon';

export default {
  name: 'UiToast',

  components: { UiIcon },

  toastTypes: {
    success: {
      class: 'toast_success',
      icon: 'check-circle',
    },
    error: {
      class: 'toast_error',
      icon: 'alert-circle',
    },
  },

  props: {
    toast: {
      type: Object,
      default: () => {
        return {
          id: 'def',
          message: 'success',
          type: 'success',
          lifeTime: 5,
        };
      },
    },
  },

  emits: ['close'],

  computed: {
    toastClass() {
      return this.$options.toastTypes[this.toast.type].class;
    },
    toastIcon() {
      return this.$options.toastTypes[this.toast.type].icon;
    },
  },

  created() {
    setTimeout(() => {
      this.$emit('close', this.toast.id);
    }, this.toast.lifeTime * 1000);
  },
};
</script>

<style scoped>
.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
