"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_PASS = exports.APP_USER = exports.JWT_SECRET = exports.SIGN_IN_URL = exports.MONGO_URI = void 0;
const { env } = process;
exports.MONGO_URI = env.MONGO_URI, exports.SIGN_IN_URL = env.SIGN_IN_URL, exports.JWT_SECRET = env.JWT_SECRET, exports.APP_USER = env.APP_USER, exports.APP_PASS = env.APP_PASS;
