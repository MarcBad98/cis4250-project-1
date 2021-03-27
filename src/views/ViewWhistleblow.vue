<template>
  <div id="view-view-whistleblow">
    <DemoWarning />
    <h1 class="title">View Whistleblow</h1>
    <hr />
    <b-tabs type="is-boxed">
      <b-tab-item label="Form" icon-pack="fas" icon="pen-square">
        <WhistleblowForm readonly :whistleblow="whistleblow" />
      </b-tab-item>
      <b-tab-item label="Evidence" icon-pack="fas" icon="file-pdf">
        <div class="box has-background-light">
          <div
            class="pdf-page"
            v-for="page in whistleblow.pages"
            v-bind:key="page"
          >
            <PDFView :src="whistleblow.url" :page="page" />
          </div>
        </div>
      </b-tab-item>
      <b-tab-item label="JSON" icon-pack="fas" icon="code">
        <pre>{{ whistleblow }}</pre>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<style scoped>
.pdf-page {
  display: inline-block;
  padding: 10px;
  width: 50%;
}
</style>

<script>
import PDFView from "vue-pdf";
import MockWhistleblows from "@/assets/whistleblows.json";
import DemoWarning from "@/components/DemoWarning.vue";
import WhistleblowForm from "@/components/WhistleblowForm.vue";

export default {
  name: "ViewWhistleblow",
  components: {
    PDFView,
    DemoWarning,
    WhistleblowForm,
  },
  computed: {
    whistleblow() {
      return MockWhistleblows.find((obj) => obj.id === this.$route.params.id);
    },
  },
};
</script>