

function getInputValueById(id) {
    const inputDonation = document.getElementById(id).value;
    const inputDonationNumber = parseFloat(inputDonation);
    return inputDonationNumber;
}

function getTextValueById(id){
    const textBalance = document.getElementById(id).innerText;
    const textBalanceNumber = parseFloat(textBalance);
    return textBalanceNumber;
}

function showSectionById(id){
    document.getElementById('donation-details').classList.add('hidden');
    document.getElementById('history-details').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}



document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("my_modal_5");
    const donateButton = document.getElementById("donate-now-btn1");

    // Show the modal when the button is clicked
    donateButton.onclick = function() {
        modal.showModal();
    };
    
    // Listen for the Escape key to close the modal
    window.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            modal.close(); // Close the modal
        }
    });
});
