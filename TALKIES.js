(function() {
    // Check if codesBarres already exists in the window object
    if (!window.codesBarres) {
        // Declare codesBarres using let instead of const
        let codesBarres = [
            "306460917",
            "192460336",
            "752710640",
            "460934126",
            "181588927",
            "681902717",
            "105075231",
            "106665143",
            "203671109",
            "231042885",
            "485134680",
            "724394647",
            "224937735",
            "154303380",
            "312646523",
            "949512355",
            "445489529",
            "549348851",
            "789682774",
            "945293895",
            "855912041"
        ];

        // Function to simulate barcode entry
        function simulateBarcodeEntry(code) {
            const inputElement = document.getElementById('barcode'); 
            const nextButton = document.getElementById('barcode_next');

            if (inputElement && nextButton) {
                inputElement.value = code;
                
                // Simulate a click on the button
                const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
                nextButton.dispatchEvent(clickEvent);
            }
        }

        // Function to process the next barcode
        function processNextBarcode() {
            const nextBarcode = codesBarres.shift();
            if (nextBarcode) {
                simulateBarcodeEntry(nextBarcode);
                setTimeout(processNextBarcode, 400);
            }
        }
        
        // Start processing the barcodes
        processNextBarcode();
    } else {
        console.error('codesBarres already exists in the window object. Choose a different variable name.');
    }
})();