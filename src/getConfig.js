const getConfig = async () => {
  const yaml = window.jsyaml;
  let config;

  const response = await fetch('config.yml')
    .then(response => response.text())
    .catch(error => undefined);

  try {
    config = yaml.load(response);
  } catch (e) {
    console.error(e.message);
  }

  return config;
}

export { getConfig };