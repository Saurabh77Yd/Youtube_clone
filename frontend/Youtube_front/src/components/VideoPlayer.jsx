const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="video-player">
      <video src={videoUrl} controls />
    </div>
  );
};

export default VideoPlayer;
