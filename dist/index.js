"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('checking port 4000');
});
/*
connect to instance
create key
chmod 400 keys
then:
ssh -i "~/.ssh/saws-key-pair.pem" ec2-user@ec2-18-197-75-173.eu-central-1.compute.amazonaws.com
*/
app.listen(3000, () => {
    console.log('Start aplikacji na porcie 3000!');
    console.log('checking codedeploy-pipeline');
});
//# sourceMappingURL=index.js.map