import SwalPopup from "@/ultils/swalPopup";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Dashboard",
  components: {},
  setup() {
    const openSwal = () => {
      SwalPopup.swalResultPopup("Opened", "success");
    };

    return {
      openSwal,
    };
  },
});
