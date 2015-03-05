ZeroClipboard.config({
    forceHandCursor: true
});

var client = new ZeroClipboard($(".clip_button[data-clipboard-text]"));

client.on("error", function(e) {
    console.log("ERROR! [" + e.name + "] " + e.message);
});

client.on("ready", function(e) {
    console.log("Ready!");

    client.on("aftercopy", function(e) {
        console.log((e.success["text/plain"] ? "Copied" : "FAILED to copy") + ": " + e.data["text/plain"]);
    });
});