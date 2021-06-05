import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Link from "next/link";
import { useTranslation } from "next-i18next";

function MobileNavBar(props) {
  const { t } = useTranslation("header");
  const useStyles = makeStyles(props.styles);
  const classes = useStyles();
  const [state, setState] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const useStyles2 = makeStyles((theme) => ({
    listItem: {
      "& span": {
        fontFamily: props.fontFamily,
      },
    },
  }));
  const classes2 = useStyles2();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const handleClick = (event) => {
    setSubmenuOpen(!submenuOpen);
  };

  function getMenuLinks(item) {
    if (item.label === "Blog") {
      return props.blogLink !== "" ? props.blogLink : false;
    } else {
      return props.pageId !== 0
        ? "/store/" + props.pageId + item.url
        : item.url;
    }
  }
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        variant="temporary"
        onEscapeKeyDown={toggleDrawer}
        onBackdropClick={toggleDrawer}
        open={state}
        onOpen={() => {}}
        classes={{ paper: classes.paper }}
        onClose={toggleDrawer(false)}
      >
        <div role="presentation">
          <List style={props.appStyles.list}>
            {props.list &&
              props.list.map((element, index) =>
                element.type === "link" ? (
                  element.label === "Blog" &&
                  props.blogLink.indexOf("http") !== -1 ? (
                    <ListItemLink href={props.blogLink} key={element.label}>
                      <ListItemText
                        className={classes2.listItem}
                        primary={element.label}
                      />
                    </ListItemLink>
                  ) : (
                    <Link href="/" key={element.label}>
                      <ListItem
                        button
                        component="a"
                        to={getMenuLinks(element)}
                        key={element.label}
                        onClick={() => {
                          props.onClick(element.action);
                          toggleDrawer(false);
                        }}
                      >
                        <ListItemText
                          className={classes2.listItem}
                          primary={t(element.label)}
                        />
                      </ListItem>
                    </Link>
                  )
                ) : element.type === "submenu" ? (
                  <div key={"f" + index}>
                    <ListItem key={"s" + index} button onClick={handleClick}>
                      <ListItemText
                        className={classes2.listItem}
                        primary={t("Our Services")}
                      />
                      {submenuOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={submenuOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {element.items.map((submenu, index) => (
                          <ListItem
                            key={`sublist-${index}`}
                            button
                            onClick={() => {
                              props.onClick(submenu.action);
                              toggleDrawer(false);
                            }}
                            style={{ marginLeft: "10px" }}
                          >
                            <ListItemText
                              className={classes2.listItem}
                              primary={t(submenu.text)}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </div>
                ) : null
              )}
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default MobileNavBar;
