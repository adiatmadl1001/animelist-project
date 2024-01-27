import Link from "next/link"
import InputSearch from "./InputSearch"
import UserSignInButton from "./UserSignInButton"

const Navbar = () => {
  return (
    <header className="flex bg-color-darko justify-between items-center">
      <div className="flex md:flex-row flex-col md:items-center p-4 gap-4">
        <Link
          href="/"
          className="font-bold text-color-primary hover:text-color-lighto text-xl"
        >
          DEWIBU.COM
        </Link>
        <InputSearch />
      </div>
      <UserSignInButton />
    </header>
  )
}

export default Navbar
