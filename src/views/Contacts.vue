<template>
  <div class="contacts">
    <Header title="My Contacts" icon="people" />

    <div class="sub-bar">
      <table style="text-align: center !important">
        <tr>
          <td><span class="md-title">Search</span></td>
          <td>
            <md-field>
              <md-icon>search</md-icon>
              <md-input v-model="initial"></md-input>
            </md-field>
          </td>
        </tr>

        <tr>
          <td><span class="md-title">Sort</span></td>
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
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Contacts",
  components: {
    Header,
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
</style>
