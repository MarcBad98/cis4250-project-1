<template>
  <form>
    <b-field label="Title">
      <b-input></b-input>
    </b-field>
    <b-field
      label="Sender"
      message="Provide the best way to reach out to you (e.g., email, phone, etc.)."
    >
      <b-input></b-input>
    </b-field>
    <b-field label="Description">
      <b-input type="textarea"></b-input>
    </b-field>
    <b-field label="Acknowledgment">
      <b-checkbox v-model="hasAcknowledged">
        I accept the terms and conditions laid out in the
        <router-link :to="{ name: 'UserAgreement' }" target="_blank">
          user agreement
        </router-link>
        and
        <router-link :to="{ name: 'PrivacyPolicy' }" target="_blank">
          privacy policy</router-link
        >.
      </b-checkbox>
    </b-field>
    <b-button
      class="is-primary"
      label="Submit"
      :disabled="!hasAcknowledged"
      @click="onClick()"
    />
  </form>
</template>

<script>
export default {
  name: "ContactUsForm",
  data() {
    return {
      hasAcknowledged: false,
    };
  },
  methods: {
    onClick() {
      this.$buefy.dialog.confirm({
        type: "is-danger",
        hasIcon: true,
        message:
          "<strong>Confirm</strong><br />You are now about to send this message to Whistlechain support representatives. Please confirm this action.",
        onCancel: () =>
          this.$buefy.snackbar.open(
            "The operation was cancelled. Nothing was sent."
          ),
        onConfirm: () =>
          this.$buefy.snackbar.open(
            "The operation was confirmed. Your message was now sent to Whistlechain support representatives."
          ),
      });
    },
  },
};
</script>