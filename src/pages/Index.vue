<template>
  <Layout>
    <div class="font-handwrite"></div>
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
