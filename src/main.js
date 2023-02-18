import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/css/main.css";

export default function (Vue, { router, head, isClient }) {
  Vue.component("Layout", DefaultLayout);
}
