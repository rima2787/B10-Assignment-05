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
        div.className = "bg-white text-black font-semibold input input-bordered input-lg text-start h-24 w-1/2 m-auto mt-4 p-2";
        div.innerHTML = `
           <h2>${newDonation} Taka is Donated for famine-2024 at Feni, Bangladesh </h2>
           Date:${new Date().toLocaleString()};

        `
        document.getElementById('history-details').prepend(div);

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
        div.className = "bg-white text-black font-semibold input input-bordered input-lg text-start h-24 w-1/2 m-auto mt-4 p-2";
        div.innerHTML = `
           <h2>${newDonation} Taka is Donated for Flood Relief in Feni. </h2>
           Date:${new Date().toLocaleString()};

        `
        document.getElementById('history-details').prepend(div);

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
        div.className = "bg-white text-black font-semibold input input-bordered input-lg text-start h-24 w-1/2 m-auto mt-4 p-2";
        div.innerHTML = `
           <h2>${newDonation} Taka is Donated for Aid for Injured in the Quota Movement </h2>
           Date:${new Date().toLocaleString()};

        `
        document.getElementById('history-details').prepend(div);

    }
    else {
        alert('Invalid number!Please Try Again');
    }
})


