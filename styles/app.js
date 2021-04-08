const styles = {
  body: {
    background: "#fff",
    fontFamily: "Verdana",
  },

  header: {
    toolbarSecondary: {
      justifyContent: "space-between",
      overflowX: "auto",
    },
    headerMenu: {
      textAlign: "center",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
        cursor: "pointer",
      },
    },
    modalMenu: {
      list: {
        width: "180px",
      },
    },
    backHome: {
      div: {
        backgroundColor: "#043C94",
        position: "fixed",
        left: "5px",
        height: "38px",
        width: "65px",
        zIndex: 1,
        borderBottomLeftRadius: "25%",
        borderBottomRightRadius: "25%",
        textAlign: "center",
        boxShadow: "-4px 4px 8px #A9A9A9",
      },
      img: { height: "30px", marginTop: "3px" },
    },
  },
  container: {
    width: "95%",
    marginTop: "15px",
    marginBottom: "15px",
  },
  noResults: {
    container: {
      marginTop: "20px",
      width: "100%",
      textAlign: "center",
    },
    text: {
      fontSize: "25px",
    },
  },
  slider: {
    textAlign: "center",
  },
  searchFilter: {
    main: {
      border: "1px solid #ccc",
      zIndex: "1",
      margin: "20px",
      borderRadius: "8px",
    },
    container: { padding: "15px" },
    formControl: {
      width: "100%",
    },
  },
  grid: {
    cardGrid: {
      paddingTop: "30px",
      paddingBottom: "30px",
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  },
  video: {
    videoContainer: {
      marginTop: "30px",
      marginBottom: "30px",
    },
    videoPlayer: {
      margin: "auto",
      width: "85%",
      textAlign: "center",
    },
  },
  footer: {
    bottomBar: {
      padding: "25px",
      fontSize: "11px",
    },
    footerUlList: {
      listStyleType: "circle",
      padding: "5% 15%",
      margin: "auto",
      textAlign: "left",
    },
    footerLinks: {
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    centeredContent: {
      margin: "auto",
      textAlign: "center",
    },
    socialMediaIcons: {
      width: "26px",
      margin: "0 3px",
    },
  },

  buttons: {
    add: {
      root: {
        color: "#fff",
        backgroundColor: "#228b22",
        hover: {
          backgroundColor: "#1b6f1b",
        },
      },
    },
    delete: {
      root: {
        color: "#fff",
        backgroundColor: "#CC0000",
        hover: {
          backgroundColor: "#7A0000",
        },
      },
    },

    closeModal: {
      root: {
        color: "#fff",
        backgroundColor: "#590F10",
        hover: {
          backgroundColor: "#350909",
        },
      },
    },
    addToCart: {
      root: {
        color: "#fff",
        backgroundColor: "#228b22",
        hover: {
          backgroundColor: "#1b6f1b",
        },
      },
    },

    wishList: {
      root: {
        color: "#fff",
        backgroundColor: "#6c4675",
        hover: {
          backgroundColor: "#56385e",
        },
      },
    },
    checkout: {
      root: {
        color: "#fff",
        backgroundColor: "#cccc00",
        hover: {
          backgroundColor: "#a3a300",
        },
      },
    },
    viewMore: {
      root: {
        color: "#fff",
        backgroundColor: "#ffa500",
        hover: {
          backgroundColor: "#cc8400",
        },
      },
    },
    change: {
      root: {
        color: "#fff",
        backgroundColor: "#ffa500",
        hover: {
          backgroundColor: "#cc8400",
        },
      },
    },
    cms: {
      root: {
        color: "#fff",
        backgroundColor: "#BB11DD",
        hover: {
          backgroundColor: "#700A84",
        },
      },
    },
    campaigns: {
      root: {
        color: "#fff",
        backgroundColor: "#B86342",
        hover: {
          backgroundColor: "#6E3B27",
        },
      },
    },
    inventory: {
      root: {
        color: "#fff",
        backgroundColor: "#1AB1CD",
        hover: {
          backgroundColor: "#0F6A7B",
        },
      },
    },
  },

  admin: {
    colorPickerDiv: {
      width: "35px",
      height: "35px",
      border: "3px solid #aaa",
    },
  },
  //Admin - Color picker
  colorPicker: {
    container: {
      padding: "5px",
      width: "40px",
      background: "#ccc",
      borderRadius: "1px",
      boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
      display: "block",
      cursor: "pointer",
    },
    activeDiv: {
      position: "absolute",
      zIndex: "2",
    },
    pickerContainer: {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
    },
  },

  cmsSlidesPreview: { height: "90px", padding: "5px" },
  cmsSubmitButton: { padding: "30px", textAlign: "center" },
};

export default styles;
