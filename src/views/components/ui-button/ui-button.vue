<template>
  <button class="ui-button" :class="color">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Options, Vue, Prop } from "vue-property-decorator";

@Options({
  name: "ui-button",
})
export default class UiButtonComponent extends Vue {
  @Prop({ default: "green" }) color: "red" | "green";
}
</script>

<style lang="less" scoped>
.ui-button {
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.15s;
  outline: none;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(90%);
  }

  &.green {
    background-color: var(--green);
  }
  &.red {
    background-color: var(--red);
  }
}
</style>