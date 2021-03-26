<template>
  <div id="view-faq">
    <h1>FAQ</h1>
    <hr />
    <NoContentWarning />
  </div>
</template>

<script>
import NoContentWarning from "@/components/NoContentWarning.vue";

export default {
  name: "FAQView",
  components: {
    NoContentWarning,
  },
};
</script>