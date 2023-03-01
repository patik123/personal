<template>
  <Layout>
    <div class="px-5 lg:px-8">
      <!-- Hero -->
      <section id="hero" class="relative">
        <div class="absolute inset-0"></div>
        <div
          class="relative mx-auto max-w-screen-xl py-32 lg:flex lg:items-center"
        >
          <div class="max-w-xl text-center sm:text-left">
            <h1>
              <span
                class="block text-3xl font-extrabold sm:text-5xl text-rose-700"
                >Hej Hygge</span
              >
              <strong
                class="block font-extrabold text-2xl text-slate-800 dark:text-slate-100"
              >
                <span
                  >Blog o drobnih stvareh, ki lahko spremenijo naše
                  življenje.</span
                >
              </strong>
            </h1>
          </div>
        </div>
      </section>

      <!-- Blog posts -->
      <section id="blog_posts">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          <g-link
            class="overflow-hidden rounded-lg border border-gray-100 shadow-sm"
            v-for="post in $page.posts.edges"
            :key="post.node.id"
            :to="post.node.path"
          >
            <g-image
              :src="post.node.blog_image"
              :alt="post.node.title"
              class="h-auto max-w-full"
            />

            <div class="p-4 sm:p-6">
              <a href="#">
                <h3
                  class="text-lg font-medium text-slate-900 dark:text-slate-50"
                >
                  {{ post.node.title }}
                </h3>
              </a>

              <p
                class="mt-2 text-sm leading-relaxed text-gray-500 dark:text-slate-300 line-clamp-3"
              >
                {{ post.node.description }}
              </p>

              <a
                href="#"
                class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                <span>Preberi več</span>

                <span
                  aria-hidden="true"
                  class="block transition group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </g-link>
        </div>
      </section>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allBlogPost (limit: 3){
    edges {
      node {
        id
        path
        title
        date
        blog_image
        read_time
        content
        description
        excerpt
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: { titleTemplate: "Hej Hygge" },
};
</script>
