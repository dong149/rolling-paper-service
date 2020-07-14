import axios from "axios";

let BASE_URL = "https://donghoon.tk";

const baseAPI = axios.create({
  baseURL: BASE_URL,
});

const rollingService = {
  getRolling: async () => {
    let res = await baseAPI.get(`/api/rolling`);
    return res.data || [];
  },
  getRollingByName: async (name) => {
    let res = await baseAPI.get(`/api/rolling/`, {
      params: { name: name },
    });
    return res.data || [];
  },
  postRolling: async (object) => {
    console.log("ddd");
    await baseAPI
      .post(`/api/rolling`, object)
      .then((res) => {
        console.log(res.data);
        return 1;
      })
      .catch((err) => {
        console.log(err);
        return 0;
      });
  },
};

export default rollingService;
