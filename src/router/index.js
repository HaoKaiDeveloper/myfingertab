import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";


const router = createRouter({
  history:createWebHashHistory() ,
  routes: [
    {
      name: "home",
      path: "/",
      component: ()=>import("../views/Homepage.vue"),
    },
    {
      name: "creators",
      path: "/creators",
      component: () => import("../views/Creator/Creatorspage.vue"),
    },
      {name:'singleCreator',
      path:'/creators/:id',
      component:()=>import("../views/Creator/SingleCreatorpage.vue")},
    {
      name: "sheetMusic",
      path: "/sheetMusic",
      component: () => import("../views/SheetMusic/SheetMusicpage.vue"),
    },
    {
      name:'Application',
      path:'/application',
      component:()=>import("../views/ApplicationPage.vue")
    },
    {
      name: "contact",
      path: "/contact",
      component: () => import("../views/Contactpage"),
    },
    {
      name:'member',
      path:'/member',
      component:()=>import('../views/MemberPages/MemberInfo.vue'),
      // beforeEnter(to,from,next){
        
      // }
    },
    {
      name:'login',
      path:'/login',
      component:()=>import('../views/MemberPages/LoginPage')
    }

  ],
});

export default router;
