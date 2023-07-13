// import axios from "axios";

// const getToken = () => {
//   return JSON.parse(localStorage.getItem("user").access_token);
// };

// console.log(getToken());

// export const registerStore = async (newStore) => {
//   try {
//     const token = getToken();
//     const headers = {
//       Authorization: `Bearer ${token}`,
//     };

//     const resp = await axios.post(
//       "https://klick-api.onrender.com/auth/registerstore",
//       newStore,
//       { headers }
//     );
//     console.log(resp.data);
//   } catch (err) {
//     console.error(err);
//   }
// };
