<template>
  <div class="contactInformation">
    <Header title="Contact" icon="arrow_back" />
    <h1>This is an Contact Information page</h1>
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
};
</script>
