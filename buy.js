const imageOptions = {
    motorsport: [
        { src: 'sparcoc.jpg', price:  115 },
        { src: 'arai.jpg', price: 980.29 },
        { src: 'omp.jpg', price: 469.49 },
        { src: 'garmin.jpg', price: 989 },
        { src: 'aimm.jpg', price: 1887.65 },
        { src: 'racelogic.jpg', price: 759 },
        { src: 'hankook.jpg', price: 95.66 },
        { src: 'maxsport.jpg', price: 1887.60 },
        { src: 'michelin.jpg', price:  612.00 },
    ],
    performance: [
        { src: 'forge.jpg', price: 628.00 },
        { src: 'airtec.jpg', price: 980.29 },
        { src: 'mishimoto.jpg', price: 469.49 },
        { src: 'mst.jpg', price: 419.24 },
        { src: 'ramair.jpg', price: 209.87 },
        { src: 'eventuri.jpg', price: 2745.60 },
        { src: 'milltek.jpg', price: 95.66 },
        { src: 'cobrasport.jpg', price: 915.19 },
        { src: 'scorpion.jpg', price: 485.10 },
    ],
    tools: [
        { src: 'wera.jpg', price: 247.20 },
        { src: 'draper.jpg', price: 109.08 },
        { src: 'sealey.jpg', price: 197.98 },
        { src: 'paoli.jpg', price: 924.00 },
        { src: 'saley.jpg', price: 212.80 },
        { src: 'draperig.jpg', price: 140.23 },
        { src: 'sealeyjack.jpg', price: 254.04 },
        { src: 'sealeystand.jpg', price: 50.87 },
        { src: 'sscizzor.jpg', price: 32.74 },
    ],
};

let selectedItems = [];

function populateImages() {
    var category = document.getElementById('partCategory').value;
    var imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    if (imageOptions.hasOwnProperty(category)) {
        imageOptions[category].forEach((imageData, index) => {
            var imgElement = document.createElement('img');
            imgElement.src = imageData.src;
            imgElement.alt = category;
            imgElement.className = 'part-image';
            imgElement.setAttribute('data-price', imageData.price);
            imgElement.setAttribute('data-index', index); 
            imgElement.onclick = function () {
                selectImage(this);
            };
            imageContainer.appendChild(imgElement);
        });
    }
    updateTotal();
}

function selectImage(selectedImage) {
    if (selectedItems.length < 3 || selectedItems.includes(selectedImage)) {
        selectedImage.classList.toggle('selected-image');
        updateSelectedItems();
        updateTotal();
    } else {
        alert('You can only select up to three different items.');
    }
}

function updateSelectedItems() {
    selectedItems = Array.from(document.querySelectorAll('.selected-image'));
}

function updateTotal() {
    var quantity = document.getElementById('quantity').value;
    var totalPrice = 0;

    selectedItems.forEach(selectedImage => {
        var price = selectedImage.getAttribute('data-price');
        totalPrice += quantity * price;
    });

    document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
}

document.getElementById('buyForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Purchase successful!');
});

document.getElementById('quantity').addEventListener('input', updateTotal);


populateImages();



