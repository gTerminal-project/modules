import json
from urllib.parse import quote

with open("repo.json", "r", encoding="UTF-8") as f:
    repo = json.load(f)
    
with open("GeneratedDocs.md", "w", encoding="UTF-8") as f:
    f.write(f"# [`{repo['id']}`] {repo['name']}\n\n")
    f.write(f"[Add this repo](https://gterminal.is-a.dev/?cmd=modules+add-repo+{quote(repo['address'])})\n\n")
    for id, module in repo["modules"].items():
        f.write(f"## [`{id}`] {module['name']}\n\n")
        f.write(f"{module['description']}\n\n")
        f.write(f"Script: [`{module['script']}`]({module['script']})\n\n")
        f.write(f"{module['description']}\n\n")
        f.write(f"[Install this module](https://gterminal.is-a.dev/?cmd=modules+install+{repo['id']}:{id})\n\n")
        f.write("Commands:  \n\n")
        for cmd, command in module["commands"].items():
            f.write(f"- `{cmd}`  \n")
            f.write(f"  {command['description']}  \n")
            f.write(f"[Run this command](https://gterminal.is-a.dev/?cmd={quote(cmd)})\n\n")
            if "aliases" in command:
                f.write("\n  Aliases:  \n\n")
                for alias in command["aliases"]:
                    f.write(f"  - `{alias}`  \n")
            f.write("\n")