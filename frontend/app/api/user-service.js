// create account
export const enroll = async (data) => {
    try {
        console.log('running')
        const res = await fetch ('http://localhost:8000/api/register/', 
        {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": data.username,
                "email": data.email,
                "password": data.password,
                "first_name": data.first_name,
                "last_name": data.last_name,
            }),
        }
        );
        const responseData = await res.json()
        console.log(responseData);
    } catch (err) {
        console.log(err);
    }
    return responseData
}