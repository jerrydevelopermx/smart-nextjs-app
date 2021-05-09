import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { useTranslation } from "next-i18next";

function SocialMedia(props) {
  const { t } = useTranslation("common");
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
                title={t("Go to") + network}
                aria-label={t("Go to") + network}
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
