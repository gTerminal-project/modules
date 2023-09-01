const you = gterminal.modules.register(
    "main:you"
)

you.registerCommand("you", async (full, rest) => {
    if (rest) {
        gterminal.web.goto(`https://you.com/search?q=${encodeURIComponent(rest)}&tbm=youchat&fromExtension=true`);
    } else {
        gterminal.web.goto("https://you.com/")
    }
    gterminal.io.println("Please wait...");
})

you.registerCommand("you-search", async (full, rest) => {
    if (rest) {
        gterminal.web.goto(`https://you.com/search?q=${encodeURIComponent(rest)}&fromExtension=true`);
    } else {
        gterminal.web.goto("https://you.com/")
    }
    gterminal.io.println("Please wait...");
})

you.registerCommand("chat", async (full, rest) => {
    if (rest) {
        gterminal.web.goto(`https://you.com/search?q=Loading...&cid=${rest}&tbm=youchat`);
    } else {
        gterminal.web.goto("https://you.com/chat");
    }
})

// you.registerFallbackHandler(async (full, rest) => {
//     gterminal.io.println(`The command "${full}" could not be found. Did you mean "u ${full}"?`);
// }

