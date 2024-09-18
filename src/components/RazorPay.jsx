import React, { useState, useEffect } from "react";

const RazorPay = () => {
  const [rzp1, setRzp1] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => scriptLoaded();
    document.body.appendChild(script);
    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const scriptLoaded = () => {
    const options = {
      key: "rzp_live_Z00fZaH51I2BAi", // Enter the Key ID generated from the Dashboard
      amount: "30000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Corporate",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
      prefill: {
        name: "Abhinay ",
        email: "abhinay@example.com",
        contact: "9999999999"
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }
    };
    setRzp1(new window.Razorpay(options));
  };

  const payNow = () => {
    if (rzp1) {
      rzp1.open();
    }
  };

  return (
    <div>
      <p>  Razor Pay Integration</p>
      <button id="rzp-button1" onClick={payNow}>
        Pay
      </button>
    </div>
  );
};

export default RazorPay;
