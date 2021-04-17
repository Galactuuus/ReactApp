const ApiConsumer = {
    login : async (dni, phone) => {
        let response = await fetch('http://127.0.0.1:5000/users', 
            { method: 'GET', headers: { dni: dni, phone: phone }});
        response = await response.json();
        return response;
    },
    create: async (userdni,userphone,username,userlastname,userhistory) => {
        const fecha = new Date();
        const userdata = {
            dni: userdni, 
            phone: userphone,
            name: username,
            lastname: userlastname,
            history: userhistory,
            createdAt: fecha.toISOString().slice(0, 10),
            updatedAt: fecha.toISOString().slice(0, 10)
        };
        let response = await fetch('http://127.0.0.1:5000/users', 
            { method: 'POST', 
                body: JSON.stringify(userdata),
                headers:{'Content-Type': 'application/json'}});
        response = await response.json();
        return response;
    }
}

export default ApiConsumer;