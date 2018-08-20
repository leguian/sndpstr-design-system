/**
 * Created by leguian on 20/08/2018.
 */
var $el = $("#frame");
var elHeight = $el.outerHeight();
var elWidth = $el.outerWidth();

var $wrapper = $("#wrapper");
var wrapperHeight = $wrapper.height();

scale = Math.min(
    $wrapper.width() / elWidth,
    $wrapper.height() / elHeight
);

$el.css({
    transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
});

$(window).resize(doResize);

function doResize() {

    var scale, origin;
    var $wrapper = $("#wrapper");
    var $el = $("#frame");

    scale = Math.min(
        $wrapper.width() / elWidth,
        $wrapper.height() / elHeight
    );

    console.log("scale:", scale)
    console.log("wrapperHeight", wrapperHeight)

    $el.css({
        transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
    });
    //$wrapper.css({ height: wrapperHeight*scale });

}