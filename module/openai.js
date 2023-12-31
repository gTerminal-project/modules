const openai = gterminal.modules.register(
    "main:openai"
)

openai.registerCommand("chatgpt", async (full, rest) => {
    if (rest) {
        const srest = rest.split("/");
        if (srest[1]) {
            if (srest[0] == "c") {
                gterminal.web.goto(`https://chat.openai.com/c/${srest[1]}`);
            } else if (srest[0] == "share") {
                gterminal.web.goto(`https://chat.openai.com/share/${srest[1]}`);
            }
        } else {
            gterminal.web.goto(`https://chat.openai.com/c/${srest[0]}`);
        }
    } else {
        gterminal.web.goto("https://chat.openai.com/");
    }
})

