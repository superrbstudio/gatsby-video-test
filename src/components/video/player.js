import React, { Component } from "react"
import ReactPlayer from "react-player"

export default class Player extends Component {
  state = {
    playing: false,
    played: 0,
    loaded: 0,
  }

  player = null

  ref = player => {
    this.player = player
  }

  handlePlay = () => {
    this.setState({ playing: true })
  }

  handlePause = () => {
    this.setState({ playing: false })
  }

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing })
  }

  handleSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  handleSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  handleProgress = state => {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  render() {
    const {
      data: {
        url: { url },
      },
    } = this.props
    const { playing, played, loaded } = this.state

    const cover = {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
    }

    return (
      <div className="video-wrapper">
        <ReactPlayer
          ref={this.ref}
          url={url}
          playing={playing}
          onPlay={this.handlePlay}
          onPause={this.handlePause}
          onProgress={this.handleProgress}
        />

        <div
          className="video-wrapper__controls"
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={this.handlePlayPause}
            style={{
              flex: "0 0 auto",
              marginRight: "1em",
            }}
          >
            {playing ? "Pause" : "Play"}
          </button>

          <div
            className="video-wrapper__progress-bars"
            style={{
              flex: "1 1",
              position: "relative",
            }}
          >
            <progress
              className="video-wrapper__progress video-wrapper__progress--loaded"
              max={1}
              value={loaded}
              style={{ ...cover }}
            />
            <progress
              className="video-wrapper__progress video-wrapper__progress--played"
              max={1}
              value={played}
              style={{ ...cover }}
            />
            <input
              type="range"
              min={0}
              max={0.999999}
              step="any"
              value={played}
              onMouseDown={this.handleSeekMouseDown}
              onChange={this.handleSeekChange}
              onMouseUp={this.handleSeekMouseUp}
              style={{ ...cover }}
            />
          </div>
        </div>
      </div>
    )
  }
}
