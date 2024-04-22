import { getCookie } from "./csrfUtils";

export const deposit = async (amount, account_id) => {
  const csrftoken = getCookie("csrftoken");
  try {
    const res = await fetch("http://localhost:8000/api/deposit/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify({
        account: account_id,
        amount: amount,
        ttype: "Deposit",
      }),
    });
    const responseData = await res.json();
    console.log(responseData);
    return responseData
  } catch (err) {
    console.log(err);
  }
};

export const transfer = async (amount, account_id, receiver_id) => {
  const csrftoken = getCookie("csrftoken");
  console.log(csrftoken);
  try {
    const res = await fetch("http://localhost:8000/api/transfer/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify({
        account: account_id,
        receiver: receiver_id,
        amount: amount,
        ttype: "Transfer",
      }),
    });
    const responseData = await res.json();
    console.log(responseData);
    return responseData
  } catch (err) {
    console.log(err);
  }
};

export const account_transactions = async (account_id) => {
  console.log(account_id)
  const csrftoken = getCookie("csrftoken");
  try {
    const res = await fetch(`http://localhost:8000/api/account_transactions/${account_id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch transactions");
    }

    const responseData = await res.json();
    console.log(responseData);
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

export const external_payment = async (amount, account_id, receiver) => {
  const csrftoken = getCookie("csrftoken");
  try {
    const res = await fetch("http://localhost:8000/api/external_payment/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify({
        account: account_id,
        amount: amount,
        receiver: receiver,
        ttype: "Payment",
      }),
    });
    const responseData = await res.json();
    console.log(responseData);
    return responseData
  } catch (err) {
    console.log(err);
  }
};

export const internal_payment = async (amount, account_id, receiver_id) => {
  const csrftoken = getCookie("csrftoken");
  console.log(csrftoken);
  try {
    const res = await fetch("http://localhost:8000/api/transfer/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify({
        account: account_id,
        receiver: receiver_id,
        amount: amount,
        ttype: "Payment",
      }),
    });
    const responseData = await res.json();
    console.log(responseData);
    return responseData
  } catch (err) {
    console.log(err);
  }
};

export const account_recurrings = async (account_id) => {
  console.log(account_id)
  const csrftoken = getCookie("csrftoken");
  try {
    const res = await fetch(`http://localhost:8000/api/account_recurrings/${account_id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch recurring payments");
    }

    const responseData = await res.json();
    console.log(responseData);
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

export const recurring_payment = async (amount, account_id, receiver, frequency) => {
  const csrftoken = getCookie("csrftoken");
  console.log(csrftoken);
  try {
    const res = await fetch("http://localhost:8000/api/recurring_payment/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify({
        account: account_id,
        receiver: receiver,
        amount: amount,
        frequency: frequency,
      }),
    });
    const responseData = await res.json();
    console.log(responseData);
    return responseData
  } catch (err) {
    console.log(err);
  }
};
