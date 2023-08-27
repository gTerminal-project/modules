const github = gterminal.modules.register(
    "github",
    "GitHub",
    "GitHub related commands"
)

github.registerCommand("gh", "Open a specific GitHub resource", async (full, rest)=>{
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

github.registerCommand("gist", "Open a specific gist or account", async (full, rest)=>{
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
