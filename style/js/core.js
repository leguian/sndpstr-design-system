/**
 * Created by leguian on 20/08/2018.
 */
jQuery(document).ready(function ($) {
    try {
        $("#instagram").jqinstapics({
            "user_id": "3567011117",
            "access_token": "3567011117.674061d.59160f04ba3c477b9ee08304569fa270",
            "count": 15
        });

        MicroModal.init({
            openTrigger: 'data-modal-open',
            closeTrigger: 'data-modal-close',
            disableScroll: true,
            disableFocus: false,
            awaitCloseAnimation: false,
            debugMode: true
        });

        tippy('.tooltip');

    } catch (err) {
        console.log(err)
    }
});