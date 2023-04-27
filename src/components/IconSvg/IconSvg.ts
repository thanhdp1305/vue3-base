import { defineComponent } from "vue";

export default defineComponent({
  name: "IconSvg",
  props: {
    icon: String,
  },
  setup() {
    const types = {
      toggleMenu: "toggleMenu",
    };

    return {
      types,
    };
  },
});
