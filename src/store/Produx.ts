import axios, { all } from "axios";
import { create } from "zustand";

let produxt = create((set) => ({
  all: 0,
  carts: [],
  productlar: [],
  torf: false,
  settorf: () => {
    set((state: any) => ({
      productlar: [],
      torf: state.torf ? false : true,
    }));
  },
  getmal: async () => {
    try {
      let res = await axios.get("http://localhost:3000/phones");
      let dat = await res.data;
      set(() => ({
        productlar: dat,
      }));
    } catch (error) {
      console.log(error);
    }
  },
  cart: async (id: number) => {
    let res = await axios.get(`http://localhost:3000/phones/${id}`);
    let dat: any = await res.data;
    set((state = { all: 0, carts: [] }) => ({
      all: state.all + 1,
      carts: state.carts.push({ ...dat }),
    }));
  },
}));

export default produxt;
