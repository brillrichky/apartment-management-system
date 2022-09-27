import React from "react";
import axios from "axios";



export async function login(username,password){
    const response = await axios.post("/login", {
        username: "admin",
        password: "admin",
    });
    return response.json()
}

export async function getAllTransactionList(){
   const url = `/api/transactions`;
   const token = "YWRtaW46YWRtaW4=";
   const response = await axios.get(url, {
     headers: {
       Authorization: "Bearer " + token,
     },
   });
   return response.json();
}

export async function getResident() {
  const url = `/api/residents`;
  const token = "YWRtaW46YWRtaW4=";
  const response = await axios.get(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.json();
}

export async function getUnits() {
  const url = `/api/units`;
  const token = "YWRtaW46YWRtaW4=";
  const response = await axios.get(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.json();
}

export async function postTransactions(payload){
    const url = `/api/transactions`;
     const token = "YWRtaW46YWRtaW4=";
     const response = await axios.post(url, payload, {
       headers: {
         Authorization: "Bearer " + token,
       },
     });
     return response.json();
}

export async function postResidents(payload) {
  const url = `/api/residents`;
  const token = "YWRtaW46YWRtaW4=";
  const response = await axios.post(url, payload, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.json();
}

export async function postUnits(payload) {
  const url = `/api/units`;
  const token = "YWRtaW46YWRtaW4=";
  const response = await axios.post(url, payload, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.json();
}

export async function updateTransactionById(payload) {
  const url = `/api/transactions/${payload.id}`;
  const token = "YWRtaW46YWRtaW4=";
  const response = await axios.put(url, payload, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.json();
}


export async function updateResidents(payload) {
  const url = `/api/residents/${payload.id}`;
  const token = "YWRtaW46YWRtaW4=";
  const response = await axios.put(url, payload, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.json();
}

export async function updateUnits(payload){
    const url = `/api/units/${payload.id}`;
    const token = "YWRtaW46YWRtaW4=";
    const response = await axios.put(url, payload, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.json();
}

export async function deleteTransaction(id) {
  const url = `/api/transactions/${id}`;
  const token = "YWRtaW46YWRtaW4=";
  const response = await axios.delete(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.json();
}

export async function deleteResident(id) {
  const url = `/api/residents/${id}`;
  const token = "YWRtaW46YWRtaW4=";
  const response = await axios.delete(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.json();
}
export async function deleteUnits(id) {
  const url = `/api/units/${id}`;
  const token = "YWRtaW46YWRtaW4=";
  const response = await axios.delete(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.json();
}
