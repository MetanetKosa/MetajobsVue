import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/home.vue';
import Member from '../pages/recruit/member.vue';
import Resume from '../pages/recruit/resume.vue';
import Post from '../pages/recruit/post.vue';

import Review from '../pages/recruit/review.vue';
import SignUp from '@/components/SignUp.vue';
import SignIn from '@/components/SignIn.vue';
import MyPage from '@/components/MyPage.vue';

import PostList from '@/components/post/PostList.vue';
import PostInsert from '@/components/post/PostInsert.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },

        {
            path: '/member',
            name: 'Member',
            component: Member
        },

        {
            path: '/signup',
            name: 'SignUp',
            component: SignUp
        },

        {
            path: '/signin',
            name: 'SignIn',
            component: SignIn
        },

        {
            path: '/mypage',
            name: 'MyPage',
            component: MyPage
        },

        {
            path: '/resume',
            name: 'Resume',
            component: Resume
        },
        {
            path: '/postList',
            name: 'PostList',
            component: PostList
        },
        {
            path: '/postInsert',
            name: 'PostInsert',
            component: PostInsert
        },
        {
            path: '/review',
            name: 'Review',
            component: Review
        },
    ]
        
});

export default router;
