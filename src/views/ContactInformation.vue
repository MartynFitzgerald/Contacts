<template>
  <div class="contactInformation">
    <Header title="Contact" icon="arrow_back" url="/" />
    <md-list>
      <md-list-item>
        <md-icon class="md-primary">person</md-icon>
        <span class="md-list-item-text">Age</span>
        <span class="md-list-item-text">{{ contact.dob.age }}</span>
      </md-list-item>

      <md-list-item :href="'mailto: ' + contact.email">
        <md-icon class="md-primary">email</md-icon>
        <span class="md-list-item-text">Email</span>
        <span class="md-list-item-text">{{ contact.email }}</span>
      </md-list-item>

      <md-list-item :href="'tel: ' + contact.cell">
        <md-icon class="md-primary">phone</md-icon>
        <span class="md-list-item-text">Mobile</span>
        <span class="md-list-item-text">{{ contact.cell }}</span>
      </md-list-item>

      <md-list-item :href="'tel: ' + contact.phone">
        <md-icon class="md-primary">phone</md-icon>
        <span class="md-list-item-text">Phone</span>
        <span class="md-list-item-text">{{ contact.phone }}</span>
      </md-list-item>

      <md-list-item
        target="_blank"
        :href="
          encodeURI(
            'https://www.google.com/maps/search/?api=1&query=' +
              contact.location.street.number +
              ' ' +
              contact.location.street.name +
              ', ' +
              contact.location.country
          )
        "
      >
        <md-icon class="md-primary">home</md-icon>
        <span class="md-list-item-text">Address</span>
        <span class="md-list-item-text">{{
          contact.location.street.number + " " + contact.location.street.name
        }}</span>
      </md-list-item>

      <md-list-item>
        <md-icon></md-icon>
        <span class="md-list-item-text"></span>
        <span class="md-list-item-text">{{ contact.location.city }}</span>
      </md-list-item>

      <md-list-item>
        <md-icon></md-icon>
        <span class="md-list-item-text"></span>
        <span class="md-list-item-text">{{ contact.location.state }}</span>
      </md-list-item>

      <md-list-item>
        <md-icon></md-icon>
        <span class="md-list-item-text"></span>
        <span class="md-list-item-text">{{ contact.location.postcode }}</span>
      </md-list-item>

      <md-list-item>
        <md-icon></md-icon>
        <span class="md-list-item-text"></span>
        <span class="md-list-item-text">{{ contact.location.city }}</span>
      </md-list-item>

      <md-list-item>
        <md-icon></md-icon>
        <span class="md-list-item-text"></span>
        <span class="md-list-item-text">{{ contact.location.state }}</span>
      </md-list-item>

      <md-list-item>
        <md-icon></md-icon>
        <span class="md-list-item-text"></span>
        <span class="md-list-item-text">{{ contact.location.country }}</span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "Contacts",
  components: {
    Header,
  },
  props: {
    contact: Object,
  },
};
</script>

<style scoped>
.image {
  width: 100%;
  height: 250px;
}
</style>
