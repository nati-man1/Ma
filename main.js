$(document).ready(function () {
    $(function () {
        var flame = $("#flame");
        var txt = $("h1");
        var song = document.getElementById("birthdaySong"); // Reference the audio element

        flame.on({
            click: function () {
                // Remove the flame and add the puff effect
                flame.removeClass("burn").addClass("puff");
                $(".smoke").each(function () {
                    $(this).addClass("puff-bubble");
                });
                $("#glow").remove();

                // Update the text and fade in
                txt.hide().html("Wish you a happy birthday Maria").delay(750).fadeIn(300);

                // Animate the candle to dim
                $("#candle").animate(
                    {
                        opacity: ".5",
                    },
                    100
                );

                // Play the birthday song
                song.play();
            },
        });
    });
});
