import json
from urllib.parse import quote

with open("repo.json", "r", encoding="UTF-8") as f:
    repo = json.load(f)
    
with open("GeneratedDocs.md", "w", encoding="UTF-8") as f:
    f.write(f"# [`{repo['id']}`] {repo['name']}\n\n")
    f.write(f"[![Add repo `{repo['id']}`](https://img.shields.io/badge/Add_repo-{repo['id']}-blue)](https://gterminal.is-a.dev/?cmd=modules+add-repo+{quote(repo['address'])})\n\n")
    for id, module in repo["modules"].items():
        f.write(f"## [`{id}`] {module['name']}\n\n")
        f.write(f"[![Install module `{repo['id']}:{id}`](https://img.shields.io/badge/Install_module-{repo['id']}:{id}-blue)](https://gterminal.is-a.dev/?cmd=modules+install+{repo['id']}:{id})\n\n")
        f.write(f"{module['description']}\n\n")
        f.write(f"Script: [`{module['script']}`]({module['script']})\n\n")
        f.write("Commands:  \n\n")
        for cmd, command in module["commands"].items():
            f.write(f"- `{cmd}`  \n")
            f.write(f"[![Run command `{cmd}`](https://img.shields.io/badge/Run_command-{cmd}:{id}-green)](https://gterminal.is-a.dev/?cmd={quote(cmd)})\n\n")
            f.write(f"  {command['description']}  \n")
            if "aliases" in command:
                f.write("\n  Aliases:  \n\n")
                for alias in command["aliases"]:
                    f.write(f"  - `{alias}`  \n")
            f.write("\n")
