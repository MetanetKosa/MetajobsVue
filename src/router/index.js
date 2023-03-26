import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/home.vue';
import Member from '../pages/recruit/member.vue';
import Resume from '../pages/recruit/resume.vue';
import PostInsert from '../pages/recruit/post/postInsert.vue';
import PostDetail from '../pages/recruit/post/postDetail.vue';
import PostModify from '../pages/recruit/post/postModify.vue';
import PostList from '../pages/recruit/post/postList.vue';

import Review from '../pages/recruit/review.vue';
import SignUp from '@/components/SignUp.vue';
import SignIn from '@/components/SignIn.vue';
import MyPage from '@/components/MyPage.vue';


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
            path: '/postInsert',
            name: 'PostInsert',
            component: PostInsert
        },
        {
            path: '/postDetail',
            name: 'PostDetail',
            component: PostDetail
        },
        {
            path: '/postModify',
            name: 'PostModify',
            component: PostModify
        },
        {
            path: '/post/postList',
            name: 'PostList',
            component: PostList
        },
        {
            path: '/review',
            name: 'Review',
            component: Review
        },
    ]
        
});

export default router;
