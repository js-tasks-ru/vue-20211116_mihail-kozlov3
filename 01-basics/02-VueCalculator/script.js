import { createApp } from './vendor/vue.esm-browser.js';
//import { Vue } from './vendor/vue.esm-browser.js';

//Vue.config.devtools = true

// Создайте Vue приложение
const app = createApp({
    data() {
        return {
            firstVal: 0
            , secondVal: 0
            , result: 0
        };
    }
    , methods: {
        add() {
            this.result = this.firstVal + this.secondVal;
            console.log(this.firstVal, this.secondVal, this.result);
        }
        , sub() {
            this.result = this.firstVal - this.secondVal;
        }
        , mul() {
            this.result = this.firstVal * this.secondVal;
        }
        , div() {
            this.result = this.firstVal / this.secondVal;
        }
    }
}).mount("#app");