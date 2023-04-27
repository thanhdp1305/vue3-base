import { defineComponent, onMounted } from "vue";
import ConsoleHeader from "./ConsoleHeader/ConsoleHeader.vue";
import ConsoleSidebar from "./ConsoleSidebar/ConsoleSidebar.vue";

export default defineComponent({
  name: "ConsoleLayout",
  components: {
    ConsoleHeader,
    ConsoleSidebar,
  },
  ref: {
    consoleHeader: ConsoleHeader,
  },
  setup() {
    const isMinimizeAside = false;

    onMounted(() => {
      renderClass();
    });

    const renderClass = () => {
      document.body.className = "";
      document.body.className = "sidebar-mini control-sidebar-slide-open layout-fixed layout-navbar-fixed";
    };

    const toggleMenuSidebar = () => {
      consoleHeader!.toggleMenuSidebar();
    };

    return {
      isMinimizeAside,
      renderClass,
      toggleMenuSidebar,
    };
  },
});
