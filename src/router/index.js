import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/auths/LoginView.vue"),
    },
    {
      path: "/main",
      name: "main",
      component: () => import("@/views/mains/DefaulMainView.vue"),
    },
    {
      path: "/home-managerment",
      name: "home-managerment",
      component: () => import("@/views/home-managerment/MainPage.vue"),
    },
    {
      path: "/task-managerment",
      name: "task-managerment",
      component: () => import("@/views/task-managerment/MainPage.vue"),
    },
    {
      path: "/research",
      name: "research",
      redirect: { name: "research-post-list" },
      component: () => import("@/views/research/IndexPage.vue"),
      children: [
        {
          path: "main",
          name: "research-main",
          component: () => import("@/views/research/MainPage.vue"),
        },
        {
          path: "post-list",
          name: "research-post-list",
          component: () => import("@/views/research/posts/PostsList.vue"),
        },
        {
          path: "add-post",
          name: "research-post-add",
          component: () => import("@/views/research/posts/AddPost.vue"),
        },
        {
          path: "post-edit/:id",
          name: "research-post-edit",
          component: () => import("@/views/research/posts/AddPost.vue"),
        },
        {
          path: "post-detail/:id",
          name: "research-post-detail",
          component: () => import("@/views/research/posts/Viewpost.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
