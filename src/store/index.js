import Vue from "vue";
import Vuex from "vuex";
import BubbleAndImmersChart from "./modules/BubbleAndImmersChart"
import DigitalTwin from './modules/DigitalTwin'
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    BubbleAndImmersChart,
    DigitalTwin
  }
});