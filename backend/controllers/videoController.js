import Video from "../models/Video.js";

export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ msg: "error in server" });
  }
};

export const getVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    res.json(video);
  } catch (err) {
    res.status(500).json({ msg: " error in server" });
  }
};
