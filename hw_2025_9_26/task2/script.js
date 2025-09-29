// ./script.js

$(document).ready(function () {
    $("#toggleBtn").click(function () {
        let left = $("#leftBlock");
        if (left.width() > 0) {
            left.css("width", "0");
            $(this).html("&#9654;"); // right arrow
        } else {
            left.css("width", "200px");
            $(this).html("&#9664;"); // left arrow
        }
    });

    // Resize top/bottom blocks
    let isResizing = false;

    $("#resizer").on("mousedown", function (e) {
        e.preventDefault();
        isResizing = true;

        $(document).on("mousemove.resize", function (e) {
            if (!isResizing) return;

            let containerHeight = $(".right").height();
            let offsetTop = $(".right").offset().top;
            let y = e.pageY - offsetTop;

            // Minimum 100px for both blocks
            if (y < 100) y = 100;
            if (containerHeight - y - $("#resizer").height() < 100) {
                y = containerHeight - 100 - $("#resizer").height();
            }

            // Apply new sizes
            $("#topBlock").css("height", y + "px");
            $("#bottomBlock").css(
                "height",
                containerHeight - y - $("#resizer").height() + "px"
            );
        });
    });

    // Stop resizing
    $(document).on("mouseup", function () {
        isResizing = false;
        $(document).off("mousemove.resize");
    });
});

