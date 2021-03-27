<template>
  <div id="view-contact-us">
    <DemoWarning />
    <h1>Contact Us</h1>
    <hr />
    <ContactUsForm />
  </div>
</template>

<script>
import DemoWarning from "@/components/DemoWarning.vue";
import ContactUsForm from "@/components/ContactUsForm.vue";

export default {
  name: "AboutView",
  components: {
    DemoWarning,
    ContactUsForm,
  },
};
</script>