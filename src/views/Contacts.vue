<template>
  <div class="contacts">
    <Header title="My Contacts" icon="people" />

    <div class="sub-bar">
      <table style="text-align: center !important">
        <tr>
          <td style="width: 20%"><span class="md-title">Search</span></td>
          <td>
            <md-field>
              <md-icon class="icon-text-colour">search</md-icon>
              <md-input v-model="initial"></md-input>
            </md-field>
          </td>
        </tr>

        <tr>
          <td style="width: 20%"><span class="md-title">Sort</span></td>
          <td>
            <md-field>
              <label for="movie">Movie</label>
              <md-select v-model="movie" name="movie" id="movie">
                <md-option value="fight-club">Fight Club</md-option>
                <md-option value="godfather">Godfather</md-option>
                <md-option value="godfather-ii">Godfather II</md-option>
              </md-select>
            </md-field>
          </td>
        </tr>
      </table>
    </div>

    <md-content class="md-scrollbar md-content">
      <md-list class="md-triple-line">
        <md-list-item v-for="contact in contacts" :key="contact.email">
          <md-avatar>
            <img v-bind:src="contact.picture.thumbnail" alt="People" />
          </md-avatar>

          <div class="md-list-item-text">
            <span>{{ contact.name.first + ", " + contact.name.last }}</span>
            <span style="color: #ff70a1">{{ contact.location.state + " / " + contact.location.country }}</span>
          </div>

          <md-button class="md-icon-button">
            <md-icon>chevron_right</md-icon>
          </md-button>
        </md-list-item>

        <md-divider></md-divider>
      </md-list>
    </md-content>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Contacts",
  components: {
    Header,
  },
  data() {
    return {
      initial: "",
      movie: "fight-club",
      contacts: [],
    };
  },
  created() {
    fetch("https://randomuser.me/api/?results=50&amp;nat=gb")
      .then((response) => response.json())
      .then((response) => (this.contacts = response.results));
  },
};
</script>

<style scoped>
table {
  width: 100%;
}
.sub-bar {
  width: 100%;
  padding: 10px;
  background-color: #f4f4f4;
}
.text {
  padding: 20px;
  border: 0px;
}
.md-content {
  height: 80vh;
  overflow: auto;
}
.icon-text-colour {
  color: #000 !important;
}
.icon-text-colour::after {
  background-color: #f4f4f4 !important;
}
</style>
