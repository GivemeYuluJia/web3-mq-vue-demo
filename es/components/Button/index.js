import { openBlock, createElementBlock } from 'vue';
import { withInstall } from '../../utils.js';

var script = {
    name: 'Button',
    methods: {
        handleClick: function (ev) {
            console.log(ev);
        }
    }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", {
    onClick: _cache[0] || (_cache[0] = (...args) => ($options.handleClick && $options.handleClick(...args)))
  }, "点击吧"))
}

script.render = render;
script.__file = "src/components/Button/Button.vue";

var index = withInstall(script);

export { index as default };
//# sourceMappingURL=index.js.map
