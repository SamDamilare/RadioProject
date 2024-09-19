import { BiSolidPhoneCall } from "react-icons/bi";

const ContactDetails = () => {
  return (
    <div className="mt-16">
      <h1 className="text-center text-4xl font-semibold my-8">
        Get in touch today!
      </h1>
      <div className="flex text-sm mr-[200px] ml-[200px] justify-between">
        <div
          className="flex items-center p-8 w-[450px] justify-between rounded-3xl h-[100px]"
          style={{ background: "white" }}
        >
          <div className="flex items-center gap-2 ">
            <div className="p-3 rounded-xl" style={{ background: "#9570fe" }}>
              <img
                width="30px"
                src="https://res.cloudinary.com/dktrwqio1/image/upload/v1726417445/NYRadio/email_3_fks708.png"
              />
            </div>
            <p className="font-semibold">Mail Us</p>
          </div>
          <p>sassup@gmail.com</p>
        </div>
        <div
          className="flex items-center p-8 w-[450px] justify-between rounded-3xl h-[100px]"
          style={{ background: "white" }}
        >
          <div className="flex items-center gap-2 ">
            <div className="p-3 rounded-xl" style={{ background: "#f563d2" }}>
              <BiSolidPhoneCall fontSize={"30px"} color="white" />
            </div>
            <p className="font-semibold">Mail Us</p>
          </div>
          <p>+001 6547 6589</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
