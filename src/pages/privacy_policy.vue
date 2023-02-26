<template>
  <Layout>
    <div class="mx-auto sm:px-6 lg:px-8">
      <article
        class="prose prose-sm dark:prose-invert"
        v-html="$static?.posts.edges[0]?.node.content"
      ></article>
    </div>
  </Layout>
</template>

<static-query>
query {
  posts:  allContent(filter: { title: {eq: "Poltika zasebnosti"}}) {
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
  metaInfo: { titleTemplate: "Hej Hygge - Poltika zasebnosti" },
};
</script>
