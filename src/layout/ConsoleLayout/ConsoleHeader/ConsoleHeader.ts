import { Component, Vue } from "vue-facing-decorator";

@Component({
  name: "vue-console-header",
})
export default class ConsoleHeader extends Vue {
  toggleSideBar = true;
  logoHeader = false;
  sidebarMenuOpened = true;
  mounted(): void {
    //
  }

  toggleMenuSidebar(): void {
    if (this.sidebarMenuOpened) {
      document.body.classList.remove("sidebar-open");
      document.body.classList.add("sidebar-collapse");
      this.sidebarMenuOpened = false;
    } else {
      document.body.classList.remove("sidebar-collapse");
      document.body.classList.add("sidebar-open");
      this.sidebarMenuOpened = true;
    }
  }
}
