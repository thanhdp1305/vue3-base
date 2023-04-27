<template>
  <aside class="main-sidebar elevation-2 sidebar-light-primary">
    <a href="#" class="brand-link text-center">
      <span class="brand-text font-weight-bold">{{ "Vue3-base" }}</span>
    </a>

    <div class="sidebar">
      <nav class="mt-5">
        <ul
          class="nav nav-pills nav-sidebar flex-column nav-flat"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li class="nav-item">
            <a class="nav-link">
              <span class="nav-icon svg-icon svg-icon-2">
                <IconSvg :icon="`toggleMenu`" />
              </span>
              <p>Documents</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
<script lang="ts" src="./ConsoleSidebar.ts"></script>
<style scoped lang="scss" src="./style.scss"></style>
