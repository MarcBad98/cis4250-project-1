<template>
  <div id="view-home">
    <DemoWarning />
    <h1>Home</h1>
    <hr />
    <h2>Recent Whistleblows</h2>
    <div v-for="whistleblow in whistleblows" v-bind:key="whistleblow.id">
      <GenericCard :title="whistleblow.title">
        <b-taglist>
          <b-tag
            v-for="tag in whistleblow.tags"
            v-bind:key="tag"
            type="is-info"
            rounded
          >
            {{ tag }}
          </b-tag>
        </b-taglist>
        <p>{{ whistleblow.description }}</p>
        <b-button
          tag="router-link"
          :to="{
            name: 'ViewWhistleblow',
            params: { id: whistleblow.id },
          }"
          label="View Whistleblow Form"
          type="is-light"
          size="is-small"
          icon-pack="fas"
          icon-left="eye"
        ></b-button>
      </GenericCard>
      <br />
    </div>
  </div>
</template>

<script>
import MockWhistleblows from "@/assets/whistleblows.json";
import DemoWarning from "@/components/DemoWarning.vue";
import GenericCard from "@/components/GenericCard.vue";

export default {
  name: "HomeView",
  components: {
    DemoWarning,
    GenericCard,
  },
  computed: {
    whistleblows() {
      return MockWhistleblows;
    },
  },
};
</script>