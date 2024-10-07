// 处理者抽象类
class Handler {
    constructor(successor = null) {
        this.successor = successor; // 下一个处理者
    }

    handleRequest(request) {
        if (this.successor) {
            this.successor.handleRequest(request); // 传递请求给下一个处理者
        }
    }
}

// 具体处理者类：经理
class Manager extends Handler {
    handleRequest(request) {
        if (request === 'leave' || request === 'overtime') {
            console.log('Manager approved the request: ' + request);
        } else {
            super.handleRequest(request); // 继续传递请求
        }
    }
}

// 具体处理者类：总监
class Director extends Handler {
    handleRequest(request) {
        if (request === 'budget') {
            console.log('Director approved the request: ' + request);
        } else {
            super.handleRequest(request); // 继续传递请求
        }
    }
}

// 具体处理者类：CEO
class CEO extends Handler {
    handleRequest(request) {
        console.log('CEO approved the request: ' + request);
    }
}

// 创建职责链
const ceo = new CEO();
const director = new Director(ceo);
const manager = new Manager(director);

// 客户端发起请求
manager.handleRequest('leave');   // 输出: Manager approved the request: leave
manager.handleRequest('budget');   // 输出: Director approved the request: budget
manager.handleRequest('overtime'); // 输出: Manager approved the request: overtime
manager.handleRequest('other');    // 输出: CEO approved the request: other
