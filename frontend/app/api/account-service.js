export const create_account = async (data) => {
    try {
        console.log('running')
        const res = await fetch ('http://localhost:8000/api/create_account/', 
        {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "type": data.type,
            }),
        }
        );
        const responseData = await res.json()
        console.log(responseData);
    } catch (err) {
        console.log(err);
    }
}