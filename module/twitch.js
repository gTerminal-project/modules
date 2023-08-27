const twitch = gterminal.modules.register(
    "twitch",
    "Twitch",
    "Search People and Categorys on Twitch"
)

twitch.registerCommand("tw", "Open Twitch or search on it", async (full, rest) => {
    if (rest) {
        gterminal.web.goto(`https://www.twitch.tv/search?term=${encodeURIComponent(rest)}`);
    } else {
        gterminal.web.goto("https://www.twitch.tv/")
    }
    gterminal.io.println("Please wait...");
})

twitch.registerCommand("twac", "Show a twitch profile", async (full, rest) => {
    if (rest) {
        gterminal.web.goto(`https://www.twitch.tv/${encodeURIComponent(rest)}`);
        gterminal.io.println("Please wait...");
    } else {
        gterminal.io.println("You need to specify a name.");
    }
})

const TWCAT_SHORT = {
    "mc": "minecraft",
    "dev": "software-and-game-development",
    "pydev": "software-and-game-development?tl=python",
    "jsdev": "software-and-game-development?tl=JavaScript"
}

twitch.registerCommand("twcat", "Show a twitch category", async (full, rest) => {
    if (rest) {
        gterminal.web.goto(`https://www.twitch.tv/directory/category/${TWCAT_SHORT[rest] || rest}`);
    } else {
        gterminal.web.goto("https://www.twitch.tv/directory/category/")
    }
    gterminal.io.println("Please wait...");
})

twitch.registerCommand("twcat-all", "List availible twitch categories", async (full, rest) => {
    gterminal.io.println("The following categories are availible:");
    for (let category of Object.keys(TWCAT_SHORT)) {
        gterminal.io.println(`- ${category}`);
    }
})