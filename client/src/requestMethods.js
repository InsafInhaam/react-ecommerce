import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWYzNTE2MGQwYmIwODcwNGZiNTU4OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjQzOTUzMSwiZXhwIjoxNjU2Njk4NzMxfQ.669zol_qcWN8jppz-vWx-JzeH35nXVKfk9qwSPUSH6E";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
