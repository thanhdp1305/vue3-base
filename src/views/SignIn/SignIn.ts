import { RegexEmail } from "@/constants/regex";
import { RouterNameEnum } from "@/constants/routeName";
import router from "@/router";
import { validate } from "@/ultils/validators";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "SignIn",
  components: {},
  setup() {
    const email = "";
    const password = "";
    let errorEmail = "";
    let errorPassword = "";

    onMounted(() => {
      renderClass();
    });

    const renderClass = () => {
      document.body.className = "";
      document.body.classList.add("login-page");
    };

    const validateEmail = (): string => {
      errorEmail = validate(email, {
        required: true,
        pattern: RegexEmail,
        errorsMessage: { required: "Complete this field.", pattern: "Incorrect email format." },
      });
      return errorEmail;
    };

    const validatePassword = (): string => {
      errorPassword = validate(password, {
        required: true,
        errorsMessage: { required: "Complete this field." },
      });
      return errorPassword;
    };

    const validateForm = (): boolean => {
      const arrRes = [];
      arrRes.push(validateEmail());
      arrRes.push(validatePassword());

      return arrRes.findIndex((x) => x && x.length > 0) < 0;
    };

    const submitForm = () => {
      if (!validateForm()) return;

      router.push({ name: RouterNameEnum.Dashboard });
    };

    return {
      email,
      password,
      errorEmail,
      errorPassword,
      onMounted,
      validateEmail,
      validatePassword,
      submitForm,
    };
  },
});
