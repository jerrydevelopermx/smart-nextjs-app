const functions = {
  getHoverColor: function (mainColor) {
    var arr = mainColor
      .substring(mainColor.indexOf("(") + 1, mainColor.indexOf(")"))
      .split(",")
      .map(function (num) {
        return Number(num) - 30 > 0 ? Number(num) - 30 : 0;
      });

    return "rgb(" + arr.toString() + ")";
  },
};

export default functions;
