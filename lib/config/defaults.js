module.exports = {
  restartable: 'rs',
  colours: true,
  execMap: {
    py: 'python',
    rb: 'ruby',
    ts: 'ts-node',
    // more can be added here such as ls: lsc - but please ensure it's cross
    // compatible with linux, mac and windows, or make the default.js
    // dynamically append the `.cmd` for node based utilities
  },
  ignoreRoot: [
    '.git', // Git repository files, see <https://git-scm.com/>
    '.nyc_output', // Temporary directory where nyc stores coverage data, see <https://github.com/bcoe/nyc>
    '.sass-cache', // Cache folder for node-sass, see <https://github.com/sass/node-sass>
    'bower_components', // Where Bower packages are installed, see <http://bower.io/>
    'coverage', // Standard output directory for code coverage reports, see <https://github.com/gotwarlost/istanbul>
    'node_modules', // Where Node modules are installed, see <https://nodejs.org/>
    'vendor', // Where composer dependencies are installed, see <https://getcomposer.org>
  ].map((_) => `**/${_}/**`),
  watch: ['*.*'],
  stdin: true,
  runOnChangeOnly: false,
  verbose: false,
  signal: 'SIGUSR2',
  // 'stdout' refers to the default behaviour of a required watcher's child,
  // but also includes stderr. If this is false, data is still dispatched via
  // watcher.on('stdout/stderr')
  stdout: true,
  watchOptions: {},
};
