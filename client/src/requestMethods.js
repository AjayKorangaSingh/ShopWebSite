import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTIxOWFlYjkwMjM1ZDQyZTk0ZmYxNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODQzMDI1MywiZXhwIjoxNjM4Njg5NDUzfQ.sAHmYxyd38SId73WIIcL60lHZRQ6o-eImts3KaZMVl0";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
