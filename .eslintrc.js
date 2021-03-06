module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        indent: ["error", 4],
        "linebreak-style": ["error", "windows"/*", unix"*/], // Corrigiendo error de linebreaks para windows
        quotes: ["error", "double"],
        semi: ["error", "always"]
    }
};
