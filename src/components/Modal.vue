<template>
  <transition name="app-modal-fade">
    <div class="app-modal-backdrop">
      <div
        class="app-modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="app-modal-header" id="modalTitle">
          <button type="button" class="btn-close" @click="close" aria-label="Close app-modal">x</button>
        </header>
        <section class="app-modal-body" id="modalDescription">
          <slot name="body"></slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "app-modal",
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style>
.app-modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.app-modal-header,
.app-modal-footer {
  padding: 15px;
  display: flex;
}

.app-modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.app-modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.app-modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>