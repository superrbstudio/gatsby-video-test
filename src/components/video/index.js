import React from "react"
import Player from "./player"

const Video = ({ data }) => (
  <section className="video">
    <div className="video__wrapper">
      <Player data={data} />
    </div>
  </section>
)

export default Video
