"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function normalizeTexAccent(s) {
    const reg = /\{\\'{(\w)/g;
    const matches = reg.exec(s);
    if (matches) {
        s = s.replace(/\{\\'{(\w)}}/, m => {
            switch (m[4]) {
                case "a":
                    return "á";
                case "e":
                    return "é";
                case "i":
                    return "í";
                case "o":
                    return "ó";
                case "u":
                    return "ú";
                default:
                    return m[4];
            }
        });
        s = normalizeTexAccent(s);
    }
    return s;
}
exports.normalizeTexAccent = normalizeTexAccent;
//# sourceMappingURL=normalizeTexAccent.js.map