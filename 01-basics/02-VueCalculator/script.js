import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
createApp({
    data() {
        return {
              firstVal: 0
            , secondVal: 0
            , operation: null
            , result : 0
        };
    }

    , methods: { 
        updateResult() {
            switch (this.operation) {
                case "sum":
                    this.result =  this.firstVal + this.secondVal;
                break;
                case "subtract":
                    this.result =  this.firstVal - this.secondVal;
                break;
                case "multiply":
                    this.result =  this.firstVal * this.secondVal;
                break;
                case "divide":
                    this.result =  this.firstVal / this.secondVal;
                break;
            }
        }
    }

    , watch: {
        operation() {
            this.updateResult();
        }
        , firstVal() {
            this.updateResult();
        }
        , secondVal() {
            this.updateResult();
        }
    }
}).mount("#app");