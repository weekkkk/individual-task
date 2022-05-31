<template>
  <div class="base-container">
    <slot>
      <router-view />
    </slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({
  name: "app",
})
export default class AppComponent extends Vue {}
</script>

<style lang="less">
@import "@/assets/styles/main.less";
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: var(--black);
}
html {
  font-size: 16px;
  font-family: "Ubuntu";
}
</style>