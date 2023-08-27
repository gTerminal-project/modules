const google = gterminal.modules.register(
    "google",
    "Google",
    "Google related commands"
)

google.registerCommand("google", "Search on google", async (full, rest) => {
    if (rest) {
        gterminal.web.goto(`https://www.google.com/search?q=${encodeURIComponent(rest)}`);
    } else {
        gterminal.web.goto("https://www.google.com/")
    }
    gterminal.io.println("Please wait...");
})

google.registerAlias("goog", "google")