import axios from "axios";
import db from "../../db.js";

export default {
  namespaced: true,
  state() {
    return {};
  },
  getters: {},
  mutations: {},
  actions: {
    async getAllCreator() {
      // const res=await axios.get("http://localhost:3000/creators");
      // const {data}=res;
      // return data
      return db.creators;
    },
    async getSingleCreator(context, payload) {
      // const res=await axios.get(`http://localhost:3000/creators?id=${payload.id}`);
      // const {data}=res;
      // return data
      const c = db.creators.find((c) => c.id === payload.id);
      return c;
    },
    async getSingleCreatorSheetMusic(context, payload) {
      // console.log(payload)
      // const res=await axios.get(`http://localhost:3000/allMusic?creatorId=${payload.id}&page=${payload.page}`)
      // const {data}=res;
      // return data;
      const c = db.allMusic.filter((m) => m.creatorId === payload.id);
      return c;
    },
  },
};
