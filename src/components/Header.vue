<template>
  <div class="overflow-hidden">
    <div class="pt-6 pb-5">
      <div class="mx-auto px-4 sm:px-6">
        <nav
          class="relative flex items-center justify-between sm:h-10 md:justify-center"
        >
          <div
            class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"
          >
            <div class="flex items-center justify-between w-full md:w-auto">
              <g-link
                to="/"
                class="navbar-brand text-slate-900 dark:text-slate-100"
                aria-current="page"
                ><g-image
                  :alt="$static.metadata.siteName"
                  src="~/favicon.png"
                  width="32"
                  height="32"
                  quality="100"
                  immediate="false"
                  class="w-auto rounded sm:h-10"
              /></g-link>
              <span class="ml-2"> {{ $static.metadata.siteName }} </span>
              <div class="-mr-2 flex items-center md:hidden">
                <button
                  aria-label="Open Menu"
                  type="button"
                  class="inline-flex items-center justify-center p-2 rounded-md text-slate-900 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-900 dark:focus:bg-slate-900 focus:outline-none focus:bg-slate-100 focus:text-slate-500 transition duration-150 ease-in-out"
                  @click="menuShowHide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="flex items-center gap-4">
              <g-link
                to="/blog"
                class="font-medium text-slate-500 dark:text-slate-100 hover:text-slate-900 dark:hover:text-slate-100 dark:focus:text-slate-100 focus:outline-none focus:text-slate-900 transition duration-150 ease-in-out"
              >
                Blog
              </g-link>
              <g-link
                to="/about"
                class="ml-8 font-medium text-slate-500 dark:text-slate-100 hover:text-slate-900 dark:hover:text-slate-100 dark:focus:slate-slate-100 focus:outline-none focus:text-slate-900 transition duration-150 ease-in-out"
              >
                O blogu
              </g-link>
            </div>
          </div>
          <ThemeSwitcher />
        </nav>
      </div>
      <!---->
      <div
        id="sidebar"
        class="absolute top-0 inset-x-0 p-2 origin-top-right z-10 md:hidden"
        :style="{ display: menuShow ? 'block' : 'none' }"
      >
        <div class="rounded-lg shadow-md">
          <div
            class="rounded-lg bg-white shadow-xs overflow-hidden dark:bg-gray-800"
          >
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <g-link
                  to="/"
                  class="text-gray-900 dark:text-gray-100"
                  aria-current="page"
                  ><g-image
                    :alt="$static.metadata.siteName"
                    src="~/favicon.png"
                    width="32"
                    height="32"
                    class="w-auto rounded"
                /></g-link>
              </div>
              <div class="mr-2">
                <button
                  aria-label="Close Menu"
                  type="button"
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-900 dark:focus:bg-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  @click="menuShowHide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3">
              <g-link
                to="/blog"
                class="block px-3 py-2 rounded-md text-base font-medium dark:text-slate-100 text-slate-900 hover:text-slate-800 hover:bg-slate-100 dark:hover:text-slate-100 dark:hover:bg-slate-900 dark:focus:bg-slate-900 focus:outline-none focus:text-slate-900 focus:bg-slate-100 transition duration-150 ease-in-out"
                >Blog</g-link
              >

              <g-link
                to="/about"
                class="mt-1 block px-3 py-2 rounded-md text-base font-medium dark:text-slate-100 text-slate-900 hover:text-slate-800 hover:bg-slate-100 dark:hover:text-slate-100 dark:hover:bg-slate-900 dark:focus:bg-slate-900 focus:outline-none focus:text-slate-900 focus:bg-slate-100 transition duration-150 ease-in-out"
                >O blogu</g-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import ThemeSwitcher from "./ThemeSwitcher.vue";
export default {
  name: "HeaderMenu",
  components: {
    ThemeSwitcher,
  },
  data() {
    return {
      menuShow: false,
    };
  },
  methods: {
    menuShowHide() {
      this.menuShow = !this.menuShow;
    },
  },
};
</script>
