<template>
  <b-notification type="is-warning" has-icon :closable="false">
    <strong>No Content</strong>
    <br />
    The developers have yet to implement this feature. Please keep a look out
    for the next release.
  </b-notification>
</template>

<script>
export default {
  name: "NoContentWarning",
};
</script>