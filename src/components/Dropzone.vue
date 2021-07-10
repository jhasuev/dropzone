<template>
  <div
    class="dropzone"
    @drop.prevent="drop"
    @dragenter.prevent="dragEnter"
    @dragleave.prevent="dragLeave"
    @dragover.prevent="dragOver"
  >
    <div
      v-if="file"
      :style="{'background-image': getImageURL(file)}"
      class="dropzone__preview"
    />
    <span v-else>
      {{ getDropzoneText }}
    </span>
  </div>
</template>

<script>
  import mixins from "../mixins"
  export default {
    name: 'Dropzone',
    mixins: [mixins],
    props: {
      files: { type: Array, default: () => [] },
      file: { type: Object, default: () => ({}) },
    },
    data(){
      return {
        states: {
          drop: "Перенесите файл сюда!",
          dragenter: "Отпускайте сюда эти файлы.",
          dragleave: "Перенесите файл сюда!",
          dragover: "Отпускайте сюда эти файлы.",
        },
        state: "drop",
      }
    },

    computed: {
      getDropzoneText(){
        return this.states[this.state]
      }
    },

    methods: {
      drop(e){
        this.state = "drop"
        this.$emit("selectFile", e)
      },

      dragEnter(){
        this.state = "dragenter"
      },

      dragLeave(){
        this.state = "dragleave"
      },

      dragOver(){
        this.state = "dragover"
      },
    },
  }
</script>

<style scoped lang="scss">

  .dropzone {
    position: relative;

    max-width: 520px;
    min-height: 420px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 1px solid #ddd;
    color: #999;

    overflow: hidden;
    margin-bottom: 20px;

    &__preview {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;

      background: center center no-repeat;
      background-size: contain;
    }
  }

</style>
