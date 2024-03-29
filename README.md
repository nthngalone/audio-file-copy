# audio-file-copy

## About

When using a USB thumb drive with some automobile sterios (such as the factory stereo in my Honda Accord), directory/file order is not determined alphabetically as one would expect, but instead it is determined by file write order.  Everytime you add a new file or folder, it will always be at the end of the system menu.  Or if you bulk copy a folder of songs, the songs will almost always end up in a random order.  This script recursively loops over a source directory and copies one-by-one the contents in file system alphabetical order to the destination directory so that the alphabetical order matches the file write order.

## Features

Upon execution the following events happen:
- The destination folder is cleaned
- The source folder is copied in alphabetical order
- Audio files copied are whitelisted for the following extensions:
    - mp3
    - wav
    - wma

## Usage

```npm run copy -- /path/to/src/dir /path/to/dest/dir```

## Enhancements

Future enhancement possibilities:
- Add configuration for a custom extension whitelist
- Add options for filename formatting (ex. strip whitespace)
- Set up as a library/api instead of just a script (export copy module)

## Contributing

If you'd like to contribute to this repo, please fork the repo, make your contributions in a separate branch and submit a PR.
