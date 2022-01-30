<template>
  <div>
    <md-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button">
            <md-icon>people</md-icon>
          </md-button>

          <h3 class="md-title">{{ title }}</h3>
        </div>
      </div>
    </md-toolbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
    url: String,
  },
};
</script>

<style scoped>
.md-toolbar + .md-toolbar {
  margin-top: 16px;
}
</style>
