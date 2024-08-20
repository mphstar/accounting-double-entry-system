import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    isEdit: false,
    form: {
      id: 0,
      name: "",
      email: "",
      loginIsEnable: false,
      password: "",
    },
    companies: [
      {
        id: 1,
        name: "Rajodiya Infotech",
        email: "company@example.com",
        plan: "Platinum",
        planExpired: "Jun 11, 2025",
        loginIsEnable: true,
        totalUsers: 5,
        totalCustomers: 12,
        totalVendors: 11,
        avatar:
          "https://demo.workdo.io/accountgo-saas/storage/uploads/avatar/user_2.jpg",
        users: [
          {
            id: 1,
            name: "John Doe",
            isActive: true,
            avatar: "https://demo.workdo.io/accountgo-saas/storage/user_3.jpg",
          },
          {
            id: 2,
            name: "Jane Doe",
            isActive: false,
            avatar: "https://demo.workdo.io/accountgo-saas/storage/user_7.jpg",
          },
        ],
      },
      {
        id: 2,
        name: "Murray Group",
        email: "iromaguera@gmail.com",
        plan: "Silver",
        planExpired: "Aug 20, 2025",
        loginIsEnable: false,
        totalUsers: 0,
        totalCustomers: 0,
        totalVendors: 0,
        avatar:
          "https://demo.workdo.io/accountgo-saas/storage/uploads/avatar/user_4.jpg",
        users: [],
      },
    ],
  },

  reducers: {
    resetForm: (state) => {
      state.form = {
        id: 0,
        name: "",
        email: "",
        loginIsEnable: false,
        password: "",
      };
    },
    setIsEdit: (state, action) => {
      state.isEdit = action.payload;
    },
    updateCompany: (state, action) => {
      const { id, name, email, password, loginIsEnable } = action.payload;
      state.companies = state.companies.map((company) =>
        company.id === id ? { ...company, name, email, loginIsEnable } : company
      );
    },

    addCompany: (state, action) => {
      state.companies.push(action.payload);
    },
    deleteCompany: (state, action) => {
      state.companies = state.companies.filter(
        (company) => company.id !== action.payload
      );
    },

    handleForm: (state, action) => {
      state.form = { ...state.form, ...action.payload };
    },
  },
});

export const {
  updateCompany,
  addCompany,
  deleteCompany,
  handleForm,
  setIsEdit,
  resetForm,
} = companySlice.actions;

export default companySlice.reducer;
