const whatsapp = gterminal.modules.register(
    "main:whatsapp"
)

whatsapp.registerCommand("whatsapp", async (full, rest) => {
    gterminal.web.goto("https://web.whatsapp.com/");
    gterminal.io.println("Please wait...");
})
