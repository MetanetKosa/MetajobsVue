import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/home.vue';
import Member from '../pages/recruit/member.vue';
import Resume from '../pages/recruit/resume.vue';
import Post from '../pages/recruit/post.vue';
import Review from '../pages/recruit/review.vue';


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
            path: '/resume',
            name: 'Resume',
            component: Resume
        },
        
        {
            path: '/post',
            name: 'Post',
            component: Post
        },
        
        
        {
            path: '/review',
            name: 'Review',
            component: Review
        },
    ]
        
});

export default router;
