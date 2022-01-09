function checkEnvVariables(logger, ...variableNames) {
  variableNames.forEach((variableName) => {
    if (!process.env[variableName]) {
      logger.warn(`process.env.${variableName} is missing`);
    }
  });
}

module.exports = {
  checkEnvVariables,
};
