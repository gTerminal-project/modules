const endoflife = gterminal.modules.register(
    "main:endoflife"
)

endoflife.registerCommand("endoflife", async (full, rest) => {
    if (rest) {
        gterminal.web.goto(`https://endoflife.date/${rest}`);
    } else {
        gterminal.web.goto("https://endoflife.date/")
    }
    gterminal.io.println("Please wait...");
})
