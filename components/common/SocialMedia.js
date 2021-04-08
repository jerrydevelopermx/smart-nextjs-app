import React from "react";
import Tooltip from "@material-ui/core/Tooltip";

function SocialMedia(props) {
  return (
    <div>
      {props.availableNetworks &&
        props.availableNetworks.length > 0 &&
        props.availableNetworks.map((network, index) =>
          props.networks[index].link !== "" ? (
            <a
              key={"social-" + index}
              target="_new"
              href={props.networks[index].link}
            >
              <Tooltip
                title={"Go to " + network}
                aria-label={"Go to " + network}
              >
                <img
                  key={"netw-" + index}
                  src={`/imgs/icons/${network}-icon.png`}
                  alt={network}
                  className={props.styles}
                />
              </Tooltip>
            </a>
          ) : null
        )}
    </div>
  );
}

export default SocialMedia;
