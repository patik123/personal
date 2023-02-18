<template>
  <div
    class="antialiased font-sans text-gray-900 transition-colors duration-300 ease-linear dark:bg-slate-800 dark:text-gray-300 container min-w-full min-h-screen"
  >
    <router-view />
  </div>
</template>

<static-query>
    query {
      metadata {
        siteName
        siteDescription
      }
    }
    </static-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$static.metadata.siteDescription,
        },
      ],
    };
  },
  data() {
    return {
      theme: "",
    };
  },
};
</script>
