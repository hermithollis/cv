<template>
<transition v-if="modalInfo.showModal" name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <h3>{{modalInfo.modalHeader}}</h3>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              {{modalInfo.modalBody}}
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              {{modalInfo.modalFooter}}
              <button class="modal-button" @click="$emit('closeModal')">
                {{modalInfo.modalButtonText}}
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Modal',
  props: ['modalInfo']
}
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .7);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50%;
  height: 20%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: var(--dark-blue);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  /* border: 1px solid white; */
}

.modal-header h3 {
  margin-top: 0;
  color: var(--light-pink);
}

.modal-body {
  margin: 20px 0;
  color: white;
}

.modal-button {
  background-color: var(--light-pink);
  color: white;
  border: none;
  border-radius: 25px;
  height: 100%;
  width: 20%;
}

.modal-button {
  background-color: var(--light-pink);
  color: white;
  border: none;
  border-radius: 25px;
  height: 100%;
  width: 20%;
  cursor: pointer;
}

.modal-button:hover {
  background-color: white;
  color: var(--light-pink);
  font-weight: bold;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  height: 20%;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
