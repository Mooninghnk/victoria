interface User {
    name: string,
    pass: string
}
const LoggedIn = (props: User) => <div><h1> Welcome {props.name}</h1> <h1> this your password :){props.pass}</h1></div>

export default LoggedIn;