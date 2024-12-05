import AmazonLogo from "../assets/logo";

export function Footer() {
  return (
    <div className="bg-footer-background  w-full mt-10">
      <div className=" hidden md:flex justify-center border-b border-navbar-bglight">
        {Array(4)
          .fill(0)
          .map((x, i) => (
            <ListItems key={i} />
          ))}
      </div>
      <div className="flex flex-col justify-center items-center p-10">
        <AmazonLogo />
      </div>
      <div className="bg-footer-darkbg w-full flex justify-center items-center py-10 text-xs md:text-sm text-navbar-txt">
        <div>
          <span className="mx-3">Conditions of Use & Sale</span>
          <span className="mx-3">Privacy Notice</span>
          <span className="mx-3">Interest-Based Ads</span>
          <p className="text-center">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </div>
  );
}

function ListItems() {
  const list = [
    "Sell on Amazon",
    "Sell under Amazon Accelerator",
    "Protect and Build Your Brand",
    "Amazon Global Selling",
    "Supply to Amazon",
    "Become an Affiliate",
    "Fulfilment by Amazon",
    "Advertise Your Products",
    "Amazon Pay on Merchants",
  ];

  return (
    <div className="mt-6 mx-16 w-44 pb-10">
      <h2 className="text-white text-md font-bold">Make Money with Us</h2>
      <ul>
        {list.map((el, i) => (
          <li key={i} className="text-sm text-navbar-txt my-2">
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}
