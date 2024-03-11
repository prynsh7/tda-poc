export function countHouseTypesByLocality(data: any) {
  const localityHouseCounts: any = {};

  data.forEach((propertyData: any) => {
    const locality = propertyData["STATE"]?.split(",")[0] || "Unknown";
    const houseType = propertyData["TYPE"] || "Unknown";

    if (!localityHouseCounts[locality]) {
      localityHouseCounts[locality] = {};
    }

    localityHouseCounts[locality][houseType] =
      (localityHouseCounts[locality][houseType] || 0) + 1;
  });

  return localityHouseCounts;
}

export function countSublocalities(data: any) {
  const sublocalityCount: any = {};

  data.forEach((propertyData: any) => {
    const sublocality = propertyData["STATE"]?.split(",")[0] || "Unknown";
    sublocalityCount[sublocality] = (sublocalityCount[sublocality] || 0) + 1;
  });

  return sublocalityCount;
}

export function sortAndSliceSublocalities(sublocalityCounts: any) {
  const sublocalityEntries = Object.entries(sublocalityCounts);

  const sortedSublocalities = sublocalityEntries.sort(
    (a: any, b: any) => b[1] - a[1]
  );

  // Slice the top 10 sublocalities
  const top10Sublocalities = sortedSublocalities.slice(0, 10);

  return top10Sublocalities;
}

export function getBrokersPropertyCOuntWithState(data: any) {
  const brokersPropertyCount: any = {};

  data.forEach((propertyData: any) => {
    const broker = propertyData["BROKERTITLE"];
    const state = propertyData["STATE"]?.split(",")[0] || "Unknown";

    if (!brokersPropertyCount[broker]) {
      brokersPropertyCount[broker] = {};
    }

    brokersPropertyCount[broker][state] =
      (brokersPropertyCount[broker][state] || 0) + 1;
  });

  return brokersPropertyCount;
}

export function getAveragePriceByStateAndPropertyType(data: any) {
  const averagePriceByStateAndPropertyType: any = {};

  data.forEach((propertyData: any) => {
    const state = propertyData["STATE"]?.split(",")[0] || "Unknown";
    const propertyType = propertyData["TYPE"] || "Unknown";
    const price = propertyData["PRICE"];

    if (!averagePriceByStateAndPropertyType[state]) {
      averagePriceByStateAndPropertyType[state] = {};
    }

    if (!averagePriceByStateAndPropertyType[state][propertyType]) {
      averagePriceByStateAndPropertyType[state][propertyType] = [];
    }

    averagePriceByStateAndPropertyType[state][propertyType].push(price);
  });

  const averagePriceByStateAndPropertyTypeResult: any = {};

  Object.entries(averagePriceByStateAndPropertyType).forEach(
    ([state, propertyTypePrice]:any) => {
      averagePriceByStateAndPropertyTypeResult[state] = {};

      Object.entries(propertyTypePrice).forEach(([propertyType, prices]:any) => {
        const averagePrice =
          prices.reduce((acc: any, price: any) => acc + price, 0) / prices.length;

        averagePriceByStateAndPropertyTypeResult[state][propertyType] =
          averagePrice;
      });
    }
  );

  return averagePriceByStateAndPropertyTypeResult;
}
