
import { createStore } from "vuex";
import axios from "axios";
import db from "../../db.js";
import creatorModule from "./creator.js";
import memberModule from "./member.js";

const store = createStore({
  modules: {
    creator: creatorModule,
    member: memberModule,
  },
  state() {
    return {};
  },
  mutations: {},
  getters: {},
  actions: {
    async getHomeSwiperImgs() {
      // const res = await axios.get("http://localhost:3000/homeswiperimgs");
      // const { data } = res;
      // return data;
      // console.log(db);
      return db.homeswiperimgs;
    },
    async getHomeNews() {
      // const res = await axios.get("http://localhost:3000/homeNews");
      // const { data } = res;
      // return data;
      return db.homeNews;
    },
    async getAllMusic(context,payload) {
      const {num,sortBy,search,page}=payload
      let url=`http://localhost:3000/allMusic?num=${num}&page=${page}`
      if(sortBy){
        url=url+`&sortBy=${sortBy}`
      }
      if(search){
        url=url+`&search=${search}`
      }
      // console.log(url)
      // const res=await axios.get(url);
      // const {data}=res;
      // return data
      return db.allMusic;
    },
  },
});

export default store;
