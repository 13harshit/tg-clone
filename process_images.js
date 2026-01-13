
const fs = require('fs');
const path = require('path');

const logFile = 'c:/Users/harsh/Downloads/pj-pharma-main/script_log.txt';
const resultFile = 'c:/Users/harsh/Downloads/pj-pharma-main/products.json';

function log(msg) {
    fs.appendFileSync(logFile, msg + '\n');
}

const sourceDir = 'c:/Users/harsh/Downloads/pj-pharma-main/GJ Product-20260113T094014Z-1-001/GJ Product';
const targetDir = 'c:/Users/harsh/Downloads/pj-pharma-main/public/images/products/showcase';

try {
    fs.writeFileSync(logFile, "Starting script...\n");

    if (!fs.existsSync(sourceDir)) {
        log("Source directory does not exist!");
        process.exit(1);
    }

    // Custom sort to handle numbering correctly
    const files = fs.readdirSync(sourceDir).sort(new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' }).compare);
    log(`Found ${files.length} files in source.`);

    const imageFiles = files.filter(file => /\.(png|jpg|jpeg)$/i.test(file));
    log(`Found ${imageFiles.length} images to process.`);

    const newProducts = [];

    imageFiles.forEach((file, index) => {
        const ext = path.extname(file);
        const targetName = `product-${index + 1}${ext}`;
        const srcPath = path.join(sourceDir, file);
        const destPath = path.join(targetDir, targetName);

        try {
            fs.copyFileSync(srcPath, destPath);
        } catch (err) {
            log(`Failed to copy ${file}: ${err.message}`);
        }

        if (index >= 29) {
            newProducts.push({
                image: `/images/products/showcase/${targetName}`,
                name: `Product ${index + 1}`,
                form: "Pharmaceutical",
                brand: "TG Pharmz",
                desc: "Advanced pharmaceutical formulation ensuring high quality and therapeutic efficacy."
            });
        }
    });

    log("Success! Writing JSON...");
    fs.writeFileSync(resultFile, JSON.stringify(newProducts, null, 2));
    log("Done.");

} catch (err) {
    log(`Script crashed: ${err.message}`);
    process.exit(1);
}
