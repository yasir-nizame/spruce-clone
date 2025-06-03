// import { Form, Switch } from "antd";
// import CLabelInput from "../../../../../components/atoms/c-label";
// import Cbutton from "../../../../../components/atoms/c-button";
// import CreditCardInput from "react-credit-card-input";

// const CardDetails = () => {
//   const [form] = Form.useForm();

//   const handleAddCard = () => {
//     form.validateFields().then((values) => {
//       console.log(" Values:", values);
//     });
//   };

//   return (
//     <div className="bg-white p-4">
//       <div>
//         <Form layout="vertical" form={form}>
//           <CLabelInput
//             label="Card Number"
//             name="cardNumber"
//             placeholder="xxxx xxxx xxxx xxxx"
//             type="text"
//             required
//             minLength={16}
//           />
//           <CreditCardInput
//             // cardNumberInputProps={{
//             //   value: cardNumber,
//             //   onChange: this.handleCardNumberChange,
//             // }}
//             // cardExpiryInputProps={{
//             //   value: expiry,
//             //   onChange: this.handleCardExpiryChange,
//             // }}
//             // cardCVCInputProps={{
//             //   value: cvc,
//             //   onChange: this.handleCardCVCChange,
//             // }}
//             fieldClassName="input"
//           />

//           <CLabelInput
//             label="Expiry"
//             name="expiry"
//             placeholder="MM/YYYY"
//             type="text"
//             required
//           />
//           <CLabelInput
//             label="CVV"
//             name="Cvv"
//             placeholder=""
//             type="text"
//             required
//             maxLength={16}
//           />
//           <CLabelInput label="Zip Code" name="zipCode" type="email" required />
//         </Form>
//       </div>
//       <div className="flex justify-between my-4">
//         <p>Set this card as default</p>
//         <Switch />
//       </div>
//       <div className="w-1/8 text-lg font-semibold !flex !justify-end">
//         <Cbutton
//           label="Add Card"
//           className="!font-semibold !py-5 h-[50px]"
//           onClick={handleAddCard}
//         />
//       </div>
//     </div>
//   );
// };

// export default CardDetails;

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Cbutton from "../../../../../components/atoms/c-button";
import { Switch } from "antd";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (elements == null) {
      return elements;
    }

    // Trigger form validation and wallet collection

    // const { error: submitError } = await elements.submit();
    // if (submitError) {
    //   // Show error to your customer
    //   setErrorMessage(submitError.message);
    //   return;
    // }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await fetch("/create-intent", {
      method: "POST",
    });

    const { client_secret: clientSecret } = await res.json();

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
      console.log(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
      <div className="flex justify-between my-4">
        <p>Set this card as default</p>
        <Switch />
      </div>

      <div className="!flex !justify-end">
        <Cbutton
          className="!py-5 !w-1/8 !my-2"
          label="Add Card"
          disabled={!stripe || !elements}
        />
      </div>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const options = {
  mode: "payment",
  amount: 1099,
  currency: "usd",
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

const CardDetails = () => (
  <Elements stripe={stripePromise} options={options}>
    <CheckoutForm />
  </Elements>
);

export default CardDetails;
