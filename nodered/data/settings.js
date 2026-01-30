module.exports = {

    adminAuth: {
        type: "credentials",
        users: [
            {
                username: "admin",
                password: process.env.NR_ADMIN_HASH,
                permissions: "*"
            },
            {
                username: "user",
                password: process.env.NR_USER_HASH,
                permissions: "read"
            }
        ]
    },

    httpNodeAuth: {
        user: "api",
        pass: process.env.NR_API_HASH
    },

    ui: {
        path: "ui"
    }
};
