async function setLocalStorage (resp) {
  await localStorage.setItem('poster', resp['data']['profile']['profile_img'])
  await localStorage.setItem('access', resp['data']['access'])
  await localStorage.setItem('refresh', resp['data']['refresh'])
  await localStorage.removeItem("SignUp_status")
  await localStorage.removeItem("Login_status")
  window.loginState = true
}

export default setLocalStorage;