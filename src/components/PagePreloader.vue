<template>
  <div class="preloader full-width">
    <div class="preloader-dotline">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<style lang="scss">
.preloader.full-width {
  width: 100%;
  height: 120px;
  margin-left: 0px;
  margin-right: 0px;
}

.preloader {
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 45%;
  margin: 5%;
  position: relative;
}

.preloader-dotline .dot {
  display: inline-block;
  background: #666;
  height: 5px;
  width: 5px;
  opacity: 0;
  border-radius: 50%;
  animation: dotline-move 4s infinite;
  transform: translateX(-300px);
}

.preloader-dotline .dot:nth-child(1) {
  animation-delay: 0.8s;
}

.preloader-dotline .dot:nth-child(2) {
  animation-delay: 0.7s;
}

.preloader-dotline .dot:nth-child(3) {
  animation-delay: 0.6s;
}

.preloader-dotline .dot:nth-child(4) {
  animation-delay: 0.5s;
}

.preloader-dotline .dot:nth-child(5) {
  animation-delay: 0.4s;
}

.preloader-dotline .dot:nth-child(6) {
  animation-delay: 0.3s;
}

.preloader-dotline .dot:nth-child(7) {
  animation-delay: 0.2s;
}

.preloader-dotline .dot:nth-child(8) {
  animation-delay: 0.1s;
}

@keyframes dotline-move {
  40% {
    transform: translateX(0px);
    opacity: 0.8;
  }
  100% {
    transform: translateX(300px);
    opacity: 0;
  }
}
</style>