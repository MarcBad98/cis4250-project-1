<template>
  <div id="view-privacy-policy">
    <h1>Privacy Policy</h1>
    <hr />
    <NoContentWarning />
  </div>
</template>

<script>
import NoContentWarning from "@/components/NoContentWarning.vue";

export default {
  name: "PrivacyPolicyView",
  components: {
    NoContentWarning,
  },
};
</script>