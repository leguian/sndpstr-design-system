/**
 * Created by leguian on 20/08/2018.
 */
MicroModal.init({
    openTrigger: 'data-modal-open',
    closeTrigger: 'data-modal-close',
    disableScroll: true,
    disableFocus: false,
    awaitCloseAnimation: false,
    debugMode: true
});

tippy('.tooltip');

// scrollMove( ele ,frame ,step )


jQuery(document).ready(function ($) {
    try {
        scrollMove('.medium',60 ,1 );

    } catch (err) {
        console.log(err)
    }
});