const permissions = [
  {
    module: "Dashboard",
    permissions: ["Show"],
  },
  {
    module: "User",
    permissions: ["Manage", "Create", "Edit", "Delete"],
  },
  {
    module: "Role",
    permissions: ["Manage", "Create", "Edit", "Delete"],
  },
  {
    module: "Proposal",
    permissions: [
      "Manage",
      "Create",
      "Edit",
      "Delete",
      "Show",
      "Send",
      "Duplicate",
      "Convert To Invoice",
      "Convert To Retainer",
    ],
  },
  {
    module: "Retainer",
    permissions: [
      "Manage",
      "Create",
      "Edit",
      "Delete",
      "Show",
      "Send",
      "Duplicate",
      "Convert To Invoice",
    ],
  },
  {
    module: "Invoice",
    permissions: [
      "Manage",
      "Create",
      "Edit",
      "Delete",
      "Show",
      "Send",
      "Create Payment",
      "Delete Payment",
      "Duplicate",
    ],
  },
  {
    module: "Bill",
    permissions: [
      "Manage",
      "Create",
      "Edit",
      "Delete",
      "Show",
      "Send",
      "Create Payment",
      "Delete Payment",
      "Duplicate",
    ],
  },
  {
    module: "Revenue",
    permissions: ["Manage", "Create", "Edit", "Delete"],
  },
  {
    module: "Payment",
    permissions: ["Manage", "Create", "Edit", "Delete"],
  },
  {
    module: "Proposal product",
    permissions: ["Delete"],
  },
  {
    module: "Invoice product",
    permissions: ["Delete"],
  },
  {
    module: "Bill product",
    permissions: ["Delete"],
  },
  {
    module: "Goal",
    permissions: ["Manage", "Create", "Edit", "Delete"],
  },
  {
    module: "Credit note",
    permissions: ["Manage", "Create", "Edit", "Delete"],
  },
  {
    module: "Debit note",
    permissions: ["Manage", "Create", "Edit", "Delete"],
  },
  {
    module: "Bank account",
    permissions: ["Manage", "Create", "Edit", "Delete"],
  },
  {
    module: "Transfer",
    permissions: ["Manage", "Create", "Edit", "Delete"],
  },
  {
    module: "Transaction",
    permissions: ["Manage"],
  },
  {
    module: "Product & service",
    permissions: ["Manage", "Create", "Edit", "Delete"],
  },
  {
    module: "Customer",
    permissions: ["Manage", "Create", "Edit", "Delete", "Show"],
  },
  {
    module: "Vender",
    permissions: ["Manage", "Create", "Edit", "Delete", "Show"],
  },
  {
    module: "Plan",
    permissions: ["Manage", "Buy"],
  },
  {
    module: "Contract",
    permissions: ["Manage", "Create", "Edit", "Delete", "Show", "Duplicate"],
  },
  {
    module: "Constant tax",
    permissions: ["Manage", "Create", "Edit", "Delete"],
  },
  {
    module: "Constant category",
    permissions: ["Manage", "Create", "Edit", "Delete"],
  },
  {
    module: "Constant unit",
    permissions: ["Manage", "Create", "Edit", "Delete"],
  },
  {
    module: "Constant custom field",
    permissions: ["Manage", "Create", "Edit", "Delete"],
  },
  {
    module: "Constant contract type",
    permissions: ["Manage", "Create", "Edit", "Delete"],
  },
  {
    module: "Company settings",
    permissions: ["Manage"],
  },
  {
    module: "Assets",
    permissions: ["Manage", "Create", "Edit", "Delete"],
  },
  {
    module: "Chart of account",
    permissions: ["Manage", "Create", "Edit", "Delete"],
  },
  {
    module: "Journal entry",
    permissions: ["Manage", "Create", "Edit", "Delete", "Show"],
  },
  {
    module: "Report",
    permissions: [
      "Income",
      "Expense",
      "Income VS Expense",
      "Loss & Profit",
      "Tax",
      "Invoice",
      "Bill",
      "Balance Sheet",
    ],
  },
];

export default permissions;