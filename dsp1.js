function generateBid(
  interestGroup,
  auctionSignals,
  perBuyerSignals,
  trustedBiddingSignals,
  browserSignals
) {
  var bidCPM = Math.floor(Math.random() * 100, 10);
  var ad =
    interestGroup.ads[Math.floor(Math.random() * interestGroup.ads.length)];

  console.log(auctionSignals);
  console.log(perBuyerSignals);
  console.log(trustedBiddingSignals);
  console.log(browserSignals);

  return {
    ad: ad.metadata,
    bid: bidCPM,
    render: ad.renderUrl,
    allowComponentAuction: true,
  };
}

function reportWin(
  auctionSignals,
  perBuyerSignals,
  sellerSignals,
  browserSignals,
  directFromSellerSignals
) {
  console.log(auctionSignals);
  console.log(perBuyerSignals);
  console.log(sellerSignals);
  console.log(browserSignals);
  console.log(directFromSellerSignals);
}
