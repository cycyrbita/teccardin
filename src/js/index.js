
$(document).ready(function () {
    Start();

    function Start() {
        var m = 21,
            s = 0;

        if (m <= 9) {
            m = "0" + m;
        };

        var timerId = setTimeout(function tick() {
            if (s != 0) {
                s = s - 1;

                if (s <= 9) {
                    s = "0" + s;
                }
            } else {
                if (m != 0) {
                    m = m - 1;
                    s = 59;

                    if (m <= 9) {
                        m = "0" + m;
                    }
                } else {
                    return
                }
            }

            $('.face__info-time-item:nth-of-type(2) span:first-child').text(m);
            $('.face__info-time-item:last-child span:first-child').text(s);
            timerId = setTimeout(tick, 1000);
        }, 1000);
    }
});