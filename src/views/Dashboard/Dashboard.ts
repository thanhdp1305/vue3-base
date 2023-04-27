import SwalPopup from "@/ultils/swalPopup";
import { defineComponent } from "vue";

export default defineComponent({
  name: "dashboard",
  components: {},
  setup() {
    const openSwal = () => {
      SwalPopup.swalResultPopup("Opened", "'");
    };

    return {
      openSwal,
    };
  },
});
