const whatsapp = gterminal.modules.register(
    "whatsapp",
    "WhatsApp",
    "Open WhatsApp Web with a simple command"
)

whatsapp.registerCommand("whatsapp", "Open WhatsApp Web", async (full, rest) => {
    gterminal.web.goto("https://web.whatsapp.com/");
    gterminal.io.println("Please wait...");
})

whatsapp.registerAlias("wa", "whatsapp")