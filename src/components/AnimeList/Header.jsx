import Link from "next/link"

const Header = ({ title, linkHref, linkSee }) => {
  return (
    <div className="flex justify-between p-4 items-center">
      <h1 className="text-xl font-bold text-color-primary">{title}</h1>
      {linkHref && linkSee ? (
        <Link
          href={linkHref}
          className="md:text-lg text-sm underline text-color-primary hover:text-color-lighto transition-all"
        >
          {linkSee}
        </Link>
      ) : null}
    </div>
  )
}

export default Header
