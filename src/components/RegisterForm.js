const RegisterForm = ({handleSubmit, name, setName, email, setEmail, password, setPassword, tenant, setTenant})=> (

    <form onSubmit={handleSubmit}>
        
        <div className="form-group mb-3">
            <label className="form-label">Your name</label>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Enter name" 
                value={name} 
                onChange={(e)=> setName(e.target.value)}
            />
        </div>

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
                onChange={(e)=> setPassword(e.target.value)}
            />
        </div>

        <div className="form-group mb-3">
            <label className="form-label">Tenant name</label>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Enter tenant name" 
                value={tenant} 
                onChange={(e)=> setTenant(e.target.value)}
            />
        </div>

        <button disabled={!name || !email || !password || !tenant} className="btn btn-primary">Submit</button>

    </form>
);

export default RegisterForm;