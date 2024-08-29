import htmlToImage from 'html-to-image'

const captureElement = document.getElementById('capture');
const downloadButton = document.getElementById('download');

function captureAndDownload() {
    htmlToImage.toPng(captureElement)
        .then(function (dataUrl) {
            const link = document.createElement('a');
            link.download = 'image.png';
            link.href = dataUrl;
            link.click();
        })
        .catch(function (error) {
            console.error('Error capturing image:', error);
        });
}

downloadButton.addEventListener('click', captureAndDownload);
