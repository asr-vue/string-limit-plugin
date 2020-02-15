import { limit } from 'string-utils';
/**
 * String Limit Utils
 *
 * @author surh
 */
export default class StringLimitPlugin {
    static install(Vue) {
        Vue.filter('string-limit', limit);
        Vue.prototype.$stringLimit = limit;
        window.$stringLimit = limit;
    }
}
//# sourceMappingURL=string-limit-plugin.js.map