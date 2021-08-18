import video from '../../assets/img/background.mp4'

const BackGroundVideo = () => {
  return (
      <video autoPlay loop muted id="bgVideo">
        <source type="video/mp4" src={video} />
        <source type="video/webm" src={video} />
      </video>
  );
};

export default BackGroundVideo;
