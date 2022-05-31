<template>
  <div class="base-header">
    <div class="fixed-header">
      <div class="title">
        Индивидуальное задание Неделько Н. М., 313 группа
      </div>
      <div class="subtitle">
        Демонстация поведения различных предметов в автомобиле, при его движении
      </div>
    </div>
  </div>
  <div class="base-container">
    <slot>
      <router-view />
    </slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({
  name: "layout",
})
export default class LayoutComponent extends Vue {}
</script>

<style lang="less" scoped>
.title {
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
}
.subtitle {
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
}


.base-header {
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 64px;
  }
  .fixed-header {
    z-index: 1000;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 64px;
    background-color: white;
    padding: 12px 24px;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.base-container {
  padding: 24px;
}
</style>