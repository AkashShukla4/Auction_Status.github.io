
// let response = fetch("https://gauravgitacc.github.io/postAppData/auctionData.json");

// response.then((serverResponse) => {

//     let data = serverResponse.json();

//     data.then((result) => {
//         console.log(result);
// });
//     data.catch((error) => {
//         console.log("Failed to parse the data" , error);
//     });

// });

// response.catch((error) => {
//     alert("some error",error);
// });

const cardsContainer = document.getElementsByClassName("cards-container")[0];


async function fetchData() {
    try {
        const result = await fetch("https://gauravgitacc.github.io/postAppData/auctionData.json");
        const data = await result.json();

        addDataOntoUI(data);
    }
    catch (error) {
        alert('some error occured', error);
    }
}
fetchData();



function addDataOntoUI(resultsList) {
    for (let i = 0; i < resultsList.length; i++) {
        let card = resultsList[i];
        let innerCard = `
            <div class="top">
            <div class="status">
                <b class="status-chip ${card.status.toLowerCase()}">${card.status}</b>
                <span class="case-number">${card.caseNumber}</span>
        </div>
        <span class="date">${card.date}</span>
        </div>
        <div class="bottom">
        <b class="from-location">${card.fromLocation}</b>
            <span class="to-location">${card.toLocation}</span>
        </div>
        <span class="price">${card.fare}</span>
        `;
        let cardContainer = document.createElement('div');
        cardContainer.className = "card";
        cardContainer.innerHTML = innerCard;


        cardContainer.addEventListener('click', () => {
            // set a cookie with the card data
            document.cookie = `card= ${JSON.stringify(card)}; path=/Auction Status/auction.html`;
            setTimeout(() => { 
                window.location.href = "http://127.0.0.1:5500/Auction%20Status/auction.html"; 
            }, 5000);
        });
                cardsContainer.append(cardContainer);
    }
}