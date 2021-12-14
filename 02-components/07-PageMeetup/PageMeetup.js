import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';

import MeetupView from "../06-MeetupView/MeetupView.js";

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      meetup: null,
      error: null,
      state: "loading" // "error", "loaded"
    };
  },

  watch: {
    meetupId: {
      immediate: true,
      handler(meetupId) {
        this.state = "loading";

        fetchMeetupById(meetupId)
          .then(response => {this.meetup = response; this.state = "loaded";})
          .catch(error => {this.error = error; this.state = "error"});
      }
    }
  },

  template: `
    <div class="page-meetup">
      <meetup-view v-if="state=='loaded'" :meetup="meetup" />

      <ui-container v-if="state=='loading'">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-if="state=='error'">
        <ui-alert>{{ error.message }}</ui-alert>
      </ui-container>
    </div>`,
});
