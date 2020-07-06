console.log("index.js: loaded");

const fetchUserInfo = (userId) => {
  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then((res) => {
      console.log(res.status);
      if (!res.ok) {
        console.error("error response", res.status);
      } else {
        return res.json().then((userInfo) => {
          console.log(userInfo);
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
