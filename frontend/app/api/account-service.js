import { getCookie } from './csrfUtils';


export const create_account = async (type, balance) => {
  const csrftoken = getCookie('csrftoken')
  try {
    const res = await fetch("http://localhost:8000/api/create_account/", {
      method: "POST",
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify({
        type: type,
        balance: balance,
      }),
    });
    const responseData = await res.json();
    console.log(responseData);
  } catch (err) {
    console.log(err);
  }
};

export const account_status = async (data) => {
  const csrftoken = getCookie('csrftoken')
  console.log(data)
  try {
    const res = await fetch("http://localhost:8000/api/account_status/", {
      method: "POST",
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify({
        account_id: data,
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
      method: "GET",
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

export const get_accounts_by_username = async (username) => {
  try {
    const res = await fetch(`http://localhost:8000/api/get_accounts_by_username/${username}`, {
      method: "GET",
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

export const get_user_by_account = async (id) => {
  try {
    console.log("running");
    const res = await fetch(
      `http://localhost:8000/api/get_user_by_account/${id}/`,
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
