getV1ParseData = (input) => {
  const data = {
    statusCode: 200,
    data: {
      firstName: input.data.substring(0, 8),
      lastName: input.data.substring(8, 18),
      clientId: input.data.substring(19),
    },
  };
  return data;
};

getV2ParseData = (input) => {
  const data = {
    statusCode: 200,
    data: {
      firstName: input.data.substring(0, 4),
      lastName: input.data.substring(8, 15),
      clientId: `${input.data.substring(18, 21)}-${input.data.substring(
        21,
        25
      )}`,
    },
  };
  return data;
};

module.exports = { getV1ParseData, getV2ParseData };
