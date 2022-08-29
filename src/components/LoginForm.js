const LoginForm = ({handleSubmit, email, setEmail, password, setPassword, forgotpasswordRedirect})=> {

    return(

    <form onSubmit={handleSubmit}>

        <div className="form-group mb-3">
            <label className="form-label">Your email</label>
            <input 
                type="email" 
                className="form-control" 
                placeholder="Enter email" 
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}
            />
        </div>

        <div className="form-group mb-3">
            <label className="form-label">Your password</label>
            <input 
                type="password" 
                className="form-control" 
                placeholder="Enter password" 
                value={password} 
                autoComplete="off"
                onChange={(e)=> setPassword(e.target.value)}
            />
        </div>

        <button disabled={!email || !password} className="btn btn-primary">Login</button>
        <button className="btn btn-primary" onClick={forgotpasswordRedirect}>Forgot password</button>

    </form>
)
};

export default LoginForm;