import { VueConstructor } from 'vue';
import { limit } from 'string-utils';

/**
 * String Limit Utils
 *
 * @author surh
 */
export default class StringLimitPlugin {
  public static install(Vue: VueConstructor) {
    Vue.filter('string-limit', limit);
    Vue.prototype.$stringLimit = limit;
    (window as any).$stringLimit = limit;
  }
}
