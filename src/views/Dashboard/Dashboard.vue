<template>
  <ConsoleLayout>
    <template v-slot:content>
      Dashboard Page
      <button class="btn btn-dark" @click="openSwal">Open Swal</button>
    </template>
  </ConsoleLayout>
</template>
<script lang="ts" src="./Dashboard.ts"></script>
<style scoped lang="scss" src="./style.scss"></style>
