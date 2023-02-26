<template>
  <Layout>
    <div class="px-5 lg:px-8 lg:flex lg:content-center">
      <article
        class="prose prose-sm dark:prose-invert lg:max-w-none"
        v-html="$static.posts.edges[0].node.content"
      ></article>
    </div>
  </Layout>
</template>

<static-query>
query {
  posts:  allContent(filter: { title: {eq: "Politika piškotkov"}}) {
     edges {node{
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
  metaInfo: { titleTemplate: "Hej Hygge - Politika piškotkov" },
};
</script>
