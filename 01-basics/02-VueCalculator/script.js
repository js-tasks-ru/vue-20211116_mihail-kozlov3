import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
createApp({
    data() {
        return {
              firstVal: 0
            , secondVal: 0
            , operation: null
        };
    }

    , computed: {
        result() {
            switch (this.operation) {
                case "sum":
                    return this.firstVal + this.secondVal;
                break;
                case "subtract":
                    return this.firstVal - this.secondVal;
                break;
                case "multiply":
                    return this.firstVal * this.secondVal;
                break;
                case "divide":
                    return this.firstVal / this.secondVal;
                break;
            }

            return 0;
        }
    }

}).mount("#app");