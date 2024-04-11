export const login = async (data) => {
    try {
        console.log('running')
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
        }
        );
        const responseData = await res.json()
        if (res.ok) {
            // Assuming the session key and expiry are returned from the backend
            const sessionKey = responseData.session_key;
            const sessionExpiry = responseData.session_expiry;

            document.cookie = `sessionKey=${sessionKey}; expires=${new Date(sessionExpiry).toUTCString()}; path=/`;

            // Redirect or update UI accordingly
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