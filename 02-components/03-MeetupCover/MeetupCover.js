import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
  },

  computed: {
    ImageUrl() {
      return `url(${this.image})`;
    },
  },

  template: `
    <div class="meetup-cover" :style="image && {'--bg-url': ImageUrl}">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
