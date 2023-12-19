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
            "445489529",
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
                setTimeout(processNextBarcode, 200);
            } else {
                // All barcodes processed, show completion popup
                showCompletionPopup();
            }
        }

        // Function to show completion popup
        function showCompletionPopup() {
            const popup = document.createElement('div');
            popup.innerHTML = 'Mouahahahahahah, tâche terminée !';
            popup.style.position = 'fixed';
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
            popup.style.padding = '10px';
            popup.style.background = '#ffffff';
            popup.style.border = '1px solid #000000';
            popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
            document.body.appendChild(popup);

            // Close the popup after 5 seconds (adjust as needed)
            setTimeout(() => {
                document.body.removeChild(popup);
            }, 5000);
        }

        // Start processing the barcodes
        processNextBarcode();
    } else {
        console.error('codesBarres already exists in the window object. Choose a different variable name.');
    }
})();
