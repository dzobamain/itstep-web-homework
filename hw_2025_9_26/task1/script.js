// ./script.js

$(document).ready(function () {
    $("#generate").click(function () {
        let length = parseInt($("#length").val()); // get desired string length
        let chars = ""; // allowed characters will be stored here

        // Check which sets of characters are selected
        if ($("#digits").is(":checked")) {
            chars += "0123456789";
        }
        if ($("#upper").is(":checked")) {
            chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if ($("#lower").is(":checked")) {
            chars += "abcdefghijklmnopqrstuvwxyz";
        }

        // If no checkbox is selected, show warning
        if (chars === "") {
            alert("Please select!");
            return;
        }

        // Generate random string
        let result = "";
        for (let i = 0; i < length; i++) {
            let randIndex = Math.floor(Math.random() * chars.length);
            result += chars.charAt(randIndex);
        }

        $("#output").val(result);
    });
});
