const shortlinks = gterminal.modules.register(
    "main:shortlinks"
)

shortlinks.registerCommand("short", async (full, rest) => {
    if (rest) {
        const json = await (await fetch(`https://is.gd/create.php?format=json&url=${encodeURIComponent(rest)}`)).json();
        if (json.errormessage) {
            gterminal.io.println("Failed: " + json.errormessage);
        }
        gterminal.io.println("The link is: " + json.shorturl);
        gterminal.clipboard.copy(json.shorturl);
    } else {
        gterminal.web.goto("https://is.gd/");
    }
})

shortlinks.registerCommand("shortv", async (full, rest) => {
    if (rest) {
        const json = await (await fetch(`https://v.gd/create.php?format=json&url=${encodeURIComponent(rest)}`)).json();
        if (json.errormessage) {
            gterminal.io.println("Failed: " + json.errormessage);
        }
        gterminal.io.println("The link is: " + json.shorturl);
        gterminal.clipboard.copy(json.shorturl);
    } else {
        gterminal.web.goto("https://v.gd/");
    }
})
