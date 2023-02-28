<template>
  <div>
    <Layout>
      <div class="px-5 lg:px-8">
        <article
          class="prose prose-sm dark:prose-invert max-w-none"
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
