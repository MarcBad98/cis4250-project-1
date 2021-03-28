<template>
  <div id="view-home">
    <DemoWarning />
    <h1 class="title">Welcome to Whistlechain</h1>
    <hr />
    <div class="columns is-multiline">
      <div
        v-for="whistleblow in whistleblows"
        v-bind:key="whistleblow.id"
        class="column is-half"
      >
        <GenericCard :title="whistleblow.title" style="height: 100%">
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
          <div class="buttons">
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
            <b-field grouped>
              <b-field>
                <b-select size="is-small">
                  <option
                    v-for="option in voteOptions"
                    v-bind:key="option.name"
                    :value="option"
                  >
                    {{ option.name }} ({{ option.votesUp }})
                  </option>
                </b-select>
                <p class="control">
                  <b-button
                    type="is-primary"
                    size="is-small"
                    icon-pack="fas"
                    icon-right="thumbs-up"
                    @click="vote(true)"
                  ></b-button>
                </p>
              </b-field>
              <b-field>
                <b-select size="is-small">
                  <option
                    v-for="option in voteOptions"
                    v-bind:key="option.name"
                    :value="option"
                  >
                    {{ option.name }} ({{ option.votesDown }})
                  </option>
                </b-select>
                <p class="control">
                  <b-button
                    type="is-primary"
                    size="is-small"
                    icon-pack="fas"
                    icon-right="thumbs-down"
                    @click="vote(false)"
                  ></b-button>
                </p>
              </b-field>
            </b-field>
          </div>
        </GenericCard>
        <br />
      </div>
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
  data() {
    return {
      voteOptions: [
        { name: "Quality", votesUp: 258, votesDown: 884 },
        { name: "Accurate", votesUp: 40, votesDown: 826 },
        { name: "Professional", votesUp: 923, votesDown: 649 },
        { name: "Relevant", votesUp: 28, votesDown: 499 },
        { name: "Insightful", votesUp: 621, votesDown: 375 },
      ],
    };
  },
  computed: {
    whistleblows() {
      return MockWhistleblows;
    },
  },
  methods: {
    vote(isUpVote) {
      this.$buefy.snackbar.open(`${isUpVote ? "Upvoted" : "Downvoted"}`);
    },
  },
};
</script>