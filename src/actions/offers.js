import * as api from "../api/index";
import { FETCH_OFFERS_SUCCESS } from "../types/index";

export const createOffer = offer => api.createOffer(offer);

export const fetchSentOffers = userId => dispatch => {
  return api.fetchSentOffers(userId).then(async offers => {
    const mappedOffers = await Promise.all(
      offers.map(offer => extractDataFromService(offer, "toUser"))
    );

    dispatch({
      type: FETCH_OFFERS_SUCCESS,
      offers: mappedOffers,
      offersType: "sent"
    });
    return mappedOffers;
  });
};

export const fetchReceivedOffers = userId => dispatch => {
  return api.fetchReceivedOffers(userId).then(async offers => {
    const mappedOffers = await Promise.all(
      offers.map(offer => extractDataFromService(offer, "fromUser"))
    );

    dispatch({
      type: FETCH_OFFERS_SUCCESS,
      offers: mappedOffers,
      offersType: "received"
    });
    return mappedOffers;
  });
};

export const extractDataFromService = async (offer, userType) => {
  const service = await offer.service.get();
  const user = await offer[userType].get();

  offer.service = service.data();
  offer[userType] = user.data();

  return offer;
};
