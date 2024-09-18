import { readdir } from 'node:fs/promises';
// exporter of images
try {
    const files = await readdir("./");
    for (const file of files)
        if (file != "index.js" || file != "package.json") {
            console.log(`export { default as ${file.replace(/\..*/, "")} } from "./${file}";`);
        }
} catch (err) {
    console.error(err);
} 