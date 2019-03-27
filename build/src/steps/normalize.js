"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const normalizeTexAccent_1 = require("./normalizeTexAccent");
function normalize(s) {
    s = normalizeTexAccent_1.normalizeTexAccent(s);
    s = s.replace(/^\s*\w+\s*=\s*{\s*}\s*\S*[^}]/, ""); // camp={} fields
    s = s.replace(/[^\\]%.*$/, ""); //Comment fields
    s = s.replace(/\$\\backslash\$/, "\\");
    s = s.replace(/^\s*% Encoding:.*$/, "");
    s.replace(/\u00DF/g, "ss")
        .replace(/\u1E9E/g, "SS") // scharfes S
        .replace(/\u0111/g, "d")
        .replace(/\u0110/g, "D") // crossed D
        .replace(/\u00F0/g, "d")
        .replace(/\u00D0/g, "D") // eth
        .replace(/\u00FE/g, "th")
        .replace(/\u00DE/g, "TH") // thorn
        .replace(/\u0127/g, "h")
        .replace(/\u0126/g, "H") // H-bar
        .replace(/\u0142/g, "l")
        .replace(/\u0141/g, "L") // L with stroke
        .replace(/\u0153/g, "oe")
        .replace(/\u0152/g, "Oe") // oe ligature
        .replace(/\u00E6/g, "ae")
        .replace(/\u00C6/g, "Ae") // ae ligature
        .replace(/\u0131/g, "i") // dotless i
        .replace(/\u00F8/g, "o")
        .replace(/\u00D8/g, "O") // o with stroke
        // Catalan middle dot, double prime (weirdly used for slavic langs),
        // unicode replacement character (for some mis-utf'd Turkish).
        .replace(/[\u00B7\u02BA\uFFFD]/g, "");
    // Most diacritics are handled by this standard unicode normalization:
    // it decomposes characters into simpler characters plus modifiers,
    // and throws out the modifiers.
    //.normalize("NFKD")
    //.replace(/[\u0300-\u036f]/gu, "")
    return s;
}
exports.normalize = normalize;
//# sourceMappingURL=normalize.js.map