const auctionConfig = {
  seller: "https://pub-suman.netlify.app",

  decisionLogicUrl: `https://pub-suman.netlify.app/ssp/decision-logic.js`,
  trustedScoringSignalsUrl: `https://pub-suman.netlify.app/ssp/kv.json`,

  interestGroupBuyers: [
    // * is not supported yet
    "https://retail-dsp-suman.netlify.app/",
  ],
  // public for everyone
  auctionSignals: { auction_signals: "auction_signals" },

  // only for single party
  sellerSignals: {
    floor: 7,
    auctionID: "id_" + Math.round(Math.random() * 1000000),
  },

  // only for single party
  perBuyerSignals: {
    // listed on interestGroupByers
    [`https://retail-dsp-suman.netlify.app/`]: {
      buyerdata: "per_buyer_signals",
    },
  },
};

var adAuctionID = "fledge-iframe";

var b = document.getElementById("run");
var target = document.getElementById("ad");

b.onclick = async () => {
  console.log("Runnning auction");
  var old = document.getElementById(adAuctionID);

  var adSlotDesc = document.createElement("div");

  const adAuctionResult = await navigator.runAdAuction(auctionConfig);
  if (adAuctionResult) {
    const frametype = "iframe";
    console.debug(`display ads in <${frametype}>`);
    const $iframe = document.createElement(frametype);
    $iframe.src = adAuctionResult;
    $iframe.id = adAuctionID;
    $iframe.setAttribute("scrolling", "no");
    $iframe.style = "width:300px; height:250px";
    if (frametype === "fencedframe") {
      $iframe.mode = "opaque-ads";
    }
    old.replaceWith($iframe);
    //target.appendChild($iframe);
  } else {
    const adContainer = document.getElementById("ad-container");
    adContainer.innerHTML =
      '<div class="demo-ad-slot-area" id="fledge-iframe">300x250 <br><br><p style="color:red">no auction winner</p></div>';
  }
};
