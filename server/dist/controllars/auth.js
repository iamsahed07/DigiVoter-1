"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOut = exports.getUserDetails = exports.signIn = exports.sendVerificationToken = exports.create = void 0;
const emailVerificationToken_1 = __importDefault(require("#/models/emailVerificationToken"));
const user_1 = __importDefault(require("#/models/user"));
const helper_1 = require("#/utils/helper");
const mail_1 = require("#/utils/mail");
const variables_1 = require("#/utils/variables");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name, adhar, state, assembly, dob, voterId, mobile, address } = req.body;
    const user = yield user_1.default.create({
        email,
        name,
        adhar,
        state,
        assembly,
        dob,
        voterId,
        mobile,
        address,
    });
    res.json({
        message: "User create successfully",
    });
});
exports.create = create;
const sendVerificationToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { useAdhar, useMobile } = req.query;
    let user;
    if (useAdhar === "yes") {
        const { adhar } = req.body;
        user = yield user_1.default.findOne({ adhar });
    }
    if (useMobile === "yes") {
        const { mobile } = req.body;
        user = yield user_1.default.findOne({ mobile });
    }
    if (!user)
        return res
            .status(403)
            .json({ error: "Invalid request!! User not exists!!" });
    yield emailVerificationToken_1.default.findOneAndDelete({
        owner: user._id,
    });
    const token = (0, helper_1.generateToken)();
    yield emailVerificationToken_1.default.create({
        owner: user._id,
        token,
    });
    (0, mail_1.sendVerificationMail)(token, {
        name: user === null || user === void 0 ? void 0 : user.name,
        email: user === null || user === void 0 ? void 0 : user.email,
        userId: user === null || user === void 0 ? void 0 : user._id.toString(),
    });
    res.json({ message: "Please check your mail." });
});
exports.sendVerificationToken = sendVerificationToken;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { useAdhar, useMobile } = req.query;
    const { token, mobile, adhar } = req.body;
    let user;
    if (useAdhar === "yes") {
        user = yield user_1.default.findOne({ adhar });
    }
    if (useMobile === "yes") {
        user = yield user_1.default.findOne({ mobile });
    }
    if (!user)
        return res
            .status(403)
            .json({ error: "Invalid request!! User not exists!!" });
    const verificationToken = yield emailVerificationToken_1.default.findOne({
        owner: user._id,
    });
    if (!verificationToken)
        return res.status(403).json({ error: "Invalid token!" });
    const matched = verificationToken.compareToken(token);
    if (!matched)
        return res.status(403).json({ error: "Invalid token!" });
    const jwttoken = jsonwebtoken_1.default.sign({ userId: user._id, role: user.role }, variables_1.JWT_SECRET);
    user.tokens.push(jwttoken);
    user.verified = true;
    yield user.save();
    yield emailVerificationToken_1.default.findByIdAndDelete(verificationToken._id);
    res.json({
        profile: {
            id: user._id,
            name: user.name,
            email: user.email,
            verified: user.verified,
            adhar: user.adhar,
            location: user.state,
            role: user.role,
            dob: user.dob,
            voterId: user.voterId,
            mobile: user.mobile,
            address: user.address,
        },
        jwttoken,
    });
});
exports.signIn = signIn;
const getUserDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        profile: req.user,
        token: req.token,
    });
});
exports.getUserDetails = getUserDetails;
const logOut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fromAll } = req.query;
    const token = req.token;
    const user = yield user_1.default.findById(req.user.id);
    if (!user)
        throw new Error("something went wrong, user not found!");
    if (fromAll === "yes")
        user.tokens = [];
    else
        user.tokens = user.tokens.filter((t) => t !== token);
    yield user.save();
    res.json({ success: true });
});
exports.logOut = logOut;
