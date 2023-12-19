(function() {
    // Check if codesBarres already exists in the window object
    if (!window.codesBarres) {
        // Declare codesBarres using let instead of const
        let codesBarres = [
            "700947816",
            "565834506",
            "741779397",
            "496339393",
            "180915569",
            "392218020",
            "563472245",
            "901763501",
            "423448271",
            "136432741",
            "551230527",
            "885595970",
            "256456265",
            "951644221",
            "371435205",
            "458389314",
            "388363291",
            "254610658",
            "462642916",
            "944791611",
            "855820052",
            "143920796",
            "749784365",
            "949942390",
            "003989271",
            "451116696",
            "358369889",
            "100283943",
            "832759666",
            "827802450",
            "656377586",
            "758011115",
            "195770347",
            "840421167",
            "650729592",
            "389635611",
            "102097016",
            "748521540",
            "365117004",
            "421246275",
            "623329061",
            "135307685",
            "791378294",
            "198989753",
            "665988602",
            "746877457",
            "838644930",
            "104752176",
            "720076152",
            "986565658",
            "776206595",
            "476187430",
            "992572984",
            "786320803",
            "628098241",
            "141233307",
            "289473442",
            "990402434",
            "373629275",
            "155103665",
            "690907478",
            "216682394",
            "741817672",
            "942646026",
            "372774429",
            "652127221",
            "184677154",
            "569833159",
            "186932161",
            "302451249",
            "872143474",
            "082959290",
            "821568317",
            "054833054",
            "551986513",
            "420486474",
            "386248292",
            "502057765",
            "945995426",
            "286815758",
            "819231579",
            "777608156",
            "671656222",
            "534767761",
            "555641025",
            "771545464",
            "668862301",
            "630307067",
            "874060459",
            "362984864",
            "858450406",
            "235487028",
            "576339707",
            "077754763",
            "040596792",
            "981920344",
            "496001607",
            "112061295",
            "386015409",
            "214331076",
            "891021820",
            "922381337",
            "502795824",
            "314145819",
            "993598027",
            "518304368",
            "579750081",
            "360038019",
            "902959035",
            "220228679",
            "586863975",
            "382240040",
            "065899184",
            "461233732",
            "888785437",
            "933228055",
            "966847505",
            "685296943",
            "777670273",
            "790429928",
            "033156697",
            "858140440",
            "884050969",
            "179158428",
            "481144242",
            "947284689"
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