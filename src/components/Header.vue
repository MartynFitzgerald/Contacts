<template>
  <div>
    <md-toolbar class="toolbar-bg-colour">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button">
            <md-icon class="toolbar-text-colour">{{ icon }}</md-icon>
          </md-button>

          <h3 class="md-title toolbar-text-colour">{{ title }}</h3>
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
    icon: String,
  },
};
</script>

<style scoped>
.toolbar-bg-colour {
  background-color: #212121 !important;
}
.toolbar-text-colour {
  color: #fff !important;
}
.md-toolbar + .md-toolbar {
  margin-top: 16px;
}
</style>
