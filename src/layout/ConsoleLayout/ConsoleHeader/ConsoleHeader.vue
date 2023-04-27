<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul v-if="toggleSideBar" class="navbar-nav">
      <li class="nav-item">
        <a
          class="nav-link d-flex align-items-center"
          data-widget="pushmenu"
          href="#"
          role="button"
          @click="toggleMenuSidebar"
        >
          <img src="../../../assets/media/svg/menu.svg" width="20" height="20" />
        </a>
      </li>
    </ul>
    <ul v-if="logoHeader" class="navbar-nav">
      <li class="nav-item">
        <label class="text-lg mb-0 text-white fw-700">Vue3-Base</label>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">
        <a class="nav-link px-2" />
      </li>
    </ul>
  </nav>
</template>
<script lang="ts" src="./ConsoleHeader.ts"></script>
<style scoped lang="scss" src="./style.scss"></style>
