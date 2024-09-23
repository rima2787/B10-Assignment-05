document.getElementById('show-history-btn').addEventListener('click',function(event){
    event.preventDefault();

    const div = document.createElement('div');
    div.innerHTML = `
       <h2>${totalBalanceSector} Taka is Donated for Aid for Injured in the Quota Movement </h2>
       Date:${new Date().toLocaleString()};
    
    `
    document.getElementById('history-details').appendChild(div);

    
})