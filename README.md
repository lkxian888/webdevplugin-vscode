# Web Development VSCode Plugins

## 扩展插件

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode&WT.mc_id=marketplace-pack-sdras)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
- [ritwickdey.LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [ts-react-snippets](https://marketplace.visualstudio.com/items?itemName=xieqingtian.ts-react-snippets)
- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [CSS Modules](https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

## VSCode Settings

```json
{
  // Prettier 配置
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // 普通配置
  "security.workspace.trust.untrustedFiles": "open",
  "editor.formatOnSave": true,
  "editor.fontSize": 16,
  // TODO Tree 插件相关配置
  "todo-tree.general.tags": ["TODO", "FIXME", "XXX", "NOTE", "BUG", "HACK"],
  "todo-tree.highlights.defaultHighlight": {
    "foreground": "black",
    "type": "text"
  },
  "todo-tree.highlights.customHighlight": {
    "FIXME": {
      "icon": "flame",
      "iconColour": "orange",
      "background": "orange"
    },
    "TODO": {
      "icon": "check",
      "iconColour": "#yellow",
      "background": "yellow"
    },
    "BUG": {
      "icon": "bug",
      "iconColour": "red",
      "background": "red"
    },
    "NOTE": {
      "icon": "note",
      "iconColour": "blue",
      "background": "blue"
    },
    "XXX": {
      "icon": "question",
      "iconColour": "green",
      "background": "green"
    },
    "HACK": {
      "icon": "alert",
      "iconColour": "purple",
      "background": "purple"
    }
  },
  // 默认终端修改为 git bash
  "terminal.integrated.profiles.windows": {
    "Git Bash": {
      "source": "Git Bash",
      "path": ["C:\\Program Files\\Git\\bin\\bash.exe"],
      "icon": "terminal-bash"
    }
  },
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  // 编辑器主题相关配置
  "workbench.colorCustomizations": {
    "[Default Dark+]": {
      "editor.background": "#000000",
      "sideBar.background": "#000000"
    }
  },
  // stylelint 相关配置
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.stylelint": true,
    "source.fixAll.eslint": true
  },
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "stylelint.snippet": ["css", "less", "vue", "postcss", "scss", "html"],
  "stylelint.validate": ["css", "less", "vue", "postcss", "scss", "html"],
  "workbench.iconTheme": "vscode-icons",
```

### build

- [测试和发布](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)

```bash
$ vsce package
# myExtension.vsix generated
$ vsce publish
# <publisherID>.myExtension published to VS Code Marketplace
```
