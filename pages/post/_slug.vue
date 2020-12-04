<template>
  <div>
    <article class="prose">
      <h1>{{ post.title }}</h1>
      <nuxt-content :document="post" />
      <div class="text-xs font-mono text-80-cyan mt-10 uppercase">
        {{ formatDate(post.date) }} /
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="bg-80-cyan text-black mr-2"
        >
          {{ tag }}
        </span>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content(`post/${params.slug}` || "index").fetch();
    return { post };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.excerpt
        },
        {
          hid: "og-type",
          property: "og:type",
          content: "website"
        },
        {
          hid: "og-url",
          property: "og:url",
          content: "website"
        },
        {
          hid: "og-title",
          property: "og:title",
          content: this.post.title
        },
        {
          hid: "og-description",
          property: "og:description",
          content: this.post.excerpt
        },
        {
          hid: "og-image",
          property: "og:image",
          content: this.post.img
        },
        {
          hid: "tw-card",
          property: "tw:card",
          content: "summary_large_image"
        },
        {
          hid: "tw-title",
          property: "tw:title",
          content: this.post.title
        },
        {
          hid: "tw-description",
          property: "tw:description",
          content: this.post.excerpt
        },
        {
          hid: "tw-image",
          property: "tw:image",
          content: this.post.img
        }
      ]
    };
  }
};
</script>
