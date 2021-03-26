<template>
  <div id="view-user-agreement">
    <h1>User Agreement</h1>
    <hr />
    <NoContentWarning />
  </div>
</template>

<script>
import NoContentWarning from "@/components/NoContentWarning.vue";

export default {
  name: "UserAgreementView",
  components: {
    NoContentWarning,
  },
};
</script>