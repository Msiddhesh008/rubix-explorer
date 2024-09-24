import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
// import { sponserMaster } from "../Services/sponser.service";
// import { investmentType } from "../Services/investment.type.service";
// import { exchangeRate } from "../Services/exchange.rate.service";
// import { ioService } from "../Services/io.service";
// import { investorDetails } from "../Services/investor.details.service";
// import { investorTransaction } from "../Services/investor.transaction.service";
// import { api } from "../Services/api.service";
// import { keyMerits } from "../Services/Key.merits.service";
// import { bankDetails } from "../Services/bank.details.service";
// import { contact } from "../Services/contact.service";
// import { depositRequest } from "../Services/deposit.request.service";
import { apiSlice, baseQuery } from "../Services/token.serivce";
import { onBoard } from "../Services/onboard.service";
import { profile } from "../Services/profile.service";
// import { drawalRequest } from "../Services/drawal.request.service";
// import { deleteRequest } from "../Services/delete.request.service";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [onBoard.reducerPath]: onBoard.reducer,
    [profile.reducerPath]: profile.reducer,
    // [sponserMaster.reducerPath]: sponserMaster.reducer,
    // [investmentType.reducerPath]: investmentType.reducer,
    // [exchangeRate.reducerPath]: exchangeRate.reducer,
    // [ioService.reducerPath]: ioService.reducer,
    // [investorDetails.reducerPath]: investorDetails.reducer,
    // [investorTransaction.reducerPath]: investorTransaction.reducer,
    // [bankDetails.reducerPath]: bankDetails.reducer,
    // [contact.reducerPath]: contact.reducer,
    // [depositRequest.reducerPath]: depositRequest.reducer,
    // [drawalRequest.reducerPath]: drawalRequest.reducer,
    // [deleteRequest.reducerPath]: deleteRequest.reducer,
    // Add other reducers as needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: baseQuery, // Pass Axios instance as extra argument
      },
    }).concat(
      onBoard.middleware,
      apiSlice.middleware,
      profile.middleware,
      // investmentType.middleware,
      // exchangeRate.middleware,
      // ioService.middleware,
      // investorDetails.middleware,
      // investorTransaction.middleware,
      // bankDetails.middleware,
      // contact.middleware,
      // depositRequest.middleware,
      // drawalRequest.middleware,
      // deleteRequest.middleware,
    ),
});

setupListeners(store.dispatch);

export default store;



