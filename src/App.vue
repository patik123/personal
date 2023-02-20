<template>
  <div
    class="font-sans text-slate-800 transition-colors duration-300 ease-linear dark:bg-slate-800 dark:text-gray-300 container min-w-full min-h-screen"
  >
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: "",
    };
  },
};
</script>
