export const create_account = async (data) => {
  try {
    console.log("running");
    const res = await fetch("http://localhost:8000/api/create_account/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: data.type,
      }),
    });
    const responseData = await res.json();
    console.log(responseData);
  } catch (err) {
    console.log(err);
  }
};

export const get_accounts_by_user = async (data) => {
  try {
    const res = await fetch("http://localhost:8000/api/get_accounts_by_user/", {
      method: "Get",
      credentials: 'include',
    });

    if (!res.ok) {
        throw new Error("Failed to fetch accounts");
    }

    const responseData = await res.json();
    console.log(responseData);
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

export const get_account_by_id = async (id) => {
  try {
    console.log("running");
    const res = await fetch(
      `http://localhost:8000/api/get_account_by_id/${id}/`,
      {
        method: "GET",
        credentials: 'include',
      }
    );
    const responseData = await res.json();
    console.log(responseData);
    return responseData;
  } catch (err) {
    console.log(err);
  }
};
