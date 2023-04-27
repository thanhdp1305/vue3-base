import { Component, Vue } from "vue-facing-decorator";
import { ConsoleHeader } from "./ConsoleHeader";
import { ConsoleSidebar } from "./ConsoleSidebar";

@Component({
  name: "vue-console-layout",
  components: {
    ConsoleHeader,
    ConsoleSidebar,
  },
})
export default class ConsoleLayout extends Vue {
  $refs!: {
    consoleHeader: ConsoleHeader;
  };
  isMinimizeAside = false;
  mounted(): void {
    this.renderClass();
  }

  renderClass(): void {
    document.body.className = "";
    document.body.className = "sidebar-mini control-sidebar-slide-open layout-fixed layout-navbar-fixed";
  }

  toggleMenuSidebar(): void {
    this.$refs.consoleHeader?.toggleMenuSidebar();
  }
}
