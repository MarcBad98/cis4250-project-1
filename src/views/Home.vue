<template>
  <div id="view-home">
    <h1>Home</h1>
    <hr />
    <NoContentWarning />
  </div>
</template>

<script>
import NoContentWarning from "@/components/NoContentWarning.vue";

export default {
  name: "HomeView",
  components: {
    NoContentWarning,
  },
};
</script>