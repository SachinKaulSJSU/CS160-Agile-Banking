export const deposit = async (data) => {
    try {
        console.log('running')
        const res = await fetch ('http://localhost:8000/api/register/', 
        {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "amount": data.amount,
                "ttype": "Deposit"
            }),
        }
        );
        const responseData = await res.json()
        console.log(responseData);
    } catch (err) {
        console.log(err);
    }
}