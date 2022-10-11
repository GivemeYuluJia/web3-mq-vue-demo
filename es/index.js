import { c as components } from './_chunks/dep-38b00dfb.mjs';
export { default as Button } from './components/Button/index.js';
import './components/Button/Button.js';
import 'vue';
import './utils.js';

var install = function install(app) {
  Object.keys(components).forEach(function (key) {
    var component = components[key];

    if (component.install) {
      app.use(component);
    }
  });
  return app;
};
var index = {
  install: install
};

export { index as default, install };
//# sourceMappingURL=index.js.map
