<template>
  <button @click="inc">{{ innerCounter }}</button>
</template>

<script>
export default {
  name: 'CounterButton',
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:count'],
  data() {
    return {
      innerCounter: this.count,
    };
  },
  watch: {
    count(val) {
      this.innerCounter = val;
    },
  },
  methods: {
    inc() {
      this.$emit('update:count', ++this.innerCounter);
    },
  },
};
</script>
