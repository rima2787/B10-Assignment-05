document.getElementById('show-donation-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
    

       showSectionById('donation-details');

    })
document.getElementById('show-history-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
    

       showSectionById('history-details');

    })

// document.getElementById('show-donation-btn').addEventListener('click', function () {
//     document.getElementById('history-details').style.display = 'none';
//     document.getElementById('donation-details').style.display = 'block';
// });

// document.getElementById('show-history-btn').addEventListener('click', function () {
//     document.getElementById('donation-details').style.display = 'none';
//     document.getElementById('history-details').style.display = 'block';
// });
