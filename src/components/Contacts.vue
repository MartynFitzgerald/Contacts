<template>
  <div>
    <md-list class="md-triple-line">
      <md-list-item v-for="contact in contacts" :key="contact.id">
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/1" alt="People" />
        </md-avatar>

        <div class="md-list-item-text">
          <span>Ali Connors</span>
          <span>Brunch this weekend?</span>
        </div>

        <md-button class="md-icon-button">
          <md-icon>chevron_right</md-icon>
        </md-button>
      </md-list-item>

      <md-divider></md-divider>
    </md-list>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  props: {
    contacts: Array,
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
