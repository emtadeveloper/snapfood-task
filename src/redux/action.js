// Httpclient

import { get } from "../services";

// action Types

import { VENDORSLOADEDSUCSESS, VENDORSLOADINGSTARTED, VENDORSLODEDFAILES } from "./actionType.js";

export const vendorsLoadingStarted = () => ({
    type: VENDORSLOADINGSTARTED,
});

export const vendorsLoadedSuccess = (entities) => ({
    type: VENDORSLOADEDSUCSESS,
    payload: entities,
});

export const vendorsLoadedFailes = () => ({
    type: VENDORSLODEDFAILES,
});

export const fetchVendors = (pages) => {
    return (dispatch) => {
        dispatch(vendorsLoadingStarted());
        get(`vendors-list?page=${pages}&page_size=10&lat=35.754&long=51.328`)
            .then((res) => {
                dispatch(vendorsLoadedSuccess(res.data.data.finalResult));
            })
            .catch(() => dispatch(vendorsLoadedFailes()));
    };
};
