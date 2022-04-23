// package

import produce from "immer";
import { combineReducers } from "redux";

// action type

import { VENDORSLOADEDSUCSESS, VENDORSLOADINGSTARTED, VENDORSLODEDFAILES } from "./actionType.js";

const initState = { status: "idle", entities: {} };

const reducer = produce((state, action) => {
    switch (action.type) {
        //
        case VENDORSLOADINGSTARTED:
            state.status = "loading";
            break;

        case VENDORSLODEDFAILES:
            state.status = "error";
            break;

        case VENDORSLOADEDSUCSESS:
            const products = action.payload;
            const newEntities = {};
            products.forEach((items) => {
                const item = items["data"];
                newEntities[item.id] = item;
                state.entities = { ...state.entities, ...newEntities };
                state.status = "idle";
            });
            break;

        default:
            break;
    }
}, initState);

const rootReducer = combineReducers({ reducer });

export default rootReducer;
