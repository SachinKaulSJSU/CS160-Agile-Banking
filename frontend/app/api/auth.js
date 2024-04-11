export const login = async (data) => {
    try {
        const res = await fetch ('http://localhost:8000/api/login/', 
        {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": data.username,
                "password": data.password,
            }),
            credentials: 'include',
        }
        );
        const responseData = await res.json()
        if (res.ok) {
            console.log('Login successful');
        } else {
            // Handle unsuccessful login
            console.error('Login failed:', responseData.error);
        }

        return responseData;
    } catch (err) {
        console.log(err);
    }
}