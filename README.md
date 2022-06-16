<p align="center">
    <br><br>
    <img src="https://leafphp.dev/logo-circle.png" height="100"/>
    <br><br>
</p>

# Watcher

Watcher is a tool that helps develop PHP based applications by automatically restarting the application when file changes in the directory are detected.

If you are using this package with Leaf, it has already been integrated with the [Leaf CLI](https://cli.leafphp.dev) serve command and so you don't need to do anything to your code to use this package. Simply install the [Leaf CLI](https://cli.leafphp.dev) and run:

```php
leaf serve --watch
```

[![NPM version](https://badge.fury.io/js/watcher.svg)](https://npmjs.org/package/watcher)
[![Supporters on Open Collective](https://opencollective.com/leaf/supporters/badge.svg)](#supporters)

# Installation

You only need to go through this if you are not using the Leaf CLI.

Either through cloning with git or by using [npm](http://npmjs.org) (the recommended way):

```sh
npm install -g @leafphp/watcher

# or using yarn:
yarn global add @leafphp/watcher
```

And watcher will be installed globally to your system path.

# Usage

watcher wraps your application, so you can pass all the arguments you would normally pass to your app:

```bash
leaf-watcher
```

This will start your local PHP development server on port 8080. You can change this using the port option.

```php
leaf-watcher --port 3000
```

For CLI options, use the `-h` (or `--help`) argument:

```bash
leaf-watcher --help
```

## Automatic re-running

watcher was originally written to restart hanging processes such as web servers, but now supports apps that cleanly exit. If your script exits cleanly, watcher will continue to monitor the directory (or directories) and restart the script if there are any changes.

## Manual restarting

Whilst watcher is running, if you need to manually restart your application, instead of stopping and restart watcher, you can type `rs` with a carriage return, and watcher will restart your process.

## Running non-PHP scripts

watcher can also be used to execute and monitor other programs. watcher will read the file extension of the script being run and monitor that extension instead of `.php` if there's no `watcher.json`:

```bash
watcher --exec "python -v" ./app.py
```

Now watcher will run `app.py` with python in verbose mode (note that if you're not passing args to the exec program, you don't need the quotes), and look for new or modified files with the `.py` extension.

## Specifying extension watch list

By default, watcher looks for files with the `.php`, `.phtml`, `.phps`, `.phpc`, `.leaf`, `.ui`, `.vein`, `.html`, `.xml`, and `.json` extensions. If you use the `--exec` option and monitor `app.py` watcher will monitor files with the extension of `.py`. However, you can specify your own list with the `-e` (or `--ext`) switch like so:

```bash
leaf-watcher --exec js,pug
```

Now watcher will restart on any changes to files in the directory (or subdirectories) with the extensions `.js`, `.pug`.

## Ignoring files

By default, watcher will only restart when a PHP/HTML file changes. In some cases you will want to ignore some specific files, directories or file patterns, to prevent watcher from prematurely restarting your application.

This can be done via the command line:

```bash
watcher --ignore lib/ --ignore tests/
```

Or specific files can be ignored:

```bash
watcher --ignore lib/index.php
```

Patterns can also be ignored (but be sure to quote the arguments):

```bash
watcher --ignore 'lib/*.php'
```

Note that by default, watcher will ignore the `.git`, `vendor`, `coverage` and `.sass-cache` directories and *add* your ignored patterns to the list.

## Application isn't restarting

In some networked environments (such as a container running watcher reading across a mounted drive), you will need to use the `legacyWatch: true` which enables Chokidar's polling.

Via the CLI, use either `--legacy-watch` or `-L` for short:

```bash
leaf-watcher -L
```

Though this should be a last resort as it will poll every file it can find.

## Delaying restarting

In some situations, you may want to wait until a number of files have changed. The timeout before checking for new file changes is 1 second. If you're uploading a number of files and it's taking some number of seconds, this could cause your app to restart multiple times unnecessarily.

To add an extra throttle, or delay restarting, use the `--delay` command:

```bash
leaf-watcher --delay 10 app.php
```

For more precision, milliseconds can be specified.  Either as a float:

```bash
leaf-watcher --delay 2.5 app.php
```

Or using the time specifier (ms):

```bash
leaf-watcher --delay 2500ms app.php
```

The delay figure is number of seconds (or milliseconds, if specified) to delay before restarting. So watcher will only restart your app the given number of seconds after the *last* file change.

# License

MIT [http://rem.mit-license.org](http://rem.mit-license.org)
