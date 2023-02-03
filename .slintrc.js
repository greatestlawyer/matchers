  parserOptions: {
    parser: 'babel-eslint',
    // ecmaVersion: 'latest',
    // Just modify LATEST here
    ecmaVersion: 12,
    sourceType: 'module',
    allowImportExportEverywhere: true, // Unlimited ESLint's use position on Import
    ecmaFeatures: {
      modules: true,
      legacyDecorators: true
    }
  },
