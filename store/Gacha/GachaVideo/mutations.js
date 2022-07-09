export default {
  setVideo(state, videoType) {
    state.video = state.videos[videoType]
  },
  setVideosLocal(state, props){
    console.log(props)
    state.videos[props[0]] = props[1]
  }
}
