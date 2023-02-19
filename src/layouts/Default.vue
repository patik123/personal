<template>
  <div>
    <Header />
    <transition name="fade" appear>
    <main>
      <slot />
    </main>
    </transition>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>
