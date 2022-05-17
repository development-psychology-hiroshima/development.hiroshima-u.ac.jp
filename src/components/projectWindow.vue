<template>
  <div
    class="projects-showcase"
    v-for="project in projects"
    :key="project.title"
  >
    <!--suppress JSCheckFunctionSignatures -->
    <h4 class="project-title" v-html="getStructuredContent(project)"></h4>
    <!--suppress HtmlDeprecatedAttribute -->
    <img
      class="showcase-image"
      v-if="project.image"
      :src="project.image"
      :alt="`${project.title} チラシ`"
      onerror="this.style.display = 'none';console.error(`「${this.alt}」が見つかりません。`)"
    />
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "projectWindow",
  setup() {
    const projects = inject("config").projects;
    const normalizeFilename = (filename) => `${filename.replace(/"/g, "_")}`;
    const getStructuredContent = (object) => {
      if (object.url) {
        return `<a href="${
          object.url
        }" target="_blank" download="${normalizeFilename(object.title)}">${
          object.title
        }</a>`;
      } else {
        return `${object.title}`;
      }
    };

    return {
      getStructuredContent,
      projects,
    };
  },
};
</script>

<style>
</style>
