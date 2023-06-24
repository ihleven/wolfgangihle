<script setup>
  const {params} = useRoute()
  const slug = params.slug && params.slug.length > 0 ? params.slug.join('/') : 'home'

  const story = await useAsyncStoryblok(slug, { version: 'draft' })
</script>

<template>
  <div>
    {{ story }}
    <StoryblokComponent v-if="story" :blok="story.content" />
  <div v-else>
  404
</div> 
  </div>
</template>
