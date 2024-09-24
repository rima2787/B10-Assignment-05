document.getElementById('donate-now-btn1').addEventListener('click', function (event) {
    event.preventDefault();

    const newDonation = getInputValueById('input-donate1');

    if (isNaN(newDonation)) {
        alert('Failed to Donation,Try Again');
        return;
    }

    if (newDonation > 0) {
        const totalBalance = getTextValueById('total-balance');

        if (newDonation > totalBalance) {
            alert('You do not have sufficient money.');
            return;
        }
        const totalBalanceSector = getTextValueById('total-balance-noakhali');
        const totalBalanceSectorSum = totalBalanceSector + newDonation;
        const totalRemainingBalance = totalBalance - newDonation;

        document.getElementById('total-balance').innerText = totalRemainingBalance;
        document.getElementById('total-balance-noakhali').innerText = totalBalanceSectorSum;



        // add to history
        const div = document.createElement('div');
        div.className = "bg-white text-black font-semibold border rounded-lg shadow-md text-start p-4 w-full sm:w-3/4 lg:w-1/2 m-auto mt-4"; // Responsive widths for mobile and PC
        div.innerHTML = `
              <h2 class="text-lg sm:text-xl lg:text-2xl">${newDonation} Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
              <p class="text-sm sm:text-base lg:text-lg">Date: ${new Date().toLocaleString()}</p>`;

        document.getElementById('history-details').prepend(div);


        document.getElementById('input-donate1').value = '';

    }
    else {
        alert('Invalid number!Please Try Again');
    }
})


document.getElementById('donate-now-btn2').addEventListener('click', function (event) {
    event.preventDefault();

    const newDonation = getInputValueById('input-donate2');

    if (isNaN(newDonation)) {
        alert('Failed to Donation,Try Again');
        return;
    }

    if (newDonation > 0) {
        const totalBalance = getTextValueById('total-balance');

        if (newDonation > totalBalance) {
            alert('You do not have sufficient money.');
            return;
        }
        const totalBalanceSector = getTextValueById('total-balance-feni');
        const totalBalanceSectorSum = totalBalanceSector + newDonation;
        const totalRemainingBalance = totalBalance - newDonation;

        document.getElementById('total-balance').innerText = totalRemainingBalance;
        document.getElementById('total-balance-feni').innerText = totalBalanceSectorSum;

        // add to history
        const div = document.createElement('div');
        div.className = "bg-white text-black font-semibold border rounded-lg shadow-md text-start p-4 w-full sm:w-3/4 lg:w-1/2 m-auto mt-4"; // Responsive widths for mobile and PC
        div.innerHTML = `
           <h2 class="text-lg sm:text-xl lg:text-2xl">${newDonation} Taka is Donated for Flood Relief in Feni, Bangladesh</h2>
           <p class="text-sm sm:text-base lg:text-lg">Date: ${new Date().toLocaleString()}</p>`;

        document.getElementById('history-details').prepend(div);


        document.getElementById('input-donate2').value = '';

    }
    else {
        alert('Invalid number!Please Try Again');
    }
})




document.getElementById('donate-now-btn3').addEventListener('click', function (event) {
    event.preventDefault();

    const newDonation = getInputValueById('input-donate3');

    if (isNaN(newDonation)) {
        alert('Failed to Donation,Try Again');
        return;
    }

    if (newDonation > 0) {
        const totalBalance = getTextValueById('total-balance');

        if (newDonation > totalBalance) {
            alert('You do not have sufficient money.');
            return;
        }
        const totalBalanceSector = getTextValueById('total-balance-injured-quota');
        const totalBalanceSectorSum = totalBalanceSector + newDonation;
        const totalRemainingBalance = totalBalance - newDonation;

        document.getElementById('total-balance').innerText = totalRemainingBalance;
        document.getElementById('total-balance-injured-quota').innerText = totalBalanceSectorSum;

        document.getElementById('input-donate3').innerText = '';

        // add to history
        const div = document.createElement('div');
        div.className = "bg-white text-black font-semibold border rounded-lg shadow-md text-start p-4 w-full sm:w-3/4 lg:w-1/2 m-auto mt-4"; // Responsive widths for mobile and PC
        div.innerHTML = `
           <h2 class="text-lg sm:text-xl lg:text-2xl">${newDonation} Taka is Donated for Aid for Injured in Quota Movement</h2>
           <p class="text-sm sm:text-base lg:text-lg">Date: ${new Date().toLocaleString()}</p>
        `;
        document.getElementById('history-details').prepend(div);
        

        document.getElementById('input-donate3').value = '';

    }
    else {
        alert('Invalid number!Please Try Again');
    }
})


