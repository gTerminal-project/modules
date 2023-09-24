import json
from urllib.parse import quote

with open("repo.json", "r", encoding="UTF-8") as f:
    repo = json.load(f)

with open("GeneratedDocs.md", "w", encoding="UTF-8") as f:
    f.write(f"# [`{repo['id']}`] {repo['name']}\n\n")
    f.write(f"[![Add repo `{repo['id']}`](https://img.shields.io/badge/Add_repo-{repo['id']}-blue)](https://gterminal.js.org/?cmd=modules+add-repo+{quote(repo['address'])})\n")
    f.write(f"[![Remove repo `{repo['id']}`](https://img.shields.io/badge/Remove_repo-{repo['id']}-blue)](https://gterminal.js.org/?cmd=modules+remove-repo+{repo['id']})\n")
    for id, module in repo["modules"].items():
        f.write(f"\n## [`{id}`] {module['name']}\n\n")
        f.write(
            f"[![Install module `{repo['id']}:{id}`](https://img.shields.io/badge/Install_module-{repo['id']}:{id}-blue)](https://gterminal.js.org/?cmd=modules+install+{repo['id']}:{id})\n")
        f.write(
            f"[![Remove module `{repo['id']}:{id}`](https://img.shields.io/badge/Remove_module-{repo['id']}:{id}-blue)](https://gterminal.js.org/?cmd=modules+remove+{repo['id']}:{id})\n\n")
        f.write(f"{module['description']}\n\n")
        f.write(f"Script: [`{module['script']}`]({module['script']})\n\n")
        f.write("Commands:  \n")
        for cmd, command in module["commands"].items():
            f.write(f"\n- `{cmd}`  \n")
            f.write(
                f"  \n  [![Run command `{cmd}`](https://img.shields.io/badge/Run_command-{cmd}-blue)](https://gterminal.js.org/?cmd={quote(cmd)})\n\n")
            f.write(f"  {command['description']}  \n")
            if "aliases" in command:
                f.write("  Aliases:  \n\n")
                for alias in command["aliases"]:
                    f.write(f"  - `{alias}`  \n")
