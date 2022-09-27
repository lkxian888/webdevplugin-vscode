/*
 * @Description: your description
 * @Author: lkxian
 * @@@Email: lkxian888@163.com
 * @Date: 2022-09-27 10:50:31
 * @LastEditTime: 2022-09-27 11:15:48
 */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
// 该方法将会在插件在激活的时候被调用
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "lkx-web-dev-extension" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  // 此处实现注册了在package.json 中声明的插件命令
  let disposable = vscode.commands.registerCommand(
    "lkx-web-dev-extension.helloWorld",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage(
        "Hello  from lkx-web-dev-extension!"
      );
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
