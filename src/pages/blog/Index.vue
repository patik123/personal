<template>
  <Layout>
    <div class="flex flex-col items-center justify-center w-full h-full">
      <h1 class="text-4xl font-bold">Blog</h1>
      <div class="flex flex-col items-center justify-center w-full h-full">
        <div v-for="post in $page.posts.edges" :key="post.node.id">
          <h2 class="text-2xl font-bold">{{ post.node.title }}</h2>
          <p class="text-xl">{{ post.node.excerpt }}</p>
          <p class="text-xl">{{ post.node.date }}</p>
          <p class="text-xl">{{ post.node.content }}</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
    posts: allBlogPost {
    edges {
      node {
        id
        path
        title
        date
        content
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
