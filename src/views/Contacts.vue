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
              <md-input v-model="filter"></md-input>
            </md-field>
          </td>
        </tr>

        <tr>
          <td style="width: 20%"><span class="md-title">Sort</span></td>
          <td>
            <md-field>
              <md-select v-model="sort" name="sort" id="sort">
                <md-option value="name.first">First Name</md-option>
                <md-option value="name.last">Second Name</md-option>
                <md-option value="email">Email</md-option>
                <md-option value="gender">Gender</md-option>
                <md-option value="nat">Nationality</md-option>
                <md-option value="location.state">State</md-option>
                <md-option value="location.country">Country</md-option>
              </md-select>
            </md-field>
          </td>
        </tr>
      </table>
    </div>

    <md-content class="md-scrollbar md-content">
      <md-list v-if="contacts.length > 0" class="md-triple-line">
        <md-list-item
          v-for="contact in contacts"
          :key="contact.email"
          :to="{
            name: 'ContactInformation',
            params: {
              contact: contact,
              id: contact.name.first + '.' + contact.name.last,
            },
          }"
        >
          <md-avatar>
            <img v-bind:src="contact.picture.thumbnail" alt="People" />
          </md-avatar>

          <div class="md-list-item-text">
            <span>{{ contact.name.first + ", " + contact.name.last }}</span>
            <span style="color: #ff70a1">{{
              contact.location.state + " / " + contact.location.country
            }}</span>
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
      filter: "",
      sort: "name.first",
      contacts: [],
    };
  },
  watch: {
    filter(val) {
      var contacts = localStorage.getItem("contacts");

      if (contacts != null) {
        this.contacts = JSON.parse(contacts).filter(
          (x) =>
            x.name.first.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
            x.name.last.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
            x.location.state.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
            x.location.country.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      }
    },
    sort(val) {
      let attributes = val.split(".");
      let contacts = [...this.contacts];

      contacts.sort(function (a, b) {
        if (attributes.length > 1) {
          // eslint-disable-next-line prettier/prettier
          return a[attributes[0]][attributes[1]].toLowerCase() > b[attributes[0]][attributes[1]].toLowerCase() ? 1 : b[attributes[0]][attributes[1]].toLowerCase() > a[attributes[0]][attributes[1]].toLowerCase() ? -1 : 0;
        } else {
          // eslint-disable-next-line prettier/prettier
          return a[attributes[0]].toLowerCase() > b[attributes[0]].toLowerCase() ? 1 : b[attributes[0]].toLowerCase() > a[attributes[0]].toLowerCase() ? -1 : 0;
        }
      });
      this.contacts = contacts;
    },
  },
  created() {
    let contacts = localStorage.getItem("contacts");

    if (contacts == null) {
      fetch("https://randomuser.me/api/?results=50&amp;nat=gb")
        .then((response) => response.json())
        .then((response) => {
          localStorage.setItem("contacts", JSON.stringify(response.results));
          this.contacts = response.results;
        });
    } else {
      this.contacts = JSON.parse(contacts);
    }
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
