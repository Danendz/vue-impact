export default {
  setVideo(state, videoType) {
    const videos = {
      bg: '/gachaVideos/backgroundCropped.mp4',
      '3star1': '/gachaVideos/3star1comp.mp4',
      '4star1': '/gachaVideos/4star1comp.mp4',
      '4star10': '/gachaVideos/4star10comp.mp4',
      '5star1': '/gachaVideos/5star1comp.mp4',
      '5star10': '/gachaVideos/5star10comp.mp4',
    }
    state.video = videos[videoType]
  },
}
