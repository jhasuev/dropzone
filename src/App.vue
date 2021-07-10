<template>
  <div class="app">
    <h1 class="header">File uploader</h1>
    
    <div
      class="dropzone"
      @drop.prevent="drop"
      @dragenter.prevent="dragEnter"
      @dragleave.prevent="dragLeave"
      @dragover.prevent="dragOver"
    >
      {{ getDropzoneText }}
    </div>

    <button class="btn">Отправить</button>
    
    <div class="miniatures">
      <div class="miniatures__list">
        <div class="miniatures__list-item">
          <div class="miniatures__list-preview" style="background-image: url(https://picsum.photos/200/300)" />
          <div class="miniatures__list-title">Картинка №1</div>
        </div>
        <div class="miniatures__list-item">
          <div class="miniatures__list-preview" style="background-image: url(https://picsum.photos/200/300)" />
          <div class="miniatures__list-title">Картинка №1Картинка №1Картинка №1</div>
        </div>
        <div class="miniatures__list-item">
          <div class="miniatures__list-preview" style="background-image: url(https://picsum.photos/200/300)" />
          <div class="miniatures__list-title">Картинка №1</div>
        </div>
        <div class="miniatures__list-item">
          <div class="miniatures__list-preview" style="background-image: url(https://picsum.photos/200/300)" />
          <div class="miniatures__list-title">Картинка №1</div>
        </div>
        <div class="miniatures__list-item">
          <div class="miniatures__list-preview" style="background-image: url(https://picsum.photos/200/300)" />
          <div class="miniatures__list-title">Картинка №1</div>
        </div>
        <div class="miniatures__list-item">
          <div class="miniatures__list-preview" style="background-image: url(https://picsum.photos/200/300)" />
          <div class="miniatures__list-title">Картинка №1</div>
        </div>
        <div class="miniatures__list-item">
          <div class="miniatures__list-preview" style="background-image: url(https://picsum.photos/200/300)" />
          <div class="miniatures__list-title">Картинка №1</div>
        </div>
        <div class="miniatures__list-item">
          <div class="miniatures__list-preview" style="background-image: url(https://picsum.photos/200/300)" />
          <div class="miniatures__list-title">Картинка №1</div>
        </div>
        <div class="miniatures__list-item">
          <div class="miniatures__list-preview" style="background-image: url(https://picsum.photos/200/300)" />
          <div class="miniatures__list-title">Картинка №1</div>
        </div>
        <div class="miniatures__list-item">
          <div class="miniatures__list-preview" style="background-image: url(https://picsum.photos/200/300)" />
          <div class="miniatures__list-title">Картинка №1</div>
        </div>
        <div class="miniatures__list-item">
          <div class="miniatures__list-preview" style="background-image: url(https://picsum.photos/200/300)" />
          <div class="miniatures__list-title">Картинка №1</div>
        </div>
        <div class="miniatures__list-item">
          <div class="miniatures__list-preview" style="background-image: url(https://picsum.photos/200/300)" />
          <div class="miniatures__list-title">Картинка №1</div>
        </div>
        <div class="miniatures__list-item">
          <div class="miniatures__list-preview" style="background-image: url(https://picsum.photos/200/300)" />
          <div class="miniatures__list-title">Картинка №1</div>
        </div>
      </div>
      <div class="miniatures__text">Здесь будут отображаться ваши загруженные файлы.</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'App',
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
      drop(){
        this.state = "drop"
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
  .app {
    padding: 0 15px 50px;
    text-align: center;
    background-color: #F4F4F6;
    min-height: 100vh;
  }

  .header {
    padding: 20px 0;
    margin-bottom: 50px;

    font-weight: bold;
    font-size: 30px;
    color: #666;
    border-bottom: 1px solid #ddd;
  }

  .dropzone {
    max-width: 520px;
    min-height: 420px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 1px solid #ddd;
    color: #999;

    margin-bottom: 20px;
  }

  .btn {
    margin-bottom: 20px;
  }

  .miniatures {
    padding: 20px;
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
    overflow: hidden;

    &__list {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 600px;
      margin: -10px;

      &-item {
        width: 150px;
        border-radius: 10px;
        overflow: hidden;

        border: 2px solid #333;
        background-color: #333;
        margin: 10px;
      }
      &-preview {
        min-height: 115px;
        background: #fff center center no-repeat;
        background-size: contain;
      }
      &-title {
        color: #ddd;
        padding: 10px 5px;
        font-size: 12px;
      }
    }
    
    &__text {
      color: #777;
    }
  }
</style>
