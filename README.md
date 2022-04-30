# Maintenance Manual for development.hiroshima-u.ac.jp

This manual is purposed to give proper instructions on maintaining webpage(s) hosted on [development.hiroshima-u.ac.jp](https://development.hiroshima-u.ac.jp). For any question or bug report, please feel free to [contact the author](mailto:chenzhaolu_deer@outlook.com).

## Editing page configuration files

Most of the page contents can be found at `config.yml` in the root directory.

When editing the file, **DO USE ENGLISH HALF-WIDTH SPACE " ".** Don't use Japanese full-width space "　". This will raise errors and all site contents will fallback to an initial state. All your modifications will not be shown.

You can examine whether the configuration has been successfully loaded and interpreted in this way:

1. Access [website homepage](https://development.hiroshima-u.ac.jp) **with a computer or tablet (not mobile)**;
2. In menu items, check if the first english letter is `Capital letter` or not.
3. If is capital letter, then te config file has been successfully loaded. Otherwise check the web console (`F12`) for errors.

This is a sample configuration file:

```yaml

```

## Development details

This site is based on [Vue.js 3.x](https://v3.ja.vuejs.org/) and built with [Vite](https://ja.vitejs.dev/). Full source code can be forked on https://github.com/development-psychology-hiroshima/development.hiroshima-u.ac.jp. You may need to [contact the author](mailto:chenzhaolu_deer@outlook.com) to be granted read/write permission.

To run a test site on your local machine, you may need the basic knowledge of configuring a [Node.js](https://nodejs.org/ja/) project, with npm as its default package manager.

Once you have installed Node, you can run the following commands in your terminal to run a test site at `localhost:3000` :

```sh
npm install
npm install -g vite@latest
vite
```

