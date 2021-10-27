export const availableSortingMethods = [
  "Best Match",
  "Time: ending soonest",
  "Time: newly listed",
  "Price + Shipping: lowest first",
  "Price + Shipping: highest first",
  "Distance: nearest first",
];

export const availableFilters = [
  {
    name: "Price Range",
    type: "slider",
    parameters: {},
  },
  {
    name: "Condition",
    type: "selector",
    parameters: {
      details: "multiple",
      options: ["New", "Used", "Not Specified"],
    },
  },
  {
    name: "Buying Format",
    type: "selector",

    parameters: {
      details: "multiple",
      options: [
        "All Listings",
        "Accepts Offers",
        "Auction",
        "Buy It Now",
        "Classified Ads",
      ],
    },
  },
  {
    name: "Item Location",
    type: "selector",
    parameters: {
      details: "multiple",
      options: ["US", "North America", "Europe", "Asia"],
    },
  },
  {
    name: "Show Only",
    type: "selector",
    parameters: {
      details: "multiple",
      options: [
        "Free Returns",
        "Returns Accepted",
        "Authorized Seller",
        "Completed Items",
        "Sold Items",
        "Deals & Savings",
        "Sale Items",
        "Listed as Lots",
        "Search in Description",
        "Benefits Charity",
        "Authenticity Verified",
      ],
    },
  },
];
