(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["web3-mq-vue"] = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  var script = {
      name: 'Button',
      methods: {
          handleClick: function (ev) {
              console.log(ev);
          }
      }
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => ($options.handleClick && $options.handleClick(...args)))
    }, "点击吧"))
  }

  script.render = render;
  script.__file = "src/components/Button/Button.vue";

  var withInstall = function withInstall(comp) {
    var c = comp;

    c.install = function (app) {
      app.component(c.displayName || c.name, comp);
    };

    return comp;
  };

  var index$1 = withInstall(script);

  var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Button: index$1
  });

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

  exports.Button = index$1;
  exports["default"] = index;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
