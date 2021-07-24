const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/images');

const imageName = (image) => {
  return image.split('.')
      .slice(0, -1)
      .join('.');
};

const resizeImage = (image, size, postfix) => {
  sharp(`${target}/${image}`)
      .resize(size)
      .toFile(
          path.resolve(
              __dirname,
              `${destination}/${imageName(image)}-${postfix}.webp`,
          ),
      );
};

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  resizeImage(image, 800, 'large');
  resizeImage(image, 480, 'small');
});
