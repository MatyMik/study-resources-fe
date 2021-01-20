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
  const topicParts = topic.match(/(\w+)/g);
  return topicParts.map((topic) => topic.toLowerCase()).reduce((acc, topic) => `${acc}${topic}`, '');
};
