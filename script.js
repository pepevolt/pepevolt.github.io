Telegram.WebApp.ready();

let score = 0;

document.getElementById("tap").onclick = () => {

    score++;

    document.getElementById("score").innerText = score;

};

async function connectWallet(){

    if(window.ethereum){

        const accounts = await ethereum.request({
            method: 'eth_requestAccounts'
        });

        document.getElementById("wallet").innerText =
        accounts[0];

    }else{

        alert("Wallet Not Found");

    }

}