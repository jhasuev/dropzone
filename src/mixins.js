
export default {
  methods: {
    getImageURL(file){
      return `url(${file.isImage ? file.base64 : 'https://bit.ly/3e725Hj'})`
    },
  },
}
