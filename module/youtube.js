const youtube = gterminal.modules.register(
    "youtube",
    "YouTube",
    "YouTube related commands"
)

youtube.registerCommand("youtube", "Search with youchat", async (full, rest) => {
    if (rest) {
        gterminal.web.goto(`https://www.youtube.com/results?search_query=${encodeURIComponent(rest)}`);
    } else {
        gterminal.web.goto("https://www.youtube.com/");
    }
    gterminal.io.println("Please wait...");
})

youtube.registerALias("yt", "youtube")