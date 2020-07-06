console.log("index.js: loaded");

const fetchUserInfo = (userId) => {
  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then((res) => {
      if (!res.ok) {
        console.error("error response", res.status);
      } else {
        return res.json().then((userInfo) => {
          const view = escapeHTML`
          <h4>${userInfo.name} (@${userInfo.login})</h4>
          <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
          <dl>
              <dt>Location</dt>
              <dd>${userInfo.location}</dd>
              <dt>Repositories</dt>
              <dd>${userInfo.public_repos}</dd>
          </dl>
          `;
          const result = document.getElementById("result");
          result.innerHTML = view;
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const escapeSpecialChars = (str) => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const escapeHTML = (strings, ...values) => {
  return strings.reduce((result, str, i) => {
    const value = values[i - 1];
    if (typeof value === "string") {
      return result + escapeSpecialChars(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
};
