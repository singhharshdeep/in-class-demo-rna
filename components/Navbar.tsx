import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { useContext } from "react";

type NavbarProps = {
  name?: string;
};

/*
props = {
    name: "MovieCatalog"
}
*/
export default function Navbar({ name = "MovieCatalog" }: NavbarProps) {
  const { isLoggedIn, user, logout } = useContext(AuthContext);

  return (
    <div className="flex justify-between border border-white p-6 bg-gray-800">
      <Link className="text-3xl" href="/">{name}</Link>
      <div>
        {isLoggedIn && (
          <Link className="text-3xl mr-2" href="/favorites">
            Favorites
          </Link>
        )}
      </div>
      <div>
        {isLoggedIn && <span className="text-3xl">Welcome {user?.name}</span>}
      </div>
      <div>
        {isLoggedIn ? (
          <button className="text-3xl" onClick={logout}>Logout</button>
        ) : (
          <Link className="text-3xl" href="/auth">Login</Link>
        )}
      </div>
    </div>
  );
}
