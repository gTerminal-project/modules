const youtube = gterminal.modules.register(
    "main:youtube"
)

youtube.registerCommand("youtube", async (full, rest) => {
    if (rest) {
        gterminal.web.goto(`https://www.youtube.com/results?search_query=${encodeURIComponent(rest)}`);
    } else {
        gterminal.web.goto("https://www.youtube.com/");
    }
    gterminal.io.println("Please wait...");
})

youtube.registerAlias("yt", "youtube")