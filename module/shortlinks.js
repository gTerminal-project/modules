const shortlinks = gterminal.modules.register(
    "shortlinks",
    "Shortlink Commands",
    "Provides commands to generate shortlinks on is.gd and v.gd"
)

shortlinks.registerCommand("short", "Shorten a link on is.gd", async (full, rest) => {
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

shortlinks.registerCommand("shortv", "Shorten a link on v.gd", async (full, rest) => {
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
