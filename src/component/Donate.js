import React, { useState, useRef, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id":
    "AdmGE3X9dxnJJOF-hp4APkLMt2M40xCa_Sha7PVnXwid0gmnsIsPsDjaH1_L3w9G6yi-lhW0CSMWAuaJ",
  currency: "USD",
  intent: "capture",
};
const paypalButtonConfig = {
  createOrder: (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "50.00",
          },
        },
      ],
    });
  },
  onApprove: (data, actions) => {
    return actions.order.capture().then((details) => {
      alert(`Transaction completed by ${details.payer.name.given_name}`);
    });
  },
};

export default function Donate() {
  const [loading, setLoading] = useState(true);
  const paypalButtonContainer = useRef(null);

  useEffect(() => {
    if (window.paypal) {
      setLoading(false);
      window.paypal
        .Buttons(paypalButtonConfig)
        .render(paypalButtonContainer.current);
    }
  }, []);

  return (
    <div
      className="flex flex-col w-full items-center my-10 md:my-14"
      id="donate"
    >
      <div className="flex flex-col md:flex-row pt-10 justify-center items-center">
        <div className="w-full sm:w-6/12 md:w-4/12 flex justify-center items-center">
          <img src="/qr_mock.jpeg" alt="" className="w-8/12 lg:w-6/12" />
        </div>
        <div className="w-10/12 sm:w-8/12 md:w-5/12 lg:w-6/12 flex flex-col justify-center items-center px-4">
          <p className="text-4xl lg:text-5xl font-bold pt-10 md:pt-0">Donate</p>
          <p className="lg:text-lg 2xl:text-xl py-6 text-center">
            Remember that the happiest people are not those getting more, but
            those giving more.
          </p>
          <img
            src="/qr.jpg"
            alt=""
            className="rounded-sm w-6/12 sm:w-4/12 md:w-5/12 lg:w-3/12"
          />
          <a
            href="/qr.jpg"
            className="flex justify-center items-center p-3 px-6 w-max bg-indigo-500 text-white font-semibold rounded-full shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02] transition-all ease-in-out duration-100 sm:scale-100 m-1.5"
            target="_blank"
            rel="noopener noreferrer"
            download={true}
          >
            Download QR&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="mt-4" ></div>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            layout: "horizontal",
            color: "gold",
            shape: "pill",
            label: "paypal",
          }}
          {...paypalButtonConfig}
        />
      </PayPalScriptProvider>
      <script src="https://www.paypal.com/sdk/js?client-id=AdmGE3X9dxnJJOF-hp4APkLMt2M40xCa_Sha7PVnXwid0gmnsIsPsDjaH1_L3w9G6yi-lhW0CSMWAuaJ"></script>
    </div>
  );
}
