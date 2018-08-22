/**
 * Created by leguian on 20/08/2018.
 */
var feed = new Instafeed({
    get: 'popular',
    tagName: 'awesome',
    clientId: '1df79a5058474d36adfb3465f073b1a7',
    template: '<a class="animation" href="{{link}}"><img src="{{image}}" /></a>'
});
feed.run();
MicroModal.init({
    openTrigger: 'data-modal-open',
    closeTrigger: 'data-modal-close',
    disableScroll: true,
    disableFocus: false,
    awaitCloseAnimation: false,
    debugMode: true
});

tippy('.tooltip');