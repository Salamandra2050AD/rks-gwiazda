<template>
  <div class="pb-5 content">
    <keep-alive>
      <transition name="fade" mode="out-in" appear>
        <router-view></router-view>
      </transition>
    </keep-alive>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
