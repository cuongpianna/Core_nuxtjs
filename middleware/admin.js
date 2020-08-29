import { getToken } from "@/utils/auth";

export default ({
  store,
  error,
  redirect,
  res,
  route
}) => {
  const { fb_id } = store.state
  console.log(fb_id)
  // var token = getToken()
  if (fb_id === '') {
    redirect('/login', { next: route.fullPath })
  }
}
