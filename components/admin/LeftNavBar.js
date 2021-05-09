import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import GroupIcon from "@material-ui/icons/Group";
import AssessmentIcon from "@material-ui/icons/Assessment";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import DvrIcon from "@material-ui/icons/Dvr";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PostAddIcon from "@material-ui/icons/PostAdd";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import UpdateIcon from "@material-ui/icons/Update";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ListAltIcon from "@material-ui/icons/ListAlt";
import StoreIcon from "@material-ui/icons/Store";
import TuneIcon from "@material-ui/icons/Tune";
import access from "../../js/access";
import { useTranslation } from "next-i18next";

function LeftNavBar(props) {
  const { t } = useTranslation("admin");
  let pageAccess = access.getUserAccess("leftNavBar");
  console.log(pageAccess);
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: props.styles.topbar.background,
      color: props.styles.headermenu.color,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    icon: {
      color: props.styles.headermenu.color,
    },
    listItem: {
      "& span": {
        color: props.styles.headermenu.color,
        fontFamily: props.fontFamily,
      },
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState({
    site: true,
    department: true,
    users: true,
  });

  const handleClick = (section) => {
    setOpen({ ...open, ...{ [section]: !open[section] } });
  };
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {pageAccess.elements.siteMenuOptions ? (
        <>
          <ListItem button onClick={() => handleClick("site")}>
            <ListItemIcon className={classes.icon}>
              <DesktopMacIcon />
            </ListItemIcon>
            <ListItemText className={classes.listItem} primary={t("Site")} />
            {open.site ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open.site} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link
                href="/[id]/[section]"
                as={
                  props.pageId !== "0"
                    ? `/store/${props.pageId}/admin/cms`
                    : `/admin/cms`
                }
              >
                <ListItem button className={classes.nested} component="a">
                  <ListItemIcon className={classes.icon}>
                    <ArtTrackIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.listItem}
                    primary="Content Management"
                  />
                </ListItem>
              </Link>
              <Link
                href="/[id]/[section]"
                as={
                  props.pageId !== "0"
                    ? `/store/${props.pageId}/admin/campaigns`
                    : `/admin/campaigns`
                }
              >
                <ListItem button className={classes.nested} component="a">
                  <ListItemIcon className={classes.icon}>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.listItem}
                    primary="Campaign Management"
                  />
                </ListItem>
              </Link>

              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icon}>
                  <DvrIcon />
                </ListItemIcon>
                <ListItemText
                  className={classes.listItem}
                  primary="Monitoring"
                />
              </ListItem>

              <Link href="/[id]/[section]" as={`/admin/incidents`}>
                <ListItem
                  button
                  className={classes.nested}
                  component="a"
                  href={`/admin/incidents`}
                >
                  <ListItemIcon className={classes.icon}>
                    <ReportProblemIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.listItem}
                    primary="Incident Management"
                  />
                </ListItem>
              </Link>
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icon}>
                  <UpdateIcon />
                </ListItemIcon>
                <ListItemText
                  className={classes.listItem}
                  primary="Maintenance"
                />
              </ListItem>

              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icon}>
                  <AssessmentIcon />
                </ListItemIcon>
                <ListItemText
                  className={classes.listItem}
                  primary={t("Reports")}
                />
              </ListItem>
            </List>
          </Collapse>
        </>
      ) : null}

      <ListItem button onClick={() => handleClick("department")}>
        <ListItemIcon className={classes.icon}>
          <StoreIcon />
        </ListItemIcon>
        <ListItemText className={classes.listItem} primary={t("Department")} />
        {open.department ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.department} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {pageAccess.elements.siteMenuOptions ? (
            <>
              <Link
                href="/[id]/[section]"
                as={
                  props.pageId !== "0"
                    ? `/store/${props.pageId}/admin/departments`
                    : `/admin/departments`
                }
              >
                <ListItem button className={classes.nested} component="a">
                  <ListItemIcon className={classes.icon}>
                    <PostAddIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.listItem}
                    primary={t("Creation and Maintenance")}
                  />
                </ListItem>
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/[id]/[section]"
                as={
                  props.pageId !== "0"
                    ? `/store/${props.pageId}/admin/cms`
                    : `/admin/cms`
                }
              >
                <ListItem button className={classes.nested} component="a">
                  <ListItemIcon className={classes.icon}>
                    <ArtTrackIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.listItem}
                    primary={t("Content Management")}
                  />
                </ListItem>
              </Link>
              <Link
                href="/[id]/[section]"
                as={
                  props.pageId !== "0"
                    ? `/store/${props.pageId}/admin/campaigns`
                    : `/admin/campaigns`
                }
              >
                <ListItem button className={classes.nested} component="a">
                  <ListItemIcon className={classes.icon}>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.listItem}
                    primary={t("Campaign Manager")}
                  />
                </ListItem>
              </Link>
              <Link
                href="/[id]/[section]"
                as={
                  props.pageId !== "0"
                    ? `/store/${props.pageId}/admin/inventory`
                    : `/admin/inventory`
                }
              >
                <ListItem button className={classes.nested} component="a">
                  <ListItemIcon className={classes.icon}>
                    <ListAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.listItem}
                    primary={t("Inventory Management")}
                  />
                </ListItem>
              </Link>

              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icon}>
                  <AddShoppingCartIcon />
                </ListItemIcon>
                <ListItemText
                  className={classes.listItem}
                  primary={t("Orders Management")}
                />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icon}>
                  <MonetizationOnIcon />
                </ListItemIcon>
                <ListItemText
                  className={classes.listItem}
                  primary={t("Payments Management")}
                />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icon}>
                  <AssessmentIcon />
                </ListItemIcon>
                <ListItemText
                  className={classes.listItem}
                  primary={t("Reports")}
                />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon className={classes.icon}>
                  <TuneIcon />
                </ListItemIcon>
                <ListItemText
                  className={classes.listItem}
                  primary={t("Analytics")}
                />
              </ListItem>
            </>
          )}
        </List>
      </Collapse>
      <ListItem button onClick={() => handleClick("users")}>
        <ListItemIcon className={classes.icon}>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText className={classes.listItem} primary={t("Users")} />
        {open.users ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.users} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link
            href="/[id]/[section]"
            as={
              props.pageId === "0"
                ? "/admin/users"
                : `/store/${props.pageId}/admin/users`
            }
          >
            <ListItem button className={classes.nested} component="a">
              <ListItemIcon className={classes.icon}>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText
                className={classes.listItem}
                primary={t("Creation and Maintenance")}
              />
            </ListItem>
          </Link>

          <Link
            href="/[id]/[section]"
            as={
              props.pageId !== "0"
                ? `/store/${props.pageId}/admin/userQueries`
                : `/admin/userQueries`
            }
          >
            <ListItem button className={classes.nested} component="a">
              <ListItemIcon className={classes.icon}>
                <PlaylistAddCheckIcon />
              </ListItemIcon>
              <ListItemText
                className={classes.listItem}
                primary={t("Queries and Lists")}
              />
            </ListItem>
          </Link>
          <Link
            href="/[id]/[section]"
            as={
              props.pageId !== "0"
                ? `/store/${props.pageId}/admin/userTracker`
                : `/admin/userTracker`
            }
          >
            <ListItem button className={classes.nested} component="a">
              <ListItemIcon className={classes.icon}>
                <TrendingUpIcon />
              </ListItemIcon>
              <ListItemText
                className={classes.listItem}
                primary={t("Activity tracker")}
              />
            </ListItem>
          </Link>
          <ListItem button className={classes.nested}>
            <ListItemIcon className={classes.icon}>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText className={classes.listItem} primary={t("Reports")} />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

export default LeftNavBar;
