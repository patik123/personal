<template>
  <Layout>
    <div class="w-full h-full">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold">Blog</h1>
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
