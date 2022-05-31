<template>
  <div class="car-demo-box">
    <ui-button
      v-if="isCarNoRides && !stopCarLeft"
      @click="startCar()"
      class="start-button"
    >
      Поехали!
    </ui-button>
    <ui-button
      v-if="isCarRides"
      @click="stopCar()"
      color="red"
      class="stop-button"
    >
      Стоп!
    </ui-button>
    <ui-button
      v-if="isCarNoRides && stopCarLeft"
      @click="restartCar()"
      class="restart-button"
    >
      Рестарт!
    </ui-button>
    <div class="bg" :class="{ dark: isCarNoRides && !stopCarLeft }">
      <div
        ref="car"
        :style="{ left: `${stopCarLeft}px` }"
        class="car"
        :class="{ paused: !isCarRides, rides: isCarRides }"
      ></div>
      <div class="road"></div>
    </div>
  </div>

  <div class="demonstrations-box">
    <div class="ball-demo-box">
      <div class="bg">
        <div
          class="ball"
          :class="{
            'start-rides': isCarRides,
            'stop-rides': isCarNoRides && stopCarLeft,
          }"
        ></div>
      </div>
    </div>

    <div class="pendulum-demo-box">
      <div class="bg">
        <div
          class="pendulum"
          :class="{
            'start-rides': isCarRides,
            'stop-rides': isCarNoRides && stopCarLeft,
          }"
        ></div>
      </div>
    </div>

    <div class="wather-demo-box">
      <div class="bg">
        <div class="bottle">
          <div
            class="ball"
            :class="{
              'start-rides': isCarRides,
              'stop-rides': isCarNoRides && stopCarLeft,
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({
  name: "main-page",
})
export default class MainPageComponent extends Vue {
  isCarRides = false;
  isCarNoRides = true;
  stopCarLeft = null;

  $refs: {
    car: HTMLElement;
  };

  startCar() {
    this.isCarRides = true;
    this.isCarNoRides = false;
  }
  stopCar() {
    this.stopCarLeft = this.$refs.car.offsetLeft;
    setTimeout(() => {
      this.stopCarLeft += 300;
    });
    this.isCarRides = false;
    this.isCarNoRides = true;
  }
  restartCar() {
    this.stopCarLeft = null;
    this.isCarRides = false;
  }
}
</script>

<style lang="less" scoped>
.demonstrations-box {
  display: flex;
  margin-top: 24px;
}

.wather-demo-box {
  width: 100%;
  .bg {
    background-color: var(--green);
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;

    .bottle {
      background-color: var(--blue);
      width: 400px;
      height: 200px;
      border-radius: 24px;
      position: relative;

      .ball {
        width: 96px;
        height: 48px;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        position: absolute;
        left: calc(50% - 48px);
        &.start-rides {
          animation-name: start_rides_wather;
          animation-duration: 1.5s;
          animation-iteration-count: 1;
          animation-timing-function: ease-in-out;
          animation-fill-mode: forwards;
        }

        &.stop-rides {
          animation-name: stop_rides_wather;
          animation-duration: 4.5s;
          animation-iteration-count: 1;
          animation-timing-function: ease-in-out;
        }
      }

      @keyframes start_rides_wather {
        0% {
          left: calc(50% - 48px);
        }
        100% {
          left: calc(100% - 96px);
        }
      }
      @keyframes stop_rides_wather {
        0% {
          left: calc(100% - 96px);
        }
        50% {
          left: calc(10%);
        }
        75% {
          left: calc(60%);
        }
        100% {
          left: calc(50% - 48px);
        }
      }

      &::after {
        content: "";
        display: inline-flex;
        position: absolute;
        right: -24px;
        top: calc(50% - 36px);
        background-color: var(--red);
        height: 72px;
        width: 24px;
        border-radius: 0px 8px 8px 0px;
      }
    }
  }
}

.ball-demo-box {
  overflow: hidden;
  position: relative;
  margin-right: 24px;
  width: 100%;
  transform: rotate(180deg);
  &::before {
    content: "";
    position: absolute;
    height: 24px;
    background-color: var(--red);
    top: 0;
    left: 0;
    right: 0;
  }
  .bg {
    height: 500px;
    display: flex;
    justify-content: center;
    background: var(--gray);
    .ball {
      transition: 3s;
      transform-origin: top;
      display: inline-flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      width: 6px;
      height: 464px;
      background: var(--red);
      &::before {
        content: "";
        display: inline-flex;
        width: 120px;
        height: 200px;
        border-radius: 120% 120% 100% 100%;
        background-color: var(--green);
      }

      &.start-rides {
        animation-name: start_rides_ball;
        animation-duration: 2s;
        animation-iteration-count: 1;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
      }

      &.stop-rides {
        animation-name: stop_rides_ball;
        animation-duration: 5s;
        animation-iteration-count: 1;
        animation-timing-function: ease-in-out;
      }

      @keyframes start_rides_ball {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(25deg);
        }
      }
      @keyframes stop_rides_ball {
        0% {
          transform: rotate(25deg);
        }
        50% {
          transform: rotate(-10deg);
        }
        75% {
          transform: rotate(5deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
    }
  }
}

.pendulum-demo-box {
  overflow: hidden;
  position: relative;
  margin-right: 24px;
  width: 100%;
  &::before {
    content: "";
    position: absolute;
    height: 24px;
    background-color: var(--red);
    top: 0;
    left: 0;
    right: 0;
  }
  .bg {
    height: 500px;
    display: flex;
    justify-content: center;
    background: var(--blue);
    .pendulum {
      transition: 3s;
      transform-origin: top;
      display: inline-flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      width: 6px;
      height: 400px;
      background: var(--red);
      &::before {
        content: "";
        display: inline-flex;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: var(--black);
      }

      &.start-rides {
        animation-name: start_rides;
        animation-duration: 2.5s;
        animation-iteration-count: 1;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
      }

      &.stop-rides {
        animation-name: stop_rides;
        animation-duration: 4s;
        animation-iteration-count: 1;
        animation-timing-function: ease-in-out;
      }

      @keyframes start_rides {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(40deg);
        }
      }
      @keyframes stop_rides {
        0% {
          transform: rotate(40deg);
        }
        50% {
          transform: rotate(-30deg);
        }
        75% {
          transform: rotate(10deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
    }
  }
}

.car-demo-box {
  height: 500px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .start-button,
  .stop-button,
  .restart-button {
    z-index: 10;
  }
  .stop-button,
  .restart-button {
    position: absolute;
    right: 24px;
    top: 24px;
  }
  .bg {
    background-color: var(--blue);
    position: absolute;
    overflow: hidden;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    &.dark {
      filter: brightness(50%);
    }

    .car {
      width: 500px;
      height: 500px;
      background-image: url(@/assets/images/car.png);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      left: calc(50% - 250px);
      z-index: 2;
      transition: 2s;

      &.rides {
        animation-name: car;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }

      &.paused {
        animation-play-state: paused;
      }
    }

    .road {
      background-color: var(--gray);
      height: 250px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    }

    @keyframes car {
      0% {
        left: -525px;
      }
      100% {
        left: calc(100% + 25px);
      }
    }
  }
}
</style>