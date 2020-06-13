export function authUser(reduxstore) {
  console.log("whats inside my store?", reduxstore.login.email);
  return reduxstore.login.email;
}
