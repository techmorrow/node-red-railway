module.exports = {
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "$2y$08$wqFq4FNkxlYKY9OV601RiuWXTyptm6zlbsWhQb.gMhc7dSdaqQdTK",
            permissions: "*"
        }]
    },
    // ใช้ค่า default เพิ่มเติมก็ได้ เช่น:
    httpAdminRoot: "/admin",
    httpNodeRoot: "/api",
    functionGlobalContext: {}
}