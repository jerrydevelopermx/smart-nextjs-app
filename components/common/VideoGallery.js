import React from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css"; // import css
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "next-i18next";

function VideoGallery(props) {
  const { t } = useTranslation("common");
  const useStyles = makeStyles((theme) => props.appStyles);
  const classes = useStyles();
  return (
    <div
      id="tour-scroll"
      ref={props.inputRef}
      className={classes.videoContainer}
    >
      <div className={classes.videoPlayer}>
        <h4>{t("Take a Tour")}</h4>
        {props.video ? (
          <Player fluid={true} autoPlay={false} src={props.video.src} />
        ) : null}
      </div>
    </div>
  );
}

export default VideoGallery;
