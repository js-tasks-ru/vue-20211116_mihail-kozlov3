import { defineComponent } from './vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
      required: true
    }
  },

  computed: {
    Title() {
      return this.agendaItem.title ?? agendaItemDefaultTitles[this.agendaItem.type];
    },
    MeetTime() {
      return `${this.agendaItem.startsAt} - ${this.agendaItem.endsAt}`;
    },
    IconSrc() {
      return `/assets/icons/icon-${agendaItemIcons[this.agendaItem.type]}.svg`;
    }
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="IconSrc" class="icon" :alt="agendaItem.type" />
      </div>
      <div class="agenda-item__col">{{ MeetTime }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ Title }}</h3>
        <p v-if="agendaItem.speaker" class="agenda-item__talk">
          <span>{{ agendaItem.speaker }}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
