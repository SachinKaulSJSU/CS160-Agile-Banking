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
                "first_name": data.firstName,
                "last_name": data.lastName,
                "address": {
                    "street_address": data.streetAddress,
                    "city": data.city,
                    "state": data.state,
                    "postal_code": data.zip
                }
            }),
        }
        );
        const responseData = await res.json();
        console.log(responseData);
        
        return responseData
    } catch (err) {
        console.log(err);
        return err; // Return the error if there's an exception
    }
};