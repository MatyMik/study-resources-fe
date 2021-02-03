export const emailPages = ['login', 'signup', 'forgotpassword'];
export const passwordPages = ['login', 'signup', 'resetpassword'];
export const confirmPasswordPages = ['signup', 'resetpassword'];

export const createAuthData = (page, email, password, confirmPassword) => {
  let authData = {};
  if (emailPages.includes(page)) authData = { ...authData, email };
  if (passwordPages.includes(page)) authData = { ...authData, password };
  if (confirmPasswordPages.includes(page)) authData = { ...authData, confirmPassword };
  return authData;
};

export const createtTopicRoute = (topic) => {
  if (!topic) return;
  const topicParts = topic.toString().match(/(\w+)/g);
  const topicRoute = topicParts.map((topic) => topic.toLowerCase()).reduce((acc, topic) => `${acc}${topic}`, '');
  return topicRoute;
};

export const arrayDeepComparison = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
    if (i === array1.length - 1) return true;
  }
};
