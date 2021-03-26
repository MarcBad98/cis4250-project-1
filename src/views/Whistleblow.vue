<template>
  <div id="view-whistleblow">
    <h1>Whistleblow</h1>
    <hr />
    <NoContentWarning />
  </div>
</template>

<script>
import NoContentWarning from "@/components/NoContentWarning.vue";

export default {
  name: "WhistleblowView",
  components: {
    NoContentWarning,
  },
};
</script>