<template>
  <Layout>
    <div class="px-5 lg:px-8">
      <article
        class="prose mt-5 dark:prose-invert max-w-none prose-img:m-auto prose-img:rounded-lg prose-img:shadow-lg prose-img:mx-auto prose-img:my-8"
        v-html="$static.posts.edges[0].node.content"
      ></article>
    </div>
  </Layout>
</template>
<static-query>
query {
  posts:  allContent(filter: { title: {eq: "O blogu"}}) {
     edges {
      node{
        id
        content
        title
      }
    }
  }
}
</static-query>
<script>
export default {
  metaInfo: { titleTemplate: "Hej Hygge" },
};
</script>
