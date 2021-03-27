<template>
  <div id="view-whistleblow">
    <DemoWarning />
    <h1>Whistleblow</h1>
    <hr />
    <WhistleblowForm />
  </div>
</template>

<script>
import DemoWarning from "@/components/DemoWarning.vue";
import WhistleblowForm from "@/components/WhistleblowForm.vue";

export default {
  name: "WhistleblowView",
  components: {
    DemoWarning,
    WhistleblowForm,
  },
};
</script>