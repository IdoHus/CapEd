//Fixed Mortgage Purchase
const mortgagePurchase = {
    //30 Year Mortgage
    y30Interest: "10",
    y30APR: "10",
    y30Points: "",
    y30Multipayment: "1199.10",
    y30Singlepayment: "1200.14",

    //15 Year Mortgage
    y15Interest: "6",
    y15APR: "6",
    y15Points: "",
    y15Multipayment: "2562.35",
    y15Singlepayment: "1648.45",

    //10 Year Mortgage
    y10Interest: "5.625",
    y10APR: "6.104",
    y10Points: "2182.93",
    y10Multipayment: "2182.93",
    y10Singlepayment: "2183.52"
};

//Mortgage Refinance
const mortgageRefinance = {
    //30 Year Refinance
    y30Interest: "6.125",
    y30APR: "",
    y30Points: "6.367",
    y30Multipayment: "1215.22",
    y30Singlepayment: "1216.42",

    //15 Year Refinance
    y15Interest: "5.625",
    y15APR: "5.907",
    y15Points: "",
    y15Multipayment: "1647.46",
    y15Singlepayment: "1648.45",

    //10 Year Refinance
    y10Interest: "5.625",
    y10APR: "6.026",
    y10Points: "",
    y10Multipayment: "2182.93",
    y10Singlepayment: "2183.52"
};

//Second Home Fixed Mortgage
const mortgageSecondHome = {
    //30 Year Second Home Mortgage
    y30Interest: "7.000",
    y30APR: "6.230",
    y30Points: "",
    y30Multipayment: "1199.10",
    y30Singlepayment: "1200.14",

    //15 Year Second Home Mortgage
    y15Interest: "5.625",
    y15APR: "5.962",
    y15Points: "",
    y15Multipayment: "1647.46",
    y15Singlepayment: "1648.45",

    //10 Year Second Home Mortgage
    y10Interest: "5.625",
    y10APR: "6.104",
    y10Points: "",
    y10Multipayment: "2182.93",
    y10Singlepayment: "2183.52"
};

//Second Home Refinance
const mortgageSecondHomeRefinance = {
    //30 Year Second Home Refinance
    y30Interest: "6.250",
    y30APR: "6.494",
    y30Points: "",
    y30Multipayment: "1231.43",
    y30Singlepayment: "1235.76",

    //15 Year Second Home Refinance
    y15Interest: "5.750",
    y15APR: "6.034",
    y15Points: "",
    y15Multipayment: "1660.82",
    y15Singlepayment: "1660.94",

    //10 Year Second Home Refinance
    y10Interest: "5.750",
    y10APR: "6.153",
    y10Points: "",
    y10Multipayment: "2195.38",
    y10Singlepayment: "2196.11"
};

//No touchie below this line unless you want to break things.
const purchase30r = document.getElementById("30ypr");
const purchase30apr = document.getElementById("30yapr");
const purchase30s = document.getElementById("30ysample");
const purchase15r = document.getElementById("15ypr");
const purchase15apr = document.getElementById("15yapr");
const purchase15s = document.getElementById("15ysample");
const purchase10r = document.getElementById("10ypr");
const purchase10apr = document.getElementById("10yapr");
const purchase10s = document.getElementById("10ysample");
const refi30r = document.getElementById("30yrr");
const refi30apr = document.getElementById("30yrapr");
const refi30s = document.getElementById("30yrsample");
const refi15r = document.getElementById("15yrr");
const refi15apr = document.getElementById("15yrapr");
const refi15s = document.getElementById("15yrsample");
const refi10r = document.getElementById("10yrr");
const refi10apr = document.getElementById("10yrapr");
const refi10s = document.getElementById("10yrsample");
const second30r = document.getElementById("30yshr");
const second30apr = document.getElementById("30yshapr");
const second30s = document.getElementById("30yshsample");
const second15r = document.getElementById("15yshr");
const second15apr = document.getElementById("15yshapr");
const second15s = document.getElementById("15yshsample");
const second10r = document.getElementById("10yshr");
const second10apr = document.getElementById("10yshapr");
const second10s = document.getElementById("10yshsample");
const secondrefi30r = document.getElementById("30yshrr");
const secondrefi30apr = document.getElementById("30yshrapr");
const secondrefi30s = document.getElementById("30yshrsample");
const secondrefi15r = document.getElementById("15yshrr");
const secondrefi15apr = document.getElementById("15yshrapr");
const secondrefi15s = document.getElementById("15yshrsample");
const secondrefi10r = document.getElementById("10yshrr");
const secondrefi10apr = document.getElementById("10yshrapr");
const secondrefi10s = document.getElementById("10yshrsample");


const rateVars = [[purchase30r, purchase30apr, purchase30s, mortgagePurchase.y30Interest, mortgagePurchase.y30APR, mortgagePurchase.y30Singlepayment, mortgagePurchase.y30Multipayment], [purchase15r, purchase15apr, purchase15s, mortgagePurchase.y15Interest, mortgagePurchase.y15APR, mortgagePurchase.y15Singlepayment, mortgagePurchase.y15Multipayment], [purchase10r, purchase10apr, purchase10s, mortgagePurchase.y10Interest, mortgagePurchase.y10APR, mortgagePurchase.y10Singlepayment, mortgagePurchase.y10Multipayment], [refi30r, refi30apr, refi30s, mortgageRefinance.y30Interest, mortgageRefinance.y30APR, mortgageRefinance.y30Singlepayment, mortgageRefinance.y30Multipayment], [refi15r, refi15apr, refi15s, mortgageRefinance.y15Interest, mortgageRefinance.y15APR, mortgageRefinance.y15Singlepayment, mortgageRefinance.y15Multipayment], [refi10r, refi10apr, refi10s, mortgageRefinance.y10Interest, mortgageRefinance.y10APR, mortgageRefinance.y10Singlepayment, mortgageRefinance.y10Multipayment], [second30r, second30apr, second30s, mortgageSecondHome.y30Interest, mortgageSecondHome.y30APR, mortgageSecondHome.y30Singlepayment, mortgageSecondHome.y30Multipayment], [second15r, second15apr, second15s, mortgageSecondHome.y15Interest, mortgageSecondHome.y15APR, mortgageSecondHome.y15Singlepayment, mortgageSecondHome.y15Multipayment], [second10r, second10apr, second10s, mortgageSecondHome.y10Interest, mortgageSecondHome.y10APR, mortgageSecondHome.y10Singlepayment, mortgageSecondHome.y10Multipayment], [secondrefi30r, secondrefi30apr, secondrefi30s, mortgageSecondHomeRefinance.y30Interest, mortgageSecondHomeRefinance.y30APR, mortgageSecondHomeRefinance.y30Singlepayment, mortgageSecondHomeRefinance.y30Multipayment], [secondrefi15r, secondrefi15apr, secondrefi15s, mortgageSecondHomeRefinance.y15Interest, mortgageSecondHomeRefinance.y15APR, mortgageSecondHomeRefinance.y15Singlepayment, mortgageSecondHomeRefinance.y15Multipayment], [secondrefi10r, secondrefi10apr, secondrefi10s, mortgageSecondHomeRefinance.y10Interest, mortgageSecondHomeRefinance.y10APR, mortgageSecondHomeRefinance.y10Singlepayment, mortgageSecondHomeRefinance.y10Multipayment]];

for (let i = 0; i < rateVars.length; i++) {
    if(rateVars[i][0]) {rateVars[i][0].innerText = rateVars[i][3]}
    if(rateVars[i][1]) {rateVars[i][1].innerText = rateVars[i][4]}
    if(rateVars[i][2]) {
        rateVars[i][2].setAttribute("data-bs-soloPayment", rateVars[i][5]);
        rateVars[i][2].setAttribute("data-bs-multiPayment", rateVars[i][6]);
        rateVars[i][2].setAttribute("data-bs-interest", rateVars[i][3] + "%");
        rateVars[i][2].setAttribute("data-bs-apr", rateVars[i][4] + "%");
    }
}
