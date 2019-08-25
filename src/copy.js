import fs from 'fs';
import rimraf from 'rimraf';
import path from 'path';

if (process.argv.length <= 2) {
    console.log(`Usage: npm run copy -- path/to/src/dir path/to/dest/dir`);
    process.exit(-1);
}

const srcPath = process.argv[2];
const destPath = process.argv[3];

const extWhiteList = ['.mp3', '.wav', '.wma'];

const deleteDirContents = destPath => {
    fs.readdirSync(destPath).forEach(item => {
        const destFile = `${destPath}/${item}`;
        console.log(`deleting [${destFile}]`);
        rimraf.sync(`${destFile}`);
    });
};

const copyDirRecursive = (srcPath, destPath) => {
    fs.readdirSync(srcPath).forEach(item => {
        const srcFile = `${srcPath}/${item}`;
        const destFile = `${destPath}/${item}`;
        if (fs.statSync(srcFile).isDirectory()) {
            console.log(`Creating dir [${destFile}]`);
            fs.mkdirSync(destFile, '0744');
            copyDirRecursive(srcFile, destFile);
        } else {
            if (extWhiteList.includes(path.extname(srcFile))) {
                console.log(`Copying file [${srcFile}] to [${destFile}]`);
                fs.copyFileSync(srcFile, destFile);
            } else {
                console.log(`Ignoring ${srcFile}`);
            }

        }
    });
};

deleteDirContents(destPath);
copyDirRecursive(srcPath, destPath);
