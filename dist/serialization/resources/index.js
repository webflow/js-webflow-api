"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forms = exports.scripts = exports.sites = exports.assets = exports.webhooks = exports.inventory = exports.orders = exports.products = exports.accessGroups = exports.users = exports.collections = void 0;
exports.collections = __importStar(require("./collections"));
exports.users = __importStar(require("./users"));
__exportStar(require("./users/types"), exports);
exports.accessGroups = __importStar(require("./accessGroups"));
__exportStar(require("./accessGroups/types"), exports);
exports.products = __importStar(require("./products"));
__exportStar(require("./products/types"), exports);
exports.orders = __importStar(require("./orders"));
__exportStar(require("./orders/types"), exports);
exports.inventory = __importStar(require("./inventory"));
__exportStar(require("./inventory/types"), exports);
exports.webhooks = __importStar(require("./webhooks"));
exports.assets = __importStar(require("./assets"));
exports.sites = __importStar(require("./sites"));
__exportStar(require("./sites/client/requests"), exports);
__exportStar(require("./collections/client/requests"), exports);
exports.scripts = __importStar(require("./scripts"));
__exportStar(require("./scripts/client/requests"), exports);
__exportStar(require("./webhooks/client/requests"), exports);
__exportStar(require("./assets/client/requests"), exports);
exports.forms = __importStar(require("./forms"));
__exportStar(require("./forms/client/requests"), exports);
__exportStar(require("./users/client/requests"), exports);
__exportStar(require("./products/client/requests"), exports);
__exportStar(require("./orders/client/requests"), exports);
__exportStar(require("./inventory/client/requests"), exports);
