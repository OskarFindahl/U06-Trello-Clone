$.widget("custom.colors", {
  options: {
    red: 255,
    green: 0,
    blue: 0,

    change: null,
    random: null,
  },

  _create: function () {
    this.element.addClass("custom-colorize");

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
    var colors = {
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256),
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
