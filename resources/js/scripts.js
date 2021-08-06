var g_interval;
new fullpage("#fullpage", {
  afterLoad: function (origin, destination, direction) {
    clearInterval(g_interval);

    // 1000 milliseconds lapse
    const lapse = 1000;

    if (destination.item.querySelectorAll(".fp-slides").length) {
      g_interval = setInterval(function () {
        setInterval(function () {
          $.fn.fullpage.moveSlideRight();
        }, 2000);
      }, lapse);
    }
  },
});

$("#fullpage").fullpage({
  anchors: ["s3"],
  sectionsColor: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"],
});

var startSlideSections = function () {};

startSlideSections();
