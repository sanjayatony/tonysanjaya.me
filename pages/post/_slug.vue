<template>
  <div>
    <article class="prose">
      <h1>{{ post.title }}</h1>
      <nuxt-content :document="post" />
    </article>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content(`post/${params.slug}` || "index").fetch();
    return { post };
  }
};
</script>
