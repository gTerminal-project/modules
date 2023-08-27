const you = gterminal.modules.register(
    "you",
    "You.com",
    "You.com related commands"
)

you.registerCommand("you", "Search with youchat", async (full, rest) => {
    if (rest) {
        gterminal.web.goto(`https://you.com/search?q=${encodeURIComponent(rest)}&tbm=youchat&fromExtension=true`);
    } else {
        gterminal.web.goto("https://you.com/")
    }
    gterminal.io.println("Please wait...");
})

you.registerAlias("u", "you")

you.registerCommand("you-search", "Search on you", async (full, rest) => {
    if (rest) {
        gterminal.web.goto(`https://you.com/search?q=${encodeURIComponent(rest)}&fromExtension=true`);
    } else {
        gterminal.web.goto("https://you.com/")
    }
    gterminal.io.println("Please wait...");
})

you.registerAlias("us", "you-search")

you.registerCommand("chat", "Open a specific you-chat session or you-chat", async (full, rest) => {
    if (rest) {
        gterminal.web.goto(`https://you.com/search?q=Loading...&cid=${rest}&tbm=youchat`);
    } else {
        gterminal.web.goto("https://you.com/chat");
    }
})

you.registerCommand("command_not_found", "Override command fail recommendation", async (full, rest) => {
    gterminal.io.println(`The command "${rest}" could not be found. Did you mean "u ${rest}"?`);
    gterminal.commands.setY("u " + rest);
})
