import { getToken } from "@/utils/auth";

export default ({
  store,
  error,
  redirect,
  res,
  route
}) => {
  const { token } = store.state
  // var token = getToken()
  if (!token) {
    redirect('/login', { next: route.fullPath })
  }
}
