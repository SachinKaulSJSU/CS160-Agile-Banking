import { getCookie } from './csrfUtils';


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
            return responseData;
        } else {
            // Handle unsuccessful login
            console.error('Login failed:', responseData.error);
            return null
        }
    } catch (err) {
        console.log(err);
    }
}

export const logout = async (data) => {
    const csrftoken = getCookie('csrftoken')
    try {
        const res = await fetch ('http://localhost:8000/api/logout/', 
        {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
              },
            credentials: 'include',
        }
        );
        const responseData = await res.json()
        if (res.ok) {
            // Clear session cookie
            document.cookie = 'sessionid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            console.log(responseData);
            return responseData;
        } else {
            // Handle unsuccessful login
            console.error('Logout failed:', responseData.error);
            return null
        }
    } catch (err) {
        console.error('An error occurred during logout: ', err);
        return null
    }
}

// deprecated
export const valid_session = async (data) => {
    const csrftoken = getCookie('csrftoken')
    try {
        const res = await fetch ('http://localhost:8000/api/valid_session/', 
        {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
              },
            credentials: 'include',
        }
        );
        const responseData = await res.json()
        if (res.ok) {
            console.log(responseData);
            return responseData;
        } else {
            // Handle unsuccessful login
            console.error('Invalid Session:', responseData.error);
            return null
        }
    } catch (err) {
        console.error('An error occurred verify session: ', err);
        return null
    }
}