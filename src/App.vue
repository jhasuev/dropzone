<template>
  <div class="app">
    <h1 class="header">File uploader</h1>
    
    <dropzone :files="files" :file="file" @selectFile="selectFile" />

    <button class="btn" @click="send">Отправить</button>
    
    <miniatures :files="files" />
  </div>
</template>

<script>
  import Miniatures from "./components/Miniatures"
  import Dropzone from "./components/Dropzone"
  export default {
    name: 'App',
    components: {
      Miniatures,
      Dropzone,
    },
    data(){
      return {
        files: [],
        file: null,
      }
    },

    methods: {
      selectFile(e){
        const file = e.dataTransfer.files[0]

        if(file && !this.fileAlreadyUploaded(file.name)) {
          const reader = new FileReader()
          reader.onload = e => {
            this.file = {
              name: file.name,
              isImage: file.type.split('/').shift() == 'image',
              base64: e.target.result,
            }
          }
          reader.readAsDataURL(file)
        }
      },

      fileAlreadyUploaded(name){
        return this.files.some(file => file.name === name)
      },

      send(){
        if(this.file) {
          if (this.file.isImage) {
            console.log(this.file.base64)
          }

          this.files.push(this.file)
          this.file = null
        }
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
    border-bottom: 1px solid #ddd;
  }

  .btn {
    margin-bottom: 20px;
  }

</style>
