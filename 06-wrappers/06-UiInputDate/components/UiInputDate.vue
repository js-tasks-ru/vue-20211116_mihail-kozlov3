<template>
  <ui-input ref="input-date" v-model="modelValueProxy" :type="type">
    <template v-for="slotName in Object.keys($slots)" #[slotName]>
      <slot :name="slotName" />
    </template>
  </ui-input>
</template>

<script>
import moment from 'moment';
import UiInput from './UiInput';

const DateTypes = ['date', 'time', 'datetime-local'];

export default {
  name: 'UiInputDate',

  components: { UiInput },

  props: {
    type: {
      type: String,
      default: 'date',
      validator: (val) => DateTypes.includes(val),
    },

    modelValue: {
      default: null,
    },
  },

  emits: ['update:modelValue'],

  computed: {
    modelValueProxy: {
      set(val) {
        const newVal = this.$refs['input-date'].$refs.input.valueAsNumber;
        this.$emit('update:modelValue', newVal);
      },
      get() {
        return moment(this.modelValue).utc().format(this.getDTFormat(this.type));
      },
    },
  },

  methods: {
    getDTFormat(FormatType) {
      switch (FormatType) {
        case 'datetime-local':
          return 'YYYY-MM-DDTHH:mm';
        case 'date':
          return 'YYYY-MM-DD';
      }

      const step = this.$attrs.step;
      if (step && +step % 60 !== 0) return 'HH:mm:ss';
      return 'HH:mm';
    },
  },
};
</script>
