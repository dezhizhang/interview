/*
 * :file description: 
 * :name: /desigin/examples/command.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-07 15:48:48
 * :last editor: 张德志
 * :date last edited: 2024-10-07 15:49:01
 */
// 接收者：电灯
class Light {
    on() {
        console.log('The light is on');
    }

    off() {
        console.log('The light is off');
    }
}

// 命令对象接口
class Command {
    execute() {
        throw new Error('This method should be overwritten!');
    }

    undo() {
        throw new Error('This method should be overwritten!');
    }
}

// 具体命令对象：打开灯的命令
class LightOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.on();
    }

    undo() {
        this.light.off();
    }
}

// 具体命令对象：关闭灯的命令
class LightOffCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.off();
    }

    undo() {
        this.light.on();
    }
}

// 调用者：遥控器
class RemoteControl {
    constructor() {
        this.command = null;
    }

    setCommand(command) {
        this.command = command;
    }

    pressButton() {
        this.command.execute();
    }

    pressUndo() {
        this.command.undo();
    }
}

// 使用命令模式
const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);
const remoteControl = new RemoteControl();

// 打开灯
remoteControl.setCommand(lightOnCommand);
remoteControl.pressButton(); // 输出：The light is on
remoteControl.pressUndo();   // 输出：The light is off

// 关闭灯
remoteControl.setCommand(lightOffCommand);
remoteControl.pressButton(); // 输出：The light is off
remoteControl.pressUndo();   // 输出：The light is on
