$.widget("custom.colors", {
  options: {
    red: 255,
    green: 0,
    blue: 0,

    change: null,
    random: null,
  },

  _create: function () {
    this.changer = this.element.find("#tabs-1").find("button");

    this._on(this.changer, {
      click: "random",
    });

    this._refresh();
  },

  _refresh: function () {
    this.element.css(
      "background-color",
      "rgb(" +
        this.options.red +
        "," +
        this.options.green +
        "," +
        this.options.blue +
        ")"
    );

    this._trigger("change");
  },

  random: function (event) {
    prevColor = this.element[0].style.backgroundColor;

    if (prevColor === "rgb(255, 0, 0)")
      var colors = {
        red: 0,
        green: 255,
        blue: 0,
      };

    if (prevColor === "rgb(0, 255, 0)")
      var colors = {
        red: 0,
        green: 0,
        blue: 255,
      };

    if (prevColor === "rgb(0, 0, 255)")
      var colors = {
        red: 255,
        green: 0,
        blue: 0,
      };

    if (this._trigger("random", event, colors) !== false) {
      this.option(colors);
    }
  },

  _setOptions: function () {
    this._superApply(arguments);
    this._refresh();
  },
});
