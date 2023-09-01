const webdev = gterminal.modules.register(
    "main:webdev"
)

webdev.registerCommand("pen", async (full, rest) => {
    gterminal.web.goto(`https://pen.new/`);
    gterminal.io.println("Please wait...");
})

webdev.registerCommand("keycode", async (full, rest) => {
    gterminal.web.goto(`https://keycode.info/`);
    gterminal.io.println("Please wait...");
})

webdev.registerCommand("caniuse", async (full, rest) => {
    if (rest) {
        gterminal.web.goto(`https://caniuse.com/?search=${encodeURIComponent(rest)}`);
    } else {
        gterminal.web.goto("https://caniuse.com/")
    }
    gterminal.io.println("Please wait...");
})

webdev.registerCommand("regex101", async (full, rest) => {
    gterminal.web.goto(`https://regex101.com/`);
    gterminal.io.println("Please wait...");
})
