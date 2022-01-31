<template>
  <div class="contactInformation">
    <Header title="Contact" icon="arrow_back" url="/" />

    <div class="mobileContainer">
      <img :src="contact.picture.large" />
      <h2>
        <span>{{ contact.name.first + ", " + contact.name.last }}</span>
      </h2>
    </div>

    <div class="webContainer">
      <img :src="contact.picture.large" />
      <h1>
        <span>{{ contact.name.first + ", " + contact.name.last }}</span>
      </h1>
    </div>

    <md-list>
      <md-list-item>
        <md-icon>person</md-icon>
        <span class="md-list-item-text" style="color: #ff70a1">Age</span>
        <span class="md-list-item-text">{{ contact.dob.age }}</span>
      </md-list-item>

      <md-list-item :href="'mailto: ' + contact.email">
        <md-icon>email</md-icon>
        <span class="md-list-item-text" style="color: #ff70a1">Email</span>
        <span class="md-list-item-text">{{ contact.email }}</span>
      </md-list-item>

      <md-list-item :href="'tel: ' + contact.cell">
        <md-icon>phone</md-icon>
        <span class="md-list-item-text" style="color: #ff70a1">Mobile</span>
        <span class="md-list-item-text">{{ contact.cell }}</span>
      </md-list-item>

      <md-list-item :href="'tel: ' + contact.phone">
        <md-icon>phone</md-icon>
        <span class="md-list-item-text" style="color: #ff70a1">Phone</span>
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
        <md-icon>home</md-icon>
        <span class="md-list-item-text" style="color: #ff70a1">Address</span>
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
.mobileContainer {
  position: relative;
  width: 100%;
}

.mobileContainer h2 {
  position: absolute;
  bottom: 0px;
  left: 8px;
}

.mobileContainer h2 span {
  color: white;
  font: bold 24px/45px Helvetica, Sans-Serif;
  letter-spacing: -1px;
  background: rgba(0, 0, 0, 0.7);
  padding: 12.5px;
}

.mobileContainer,
.mobileContainer img {
  display: none;
}

.webContainer img {
  height: 20%;
  width: 20%;
  border-radius: 50%;
}

.webContainer {
  display: block;
}

@media screen and (max-width: 600px) {
  .webContainer {
    display: none;
  }

  .mobileContainer {
    display: block;
  }
  .mobileContainer img {
    width: 100%;
    height: 250px;
    display: block;
  }
}
</style>
