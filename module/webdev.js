const webdev = registerModule(
    "webdev",
    "WebDev Tools",
    "Tools for web developers"
)

webdev.registerCommand("pen", "Start a new codepen", async (full, rest) => {
    window.modifyHref(`https://pen.new/`);
    out("Please wait...");
})

webdev.registerCommand("keycode", "Open keycode explorer", async (full, rest) => {
    window.modifyHref(`https://keycode.info/`);
    out("Please wait...");
})

webdev.registerCommand("caniuse", "Start a 'Can I use' search", async (full, rest) => {
    if (rest) {
        window.modifyHref(`https://caniuse.com/?search=${encodeURIComponent(rest)}`);
    } else {
        window.modifyHref("https://caniuse.com/")
    }
    out("Please wait...");
})

webdev.registerCommand("regex101", "Open regex101", async (full, rest) => {
    window.modifyHref(`https://regex101.com/`);
    out("Please wait...");
})

webdev.registerCommand("regx", "Alias: regex101", alias("regex101"))
