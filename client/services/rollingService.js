import axios from "axios";

let BASE_URL = "https://donghoon.tk";

const baseAPI = axios.create({
  baseUR: BASE_URL,
});

const rollingService = {
  getRolling: async () => {
    let res = await baseAPI.get(`/api/rolling`);
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
