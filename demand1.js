let owner = "https://retail-dsp-suman.netlify.app";

document.getElementById("shoes").addEventListener("click", function () {
  let igName = "shoes";

  const interestGroup = {
    name: igName,
    owner,
    biddingLogicUrl: `${owner}/dsp1.js`,
    trustedBiddingSignalsUrl: `${owner}/dsp1-bidding_signal-1.json`,
    trustedBiddingSignalsKeys: ["remainingBudget", "arbitrary-key"],
    dailyUpdateUrl: `${owner}/dsp1-daily_update_url-${igName}.json`,
    userBiddingSignals: { user_bidding_signals: "user_bidding_signals" },
    ads: [
      {
        renderUrl: `${owner}/advertiser/${igName}-ad-1.html`,
        metadata: {
          type: igName,
          crid: `${igName}_ad_1_crid`,
          cid: `${igName}_ad_1_cid`,
          cat: ["IAB-1"],
          seat: `${igName}_ad_1_seat_id`,
          adomain: [`${igName}_ad_1_adomain.com`],
          w: 300,
          h: 250,
        },
      },
      {
        renderUrl: `${owner}/advertiser/${igName}-ad-2.html`,
        metadata: {
          type: igName,
          crid: `${igName}_ad_2_crid`,
          cid: `${igName}_ad_2_cid`,
          cat: ["IAB-2"],
          seat: `${igName}_ad_2_seat_id`,
          adomain: [`${igName}_ad_2_adomain.com`],
          w: 300,
          h: 250,
        },
      },
    ],
  };
  joinIG(interestGroup);
});

document.getElementById("books").addEventListener("click", function () {
  let igName = "books";

  const interestGroup = {
    name: igName,
    owner,
    biddingLogicUrl: `${owner}/dsp1.js`,
    trustedBiddingSignalsUrl: `${owner}/dsp1-bidding_signal-1.json`,
    trustedBiddingSignalsKeys: ["remainingBudget", "arbitrary-key"],
    dailyUpdateUrl: `${owner}/dsp1-daily_update_url-${igName}.json`,
    userBiddingSignals: { user_bidding_signals: "user_bidding_signals" },
    ads: [
      {
        renderUrl: `${owner}/advertiser/${igName}-ad-1.html`,
        metadata: {
          type: igName,
          crid: `${igName}_ad_1_crid`,
          cid: `${igName}_ad_1_cid`,
          cat: ["IAB-1"],
          seat: `${igName}_ad_1_seat_id`,
          adomain: [`${igName}_ad_1_adomain.com`],
          w: 300,
          h: 250,
        },
      },
      {
        renderUrl: `${owner}/advertiser/${igName}-ad-2.html`,
        metadata: {
          type: igName,
          crid: `${igName}_ad_2_crid`,
          cid: `${igName}_ad_2_cid`,
          cat: ["IAB-2"],
          seat: `${igName}_ad_2_seat_id`,
          adomain: [`${igName}_ad_2_adomain.com`],
          w: 300,
          h: 250,
        },
      },
    ],
  };

  joinIG(interestGroup);
});

function joinIG(interestGroup) {
  const kSecsPerDay = 3600 * 24 * 30;
  console.debug(navigator.joinAdInterestGroup(interestGroup, kSecsPerDay));
}
