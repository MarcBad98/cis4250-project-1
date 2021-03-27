<template>
  <form>
    <b-field label="Title">
      <b-input v-model="whistleblow.title" :readonly="readonly"></b-input>
    </b-field>
    <b-field label="Tags">
      <b-taginput
        v-model="whistleblow.tags"
        type="is-info"
        maxtags="5"
        rounded
        :readonly="readonly"
        :closable="!readonly"
      ></b-taginput>
    </b-field>
    <b-field label="Description">
      <b-input
        v-model="whistleblow.description"
        type="textarea"
        :readonly="readonly"
      ></b-input>
    </b-field>
    <b-field label="Evidence" v-if="!readonly">
      <b-upload drag-drop>
        <section class="section">
          <div class="content has-text-centered">
            <p>
              <b-icon pack="fas" icon="upload" size="is-large"> </b-icon>
            </p>
            <p>Drop your files here or click to upload.</p>
          </div>
        </section>
      </b-upload>
    </b-field>
    <b-field label="Acknowledgment" v-if="!readonly">
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
      v-if="!readonly"
      class="is-primary"
      label="Submit"
      :disabled="!hasAcknowledged"
      @click="onClick()"
    />
  </form>
</template>

<script>
export default {
  name: "WhistleblowForm",
  props: {
    readonly: {
      type: Boolean,
      default: false,
    },
    whistleblow: {
      type: Object,
      default() {
        return {};
      },
    },
  },
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
          "<strong>Final Warning</strong><br />Are you sure you want to submit this whistleblow?",
        onCancel: () =>
          this.$buefy.snackbar.open(
            "The operation was cancelled. Nothing was uploaded."
          ),
        onConfirm: () =>
          this.$buefy.snackbar.open(
            "The operation was confirmed. Your whistleblow was now uploaded."
          ),
      });
    },
  },
};
</script>