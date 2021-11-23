import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
createApp({
    data() {
        return {
            counter: 0
        };
    }
    , computed: {
        getCounter() {
            return this.counter;
        }
    }
    , methods: {
        incCounter() {
            this.counter++;
        }
    }
}).mount("#app");
