<template>
  <div class="miniatures">
    <div v-if="files.length" class="miniatures__list">
      <div
        v-for="(file, i) in files"
        :key="i"
        class="miniatures__list-item"
      >
        <div
          class="miniatures__list-preview"
          :style="{'background-image': getImageURL(file)}"
        />
        <div class="miniatures__list-title">{{ file.name }}</div>
      </div>
    </div>
    <div v-else class="miniatures__text">Здесь будут отображаться ваши загруженные файлы.</div>
  </div>
</template>

<script>
  import mixins from "../mixins"
  export default {
    name: 'Miniatures',
    mixins: [mixins],
    props: {
      files: { type: Array, default: () => [] },
    },
  }
</script>

<style scoped lang="scss">
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
