const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
}

module.exports = {
    ROLE: ROLE, 
    users: [
        {id:1, name:'mayank', role: ROLE.ADMIN },
        {id:2, name:'bheem', role: ROLE.BASIC },
        {id:3, name:'nilesh', role: ROLE.BASIC }
    ],
    projects:[
        {id:1, name: 'mayank project', userId:1},
        {id:2, name: 'bheem project', userId:2},
        {id:3, name: 'nilesh project', userId:3}
    ]
}