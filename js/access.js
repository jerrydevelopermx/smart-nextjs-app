let pageAccess = {
  user: {},
  hasAccess: false,
  elements: {
    siteMenuOptions: false,
    storeMenuOptions: false,
  },
};

const pagesAccesses = {
  leftNavBar: [1, 2, 3, 4, 5, 6],
};
const elementsAccess = {
  leftNavBar: {
    siteMenuOptions: [1, 2, 3, 4],
    storeMenuOptions: [5, 6],
  },
};
const access = {
  getUserAccess: function (page) {
    pageAccess.user = JSON.parse(localStorage.getItem("user"));
    pageAccess.hasAccess =
      pagesAccesses[page].indexOf(pageAccess.user.userType) !== -1;
    for (var i in elementsAccess[page]) {
      pageAccess.elements[i] =
        elementsAccess[page][i].indexOf(pageAccess.user.userType) !== -1;
    }

    return pageAccess;
  },
};

export default access;
