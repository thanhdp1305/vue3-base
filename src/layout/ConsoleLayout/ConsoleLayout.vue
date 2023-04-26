<template>
  <ConsoleHeader ref="consoleHeader"></ConsoleHeader>
  <ConsoleSidebar></ConsoleSidebar>
  <div class="content-wrapper">
    <div class="content">
      <div class="container-fluid">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
  <div id="sidebar-overlay" @click="toggleMenuSidebar"></div>
</template>
<script lang="ts" src="./ConsoleLayout.ts"></script>
<style scoped lang="scss" src="./style.scss"></style>
