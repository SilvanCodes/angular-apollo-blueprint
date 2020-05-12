module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json"
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript"
    ],
    rules: {
        /*=== basic rules ===*/
        "space-in-parens": [
            "warn",
            "never",
        ],
        "space-before-blocks": [
            "error",
            "always"
        ],
        "keyword-spacing": [
            "error",
            {
                before: true,
                after: true
            }
        ],
        "function-call-argument-newline": [
            "warn",
            "consistent"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                max: 2,
                maxBOF: 0,
                maxEOF: 1
            }
        ],

        /*=== typescript rules ===*/
        "@typescript-eslint/no-empty-function": [
            "error",
            { allow: ["constructors"] }
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                args: "all",
                argsIgnorePattern: "^_"
            }
        ],
        "@typescript-eslint/array-type": [
            "error",
            {
                default: "generic"
            }
        ],

        /*=== import rules ===*/
        "import/newline-after-import": [
            "error",
            { count: 2 }
        ]
    }
}