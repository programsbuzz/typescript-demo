(function () {
  !function (i) {
    var l = {
      initPanel: function (a, n, t, e) {
        l.htmlButtonCotrol(a), l.openFirstPanel(a), l.paneControl(a);
        i(a);
        (t = i(t)), i(e);
        t.on("click", function () {
          i(this).parent().hasClass("active")
            ? i(this).parent().removeClass("active")
            : i(this).parent().addClass("active");
        });
      },
      htmlButtonCotrol: function (a) {
        i(a).prepend(
          '<div class="field__item course-panel-action"><a href="#" class="btn-panel-control">Expand all sections</a></div>'
        );
      },
      openFirstPanel: function (a) {
        var n = 1;
        i(a)
          .find(".paragraph")
          .each(function () {
            1 == n && i(this).addClass("active"), n++;
          });
      },
      paneControl: function (n) {
        i(".btn-panel-control").on("click", function (a) {
          a.preventDefault(),
            i(this).hasClass("expand-all")
              ? (i(this)
                  .parents(n)
                  .find(".paragraph")
                  .each(function () {
                    i(this).removeClass("active");
                  }),
                i(this).removeClass("expand-all"),
                i(this).html("Expand all sections"))
              : (i(this)
                  .parents(n)
                  .find(".paragraph")
                  .each(function () {
                    i(this).addClass("active");
                  }),
                i(this).addClass("expand-all"),
                i(this).html("Collapse all sections"));
        });
      },
    };
    i(document).ready(function () {
      l.initPanel(
        ".field--name-field-chapter",
        "paragraph ",
        ".field--name-field-chapter-name",
        ".field--name-field-topic-name"
      );
    });
};
});