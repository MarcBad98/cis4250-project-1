<template>
  <div id="view-about">
    <h1>About</h1>
    <hr />
    <NoContentWarning />
  </div>
</template>

<script>
import NoContentWarning from "@/components/NoContentWarning.vue";

export default {
  name: "AboutView",
  components: {
    NoContentWarning,
  },
};
</script>