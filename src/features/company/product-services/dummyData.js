import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const COLUMN = [
  {
    value: "Name",
    className: "",
  },
  {
    value: "SKU",
    className: "",
  },
  {
    value: "Sale Price",
    className: "",
  },
  {
    value: "Purchase Price",
    className: "",
  },
  {
    value: "TAX",
    className: "",
  },
  {
    value: "Category",
    className: "",
  },
  {
    value: "Unit",
    className: "",
  },
  {
    value: "Quantity",
    className: "",
  },
  {
    value: "Type",
    className: "",
  },
  {
    value: "Action",
    className: "",
  },
];

const ROW = [
  [
    { value: "Women Bag", className: "" },
    { value: "P100", className: "" },
    { value: "$350.00", className: "" },
    { value: "$300.00", className: "" },
    { value: "CGST SGST", className: "" },
    { value: "Business profits", className: "" },
    { value: "PC", className: "" },
    { value: "101", className: "" },
    { value: "Product", className: "" },
    {
      title: "Action",
      value: (
        <div className="flex items-center gap-1">
          <div className="tooltip" data-tip="Edit">
            <button className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
              <FiEdit />
            </button>
          </div>
          <div className="tooltip" data-tip="Delete">
            <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      ),
      className: "",
    },
  ],
  [
    { value: "Clock", className: "" },
    { value: "00711", className: "" },
    { value: "$200.00", className: "" },
    { value: "$200.00", className: "" },
    { value: "SGST", className: "" },
    { value: "Medical", className: "" },
    { value: "Inch", className: "" },
    { value: "400", className: "" },
    { value: "Product", className: "" },
    {
      title: "Action",
      value: (
        <div className="flex items-center gap-1">
          <div className="tooltip" data-tip="Edit">
            <button className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
              <FiEdit />
            </button>
          </div>
          <div className="tooltip" data-tip="Delete">
            <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      ),
      className: "",
    },
  ],
  [
    { value: "Oven", className: "" },
    { value: "TRG520", className: "" },
    { value: "$500.00", className: "" },
    { value: "$500.00", className: "" },
    { value: "CGST", className: "" },
    { value: "Medical", className: "" },
    { value: "Inch", className: "" },
    { value: "701", className: "" },
    { value: "Product", className: "" },
    {
      title: "Action",
      value: (
        <div className="flex items-center gap-1">
          <div className="tooltip" data-tip="Edit">
            <button className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
              <FiEdit />
            </button>
          </div>
          <div className="tooltip" data-tip="Delete">
            <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      ),
      className: "",
    },
  ],
  [
    { value: "Shoes", className: "" },
    { value: "00152", className: "" },
    { value: "$5.00", className: "" },
    { value: "$416.00", className: "" },
    { value: "SGST Service Tax", className: "" },
    { value: "Business profits", className: "" },
    { value: "Meter", className: "" },
    { value: "-30", className: "" },
    { value: "Product", className: "" },
    {
      title: "Action",
      value: (
        <div className="flex items-center gap-1">
          <div className="tooltip" data-tip="Edit">
            <button className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
              <FiEdit />
            </button>
          </div>
          <div className="tooltip" data-tip="Delete">
            <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      ),
      className: "",
    },
  ],
  [
    { value: "Purse", className: "" },
    { value: "001452", className: "" },
    { value: "$410.00", className: "" },
    { value: "$495.00", className: "" },
    { value: "SGST Service Tax", className: "" },
    { value: "Medical", className: "" },
    { value: "PC", className: "" },
    { value: "49", className: "" },
    { value: "Product", className: "" },
    {
      title: "Action",
      value: (
        <div className="flex items-center gap-1">
          <div className="tooltip" data-tip="Edit">
            <button className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
              <FiEdit />
            </button>
          </div>
          <div className="tooltip" data-tip="Delete">
            <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      ),
      className: "",
    },
  ],
  [
    { value: "T-Shirt", className: "" },
    { value: "BC008A74", className: "" },
    { value: "$628.00", className: "" },
    { value: "$338.00", className: "" },
    { value: "SGST Service Tax", className: "" },
    { value: "Medical", className: "" },
    { value: "PC", className: "" },
    { value: "20", className: "" },
    { value: "Product", className: "" },
    {
      title: "Action",
      value: (
        <div className="flex items-center gap-1">
          <div className="tooltip" data-tip="Edit">
            <button className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
              <FiEdit />
            </button>
          </div>
          <div className="tooltip" data-tip="Delete">
            <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      ),
      className: "",
    },
  ],
  [
    { value: "Car", className: "" },
    { value: "SKU123", className: "" },
    { value: "$100.00", className: "" },
    { value: "$100.00", className: "" },
    { value: "SGST", className: "" },
    { value: "Medical", className: "" },
    { value: "Inch", className: "" },
    { value: "-20", className: "" },
    { value: "Product", className: "" },
    {
      title: "Action",
      value: (
        <div className="flex items-center gap-1">
          <div className="tooltip" data-tip="Edit">
            <button className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
              <FiEdit />
            </button>
          </div>
          <div className="tooltip" data-tip="Delete">
            <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      ),
      className: "",
    },
  ],
  [
    { value: "Bicycle Clothing", className: "" },
    { value: "BC008AC1", className: "" },
    { value: "$10,000.00", className: "" },
    { value: "$1,000.00", className: "" },
    { value: "SGST", className: "" },
    { value: "Clothing", className: "" },
    { value: "Inch", className: "" },
    { value: "48", className: "" },
    { value: "Product", className: "" },
    {
      title: "Action",
      value: (
        <div className="flex items-center gap-1">
          <div className="tooltip" data-tip="Edit">
            <button className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
              <FiEdit />
            </button>
          </div>
          <div className="tooltip" data-tip="Delete">
            <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      ),
      className: "",
    },
  ],
  [
    { value: "Teagan Forbes", className: "" },
    { value: "BC008ACC", className: "" },
    { value: "$2.00", className: "" },
    { value: "$866.00", className: "" },
    { value: "CGST SGST", className: "" },
    { value: "Clothing", className: "" },
    { value: "Inch", className: "" },
    { value: "12", className: "" },
    { value: "Product", className: "" },
    {
      title: "Action",
      value: (
        <div className="flex items-center gap-1">
          <div className="tooltip" data-tip="Edit">
            <button className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
              <FiEdit />
            </button>
          </div>
          <div className="tooltip" data-tip="Delete">
            <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      ),
      className: "",
    },
  ],
  [
    { value: "Helmet", className: "" },
    { value: "HL005MET", className: "" },
    { value: "$50.00", className: "" },
    { value: "$30.00", className: "" },
    { value: "CGST SGST", className: "" },
    { value: "Business profits", className: "" },
    { value: "Inch", className: "" },
    { value: "-6", className: "" },
    { value: "Service", className: "" },
    {
      title: "Action",
      value: (
        <div className="flex items-center gap-1">
          <div className="tooltip" data-tip="Edit">
            <button className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
              <FiEdit />
            </button>
          </div>
          <div className="tooltip" data-tip="Delete">
            <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      ),
      className: "",
    },
  ],
];

const expenseAccounts = [
    { value: "", label: "Select Account", className: "subAccount" },
    { value: "58", label: "5005 - Cost of Sales- On Services", className: "subAccount" },
    { value: "59", label: "5010 - Cost of Sales - Purchases", className: "subAccount" },
    { value: "60", label: "5015 - Operating Costs", className: "subAccount" },
    { value: "61", label: "5020 - Material Usage Varaiance", className: "subAccount" },
    { value: "62", label: "5025 - Breakage and Replacement Costs", className: "subAccount" },
    { value: "63", label: "5030 - Consumable Materials", className: "subAccount" },
    { value: "64", label: "5035 - Sub-contractor Costs", className: "subAccount" },
    { value: "65", label: "5040 - Purchase Price Variance", className: "subAccount" },
    { value: "66", label: "5045 - Direct Labour - COS", className: "subAccount" },
    { value: "67", label: "5050 - Purchases of Materials", className: "subAccount" },
    { value: "68", label: "5060 - Discounts Received", className: "subAccount" },
    { value: "69", label: "5100 - Freight Costs", className: "subAccount" },
    { value: "70", label: "5410 - Salaries and Wages", className: "subAccount" },
    { value: "71", label: "5415 - Directors Fees & Remuneration", className: "subAccount" },
    { value: "72", label: "5420 - Wages - Overtime", className: "subAccount" },
    { value: "73", label: "5425 - Members Salaries", className: "subAccount" },
    { value: "74", label: "5430 - UIF Payments", className: "subAccount" },
    { value: "75", label: "5440 - Payroll Taxes", className: "subAccount" },
    { value: "76", label: "5450 - Workers Compensation ( Coida )", className: "subAccount" },
    { value: "77", label: "5460 - Normal Taxation Paid", className: "subAccount" },
    { value: "78", label: "5470 - General Benefits", className: "subAccount" },
    { value: "79", label: "5510 - Provisional Tax Paid", className: "subAccount" },
    { value: "80", label: "5520 - Inc Tax Exp - State", className: "subAccount" },
    { value: "81", label: "5530 - Taxes - Real Estate", className: "subAccount" },
    { value: "82", label: "5540 - Taxes - Personal Property", className: "subAccount" },
    { value: "83", label: "5550 - Taxes - Franchise", className: "subAccount" },
    { value: "84", label: "5560 - Taxes - Foreign Withholding", className: "subAccount" },
    { value: "85", label: "5610 - Accounting Fees", className: "subAccount" },
    { value: "86", label: "5615 - Advertising and Promotions", className: "subAccount" },
    { value: "87", label: "5620 - Bad Debts", className: "subAccount" },
    { value: "88", label: "5625 - Courier and Postage", className: "subAccount" },
    { value: "89", label: "5660 - Depreciation Expense", className: "subAccount" },
    { value: "90", label: "5685 - Insurance Expense", className: "subAccount" },
    { value: "91", label: "5690 - Bank Charges", className: "subAccount" },
    { value: "92", label: "5695 - Interest Paid", className: "subAccount" },
    { value: "93", label: "5700 - Office Expenses - Consumables", className: "subAccount" },
    { value: "94", label: "5705 - Printing and Stationary", className: "subAccount" },
    { value: "95", label: "5710 - Security Expenses", className: "subAccount" },
    { value: "96", label: "5715 - Subscription - Membership Fees", className: "subAccount" },
    { value: "97", label: "5755 - Electricity, Gas and Water", className: "subAccount" },
    { value: "98", label: "5760 - Rent Paid", className: "subAccount" },
    { value: "99", label: "5765 - Repairs and Maintenance", className: "subAccount" },
    { value: "100", label: "5770 - Motor Vehicle Expenses", className: "subAccount" },
    { value: "101", label: "5771 - Petrol and Oil", className: "subAccount" },
    { value: "102", label: "5775 - Equipment Hire - Rental", className: "subAccount" },
    { value: "103", label: "5780 - Telephone and Internet", className: "subAccount" },
    { value: "104", label: "5785 - Travel and Accommodation", className: "subAccount" },
    { value: "105", label: "5786 - Meals and Entertainment", className: "subAccount" },
    { value: "106", label: "5787 - Staff Training", className: "subAccount" },
    { value: "107", label: "5790 - Utilities", className: "subAccount" },
    { value: "108", label: "5791 - Computer Expenses", className: "subAccount" },
    { value: "109", label: "5795 - Registrations", className: "subAccount" },
    { value: "110", label: "5800 - Licenses", className: "subAccount" },
    { value: "111", label: "5810 - Foreign Exchange Loss", className: "subAccount" },
    { value: "112", label: "9990 - Profit and Loss", className: "subAccount" },
  ];
  

export { COLUMN, ROW, expenseAccounts };
