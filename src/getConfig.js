const getConfig = async () => {
  const yaml = window.jsyaml;
  let config;

  const response = await fetch("configs/main.yml")
    .then((response) => response.text())
    .catch((error) => undefined);

  try {
    config = yaml.load(response);
  } catch (e) {
    console.error(e.message);
  }

  return config;
};

const getMemberResearch = async () => {
  const yaml = window.jsyaml;
  let membersResearch;

  const response = await fetch("configs/membersResearch.yml")
    .then((response) => response.text())
    .catch((error) => undefined);

  try {
    membersResearch = yaml.load(response);
  } catch (e) {
    console.error(e.message);
  }

  return membersResearch;
};

export { getConfig, getMemberResearch };
