<template>
  <Layout>
    <div class="px-5 lg:px-8">
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-3xl font-bold text-center mt-8">
          {{ $static.posts.edges[0].node.title }}
        </h1>
      </div>

      <article
        class="prose mt-5 dark:prose-invert max-w-none"
        v-html="$static.posts.edges[0].node.content"
      ></article>
    </div>
  </Layout>
</template>

<static-query>
query {
  posts:  allContent(filter: { title: {eq: "Politika piškotkov"}}) {
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
  metaInfo: { titleTemplate: "Hej Hygge - Politika piškotkov" },
};
</script>
