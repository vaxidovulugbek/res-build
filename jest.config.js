module.exports = {
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
	},
	moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
	transformIgnorePatterns: ["<rootDir>/node_modules/"],
	testEnvironment: "node",
};
