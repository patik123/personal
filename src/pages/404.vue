<template>
  <Layout>
    <div class="px-5 lg:px-8">
      <div class="flex flex-col items-center justify-center py-4">
        <g-image src="~/404.svg" class="h-56 w-full" immediate="false" />
        <h1 class="text-3xl font-bold">
          Izgleda, da je stran, ki jo iščete, ne obstaja.
        </h1>

        <p class="text-lg font-medium text-slate-900 dark:text-slate-50 mt-3">
          <g-link to="/">Vrni se na domačo stran</g-link>
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: { titleTemplate: "404 - Hej Hygge" },
};
</script>
