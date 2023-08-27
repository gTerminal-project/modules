const webdev = gterminal.modules.register(
    "webdev",
    "WebDev Tools",
    "Tools for web developers"
)

webdev.registerCommand("pen", "Start a new codepen", async (full, rest) => {
    gterminal.web.goto(`https://pen.new/`);
    gterminal.io.println("Please wait...");
})

webdev.registerCommand("keycode", "Open keycode explorer", async (full, rest) => {
    gterminal.web.goto(`https://keycode.info/`);
    gterminal.io.println("Please wait...");
})

webdev.registerCommand("caniuse", "Start a 'Can I use' search", async (full, rest) => {
    if (rest) {
        gterminal.web.goto(`https://caniuse.com/?search=${encodeURIComponent(rest)}`);
    } else {
        gterminal.web.goto("https://caniuse.com/")
    }
    gterminal.io.println("Please wait...");
})

webdev.registerCommand("regex101", "Open regex101", async (full, rest) => {
    gterminal.web.goto(`https://regex101.com/`);
    gterminal.io.println("Please wait...");
})

webdev.registerAlias("regx", "regex101")
