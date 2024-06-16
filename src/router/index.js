import { createRouter, createWebHistory } from "vue-router";

import introduction from "./routes/introduction";
import examples from "./routes/examples";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...introduction,
        ...examples
    ],
});

export default router;
