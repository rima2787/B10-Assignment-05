

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



// document.addEventListener("DOMContentLoaded", function() {
//     const modal = document.getElementById("my_modal_1");
//     const donateButton = document.getElementById("donate-now-btn1");

//     donateButton.onclick = function() {
//         modal.showModal();
//     };
// });
