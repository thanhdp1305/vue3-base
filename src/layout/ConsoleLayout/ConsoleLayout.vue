<template>
  <ConsoleHeader ref="consoleHeader" />
  <ConsoleSidebar />
  <div class="content-wrapper">
    <div class="content">
      <div class="container-fluid">
        <slot name="content" />
      </div>
    </div>
  </div>
  <div id="sidebar-overlay" @click="toggleMenuSidebar" />
</template>
<script lang="ts" src="./ConsoleLayout.ts"></script>
<style scoped lang="scss" src="./style.scss"></style>
