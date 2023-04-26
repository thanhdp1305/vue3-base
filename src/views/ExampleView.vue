<template>
  <ExampleCode />
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";
import { ExampleCode } from "@/components/ExampleCode";

@Component({
  components: {
    ExampleCode,
  },
})
export default class ExampleView extends Vue {}
</script>
