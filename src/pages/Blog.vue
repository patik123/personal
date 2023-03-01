<template>
  <Layout>
    <div class="px-5 lg:px-8">
      <div class="flex flex-col items-center justify-center py-4">
        <h1 class="text-4xl font-bold">Blog</h1>
      </div>

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
              <h3 class="text-lg font-medium text-slate-900 dark:text-slate-50">
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
    </div>
  </Layout>
</template>

<page-query>
query {
    posts: allBlogPost{
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
        seo_title
        seo_description
        excerpt
      }
    }
  }
}
</page-query>
<static-query>
query {
    metadata {
        siteName
    }
}
</static-query>

<script>
export default {
  metaInfo: { titleTemplate: `Blog` },
};
</script>
