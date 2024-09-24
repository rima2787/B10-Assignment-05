const historyBtn = document.getElementById('show-history-btn');
const donationBtn = document.getElementById('show-donation-btn');

historyBtn.addEventListener('click', function () {
    historyBtn.classList.add(
        "text-black",
        "bg-green-300"
    );

    donationBtn.classList.remove(
        "text-black",
        "bg-green-300"
    );
})

donationBtn.addEventListener('click', function () {
    donationBtn.classList.add(
        "text-black",
        "bg-green-300"
    );

    historyBtn.classList.remove(
        "text-black",
        "bg-green-300"
    );
})



// const historyItem = document.createElement('div');
// historyItem.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500";

// historyItem.innerHTML = `
//    <h2 class ="text-xs text-gray-500">${newDonation} Taka is Donated for Aid for Injured in the Quota Movement </h2>
//    <p class ="text-xs text-gray-500">Date:${new Date().toLocaleString()} </p>;

// `
// const historyContainer = document.getElementById('history-details')
// historyContainer.insertBefore(historyItem, historyContainer.firstChild);




