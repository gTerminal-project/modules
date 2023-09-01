const google = gterminal.modules.register(
    "main:google"
)

google.registerCommand("google", async (full, rest) => {
    if (rest) {
        gterminal.web.goto(`https://www.google.com/search?q=${encodeURIComponent(rest)}`);
    } else {
        gterminal.web.goto("https://www.google.com/")
    }
    gterminal.io.println("Please wait...");
})
