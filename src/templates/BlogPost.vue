<template>
  <div>
    <Layout>
      <div class="px-5 lg:px-8">
        <g-image
          :src="$page.blogPost.blog_image"
          :alt="$page.blogPost.title"
          class="w-full h-auto rounded-lg shadow-lg"
        />

        <div class="flex flex-col justify-center items-center">
          <h1 class="text-3xl font-bold text-center mt-8">
            {{ $page.blogPost.title }}
          </h1>
          <div class="flex flex-row justify-center items-center mt-2">
            <p class="text-sm text-gray-500">
              {{ $page.blogPost.date }}
            </p>
            <p class="text-sm text-gray-500 mx-2">•</p>
            <p class="text-sm text-gray-500">
              {{ $page.blogPost.read_time }} minuti branja
            </p>
          </div>
        </div>

        <article
          class="prose lg:px-36 dark:prose-invert max-w-none prose-img:m-auto prose-img:rounded-lg prose-img:shadow-lg prose-img:mx-auto prose-img:my-8"
          v-html="$page.blogPost.content"
        ></article>
      </div>
    </Layout>
  </div>
</template>

<page-query>
query ($id: ID!) {
  blogPost(id: $id) {
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
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.blogPost.seo_title || this.$page.blogPost.title,
      meta: [
        {
          name: "description",
          content:
            this.$page.blogPost.seo_description ||
            this.$page.blogPost.description,
        },
      ],
    };
  },
};
</script>
