import { authUserSession } from "@/libs/auth-libs"
import { SignInUser, UserProfile } from "./UserProfile"

const UserSignInButton = async () => {
  const user = await authUserSession()

  return user ? <UserProfile imageProfile={user.image} nameProfile={user.name} userEmail={user.email} /> : <SignInUser />
}

export default UserSignInButton
