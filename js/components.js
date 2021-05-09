const components = {
  header: [
    {
      type: "link",
      label: "Home",
      url: "/",
      action: "",
      items: null,
    },
    {
      type: "submenu",
      label: "Our Services",
      url: "/",
      action: null,
      items: [
        { text: "Our Mission", action: "ourMission" },
        { text: "Who We Are", action: "whoWeAre" },
        { text: "Our Board & Staff", action: "board" },
        { text: "Sites Features", action: "features" },
        {
          text: "Sites Membership",
          action: "membership",
        },
        { text: "Events", action: "events" },
        { text: "Tour the Site", action: "tour" },
      ],
    },
    {
      type: "link",
      label: "Contact Us",
      url: "",
      action: "contactUs",
      items: null,
    },
    {
      type: "logo",
      label: null,
      url: null,
      action: null,
      items: null,
    },
    {
      type: "link",
      label: "Events",
      url: "/#events-scroll",
      action: null,
      items: null,
    },
    {
      type: "link",
      label: "Blog",
      url: "",
      action: "",
      items: null,
    },
    {
      type: "link",
      label: "Login",
      url: "/access/login",
      action: "",
      items: null,
    },
  ],
  footer: {
    columns: [
      {
        id: "foo1",
        title: "ABOUT US",
        options: [
          {
            text: "Who we are",
            url: "",
            action: "whoWeAre",
          },
          {
            text: "History",
            url: "",
            action: "history",
          },
          {
            text: "Contact",
            url: "",
            action: "contactUs",
          },
        ],
      },
      {
        id: "foo2",
        title: "DISCLAIMERS",
        options: [
          {
            text: "Site Policies",
            url: "",
            action: "sitePolicies",
          },
          {
            text: "Membership Policies",
            url: "",
            action: "membershipPolicies",
          },
          {
            text: "Customers Policies",
            url: "",
            action: "customersPolicies",
          },
          {
            text: "Visitors Policies",
            url: "",
            action: "visitorsPolicies",
          },
        ],
      },
      {
        id: "foo3",
        title: "TWEETS",
        options: [
          {
            text: "I would like...",
            url: "",
          },
          {
            text: "I have some...",
            url: "",
          },
        ],
        social: null,
      },
      {
        id: "foo4",
        title: "JOIN US",
        options: [
          {
            text: "Subscribe",
            url: "",
          },
        ],
      },
    ],
    copyright: "Copyright. 2020 | HLProductions ",
    socialNetworks: ["facebook", "twitter", "instagram", "youtube"],
  },
  toastifyConfig: {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: false,
  },

  modalTitles: {
    ourMission: "Mission",
    history: "History",
    contactUs: "Contact us",
    whoWeAre: "Who we are",
    board: "Board",
    features: "Features",
    membership: "Membership",
    sitePolicies: "Site Policies",
    membershipPolicies: "Membership Policies",
    customersPolicies: "Customer Policies",
    visitorsPolicies: "Visitors Policies",
  },
};

export default components;
