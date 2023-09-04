import useSecurity from "security/useSecurity"


const Logout = () => {
  const { logout } = useSecurity()

  return <button onClick={logout}>Logout</button>
}

export default Logout
