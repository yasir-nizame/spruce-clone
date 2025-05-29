import Cbutton from "../../../../../components/atoms/c-button";
import CCreditCard from "../../../../../components/atoms/c-credit-card";

const CreditCard = () => {
  return (
    <>
      <div className="bg-white p-4">
        <div className="grid grid-cols-2 gap-4 ">
          <CCreditCard
            last4Digits="1234"
            isDefault={true}
            onDefaultToggle={() => console.log("Toggle Default")}
            onDelete={() => console.log("Card Deleted")}
            cardType="visa"
          />
          <CCreditCard
            cardType="master"
            last4Digits="1234"
            isDefault={false}
            onDefaultToggle={() => console.log("Toggle Default")}
            onDelete={() => console.log("Card Deleted")}
          />
        </div>
        <div className=" !flex !justify-end">
          <Cbutton className="!py-5  !w-1/8 !my-4" label="Add New" />
        </div>
      </div>
    </>
  );
};

export default CreditCard;
