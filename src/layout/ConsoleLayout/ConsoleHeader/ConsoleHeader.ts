import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "ConsoleHeader",
  components: {},
  setup() {
    const toggleSideBar = true;
    const logoHeader = false;
    let sidebarMenuOpened = true;

    onMounted(() => {
      //
    });

    const toggleMenuSidebar = (): void => {
      if (sidebarMenuOpened) {
        document.body.classList.remove("sidebar-open");
        document.body.classList.add("sidebar-collapse");
        sidebarMenuOpened = false;
      } else {
        document.body.classList.remove("sidebar-collapse");
        document.body.classList.add("sidebar-open");
        sidebarMenuOpened = true;
      }
    };

    return {
      toggleSideBar,
      logoHeader,
      sidebarMenuOpened,
      toggleMenuSidebar,
    };
  },
});
