const github = gterminal.modules.register(
    "main:github"
)

github.registerCommand("gh", async (full, rest) => {
    if (rest) {
        const srest = rest.split("/");
        if (srest[1]) {
            gterminal.web.goto(`https://github.com/${encodeURIComponent(srest[0] || "J0J0HA")}/${encodeURIComponent(srest[1])}`);
        } else {
            gterminal.web.goto(`https://github.com/${encodeURIComponent(srest[0] || "J0J0HA")}`);
        }
    } else {
        gterminal.web.goto("https://github.com/")
    }
    gterminal.io.println("Please wait...");
})

github.registerCommand("gist", async (full, rest) => {
    if (rest) {
        const srest = rest.split("/");
        if (srest[1]) {
            gterminal.web.goto(`https://gist.github.com/${encodeURIComponent(srest[0] || "J0J0HA")}/${encodeURIComponent(srest[1])}`);
        } else {
            gterminal.web.goto(`https://github.com/${encodeURIComponent(srest[0] || "J0J0HA")}`);
        }
    } else {
        gterminal.web.goto("https://gist.github.com/")
    }
    gterminal.io.println("Please wait...");
})
