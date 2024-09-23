document.getElementById('donate-now-btn').addEventListener('click',function(event){
    event.preventDefault();

    const newDonation = getInputValueById('input-donate');
   
    if(newDonation > 0){
        const totalBalance = getTextValueById('total-balance');
        const totalBalanceSector = getTextValueById('total-balance-noakhali');
        const totalBalanceSectorSum = totalBalanceSector + newDonation;
        const totalRemainingBalance = totalBalance - newDonation;

        document.getElementById('total-balance').innerText = totalRemainingBalance;
        document.getElementById('total-balance-noakhali').innerText = totalBalanceSectorSum;

    }
    else{
        alert('Invalid number!Please Try Again');
    }
})
document.getElementById('donate-now-btn2').addEventListener('click',function(event){
    event.preventDefault();

    const newDonation = getInputValueById('input-donate2');
   
    if(newDonation > 0){
        const totalBalance = getTextValueById('total-balance');
        const totalBalanceSector = getTextValueById('total-balance-feni');
        const totalBalanceSectorSum = totalBalanceSector + newDonation;
        const totalRemainingBalance = totalBalance - newDonation;

        document.getElementById('total-balance').innerText = totalRemainingBalance;
        document.getElementById('total-balance-feni').innerText = totalBalanceSectorSum;

    }
    else{
        alert('Invalid number!Please Try Again');
    }
})
document.getElementById('donate-now-btn3').addEventListener('click',function(event){
    event.preventDefault();

    const newDonation = getInputValueById('input-donate3');

    if(isNaN(newDonation)){
        alert('Failed to Donation,Try Again');
    }
   
    if(newDonation > 0){
        const totalBalance = getTextValueById('total-balance');
        const totalBalanceSector = getTextValueById('total-balance-injured-quota');
        const totalBalanceSectorSum = totalBalanceSector + newDonation;
        const totalRemainingBalance = totalBalance - newDonation;

        document.getElementById('total-balance').innerText = totalRemainingBalance;
        document.getElementById('total-balance-injured-quota').innerText = totalBalanceSectorSum;

        // add to history
        const div = document.createElement('div');
        div.innerHTML = `
           <h2>${totalBalanceSector} Taka is Donated for Aid for Injured in the Quota Movement </h2>
           Date:${new Date().toLocaleString()};
        
        `
        document.getElementById('history-details').appendChild(div);

    }
    else{
        alert('Invalid number!Please Try Again');
    }
})


