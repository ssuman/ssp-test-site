let owner = "";

document.getElementById("shoes").addEventListener("click", function () {
  const interestGroup = {
    name: "shoes",
    owner,
    biddingLogicUrl: `${owner}/dsp/bidding-logic.js`,
    trustedBiddingSignalsUrl: `${owner}/dsp/bidding_signal-1.json`,
    trustedBiddingSignalsKeys: ["remainingBudget", "arbitrary-key"],
    dailyUpdateUrl: `${owner}/dsp/daily_update_url-${igName}.json`,
    userBiddingSignals: { user_bidding_signals: "user_bidding_signals" },
    ads: [
      {
        renderUrl: `${owner}/advertiser/${igName}-ad-1.html`,
        metadata: {
          type: igNameExternal,
          crid: `${igNameExternal}_ad_1_crid`,
          cid: `${igNameExternal}_ad_1_cid`,
          cat: ["IAB-1"],
          seat: `${igNameExternal}_ad_1_seat_id`,
          adomain: [`${igNameExternal}_ad_1_adomain.com`],
          w: 300,
          h: 250,
        },
      },
      {
        renderUrl: `${owner}/advertiser/${igName}-ad-2.html`,
        metadata: {
          type: igNameExternal,
          crid: `${igNameExternal}_ad_2_crid`,
          cid: `${igNameExternal}_ad_2_cid`,
          cat: ["IAB-2"],
          seat: `${igNameExternal}_ad_2_seat_id`,
          adomain: [`${igNameExternal}_ad_2_adomain.com`],
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
    biddingLogicUrl: `${igOwner}/dsp/bidding-logic.js`,
    trustedBiddingSignalsUrl: `${igOwner}/dsp/bidding_signal-1.json`,
    trustedBiddingSignalsKeys: ["remainingBudget", "arbitrary-key"],
    dailyUpdateUrl: `${igOwner}/dsp/daily_update_url-${igName}.json`,
    biddingLogicUrl: `${igOwner}/dsp/bidding-logic.js`,
    dailyUpdateUrl: `${igOwner}/dsp/daily_update_url-${igName2}.json`,
    userBiddingSignals: { user_bidding_signals: "user_bidding_signals" },
    ads: [
      {
        renderUrl: `${igOwner}/advertiser/${igName2}-ad-1.html`,
        metadata: {
          type: igNameExternal,
          crid: `${igName2External}_ad_1_crid`,
          cid: `${igName2External}_ad_1_cid`,
          cat: ["IAB-1"],
          seat: `${igName2External}_ad_1_seat_id`,
          adomain: [`${igName2External}_ad_1_adomain.com`],
          w: 300,
          h: 250,
        },
      },
      {
        renderUrl: `${igOwner}/advertiser/${igName2}-ad-2.html`,
        metadata: {
          type: igNameExternal,
          crid: `${igName2External}_ad_2_crid`,
          cid: `${igName2External}_ad_2_cid`,
          cat: ["IAB-2"],
          seat: `${igName2External}_ad_2_seat_id`,
          adomain: [`${igName2External}_ad_2_adomain.com`],
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
