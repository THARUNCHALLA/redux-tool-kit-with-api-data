import { useEffect,useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import {fetchuser} from "./Store"
const User=()=>{
    const Data = useSelector((s)=>{return s})
    const Final = Data.user.userValue
    const status = Data.user.status
    const Error = Data.user.error
    console.log(Error)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchuser())
    },[])
    




    return(
        <div>
            <h1 className="text-primary head">API Calls With Redux Toolkit</h1>
            {status==="loading" && <p className="text-center text-primary">Data Is Loading......</p>}
            {status==="success"&& <table className="table table-bordered caption-top table-hover table-striped border-success w-50">
            <caption>User Details</caption>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {Final.map(each=>(
                        <tr key={each.id}>
                            <td>{each.id}</td>
                            <td>{each.name}</td>
                            <td>{each.email}</td>
                            <td>{each.phone}</td>
                        </tr>    
                    ))}
                </tbody>
            </table>
            }
            {Error&&<p className="text-center text-danger">Something Went Wrong........</p>}
        </div>
    )
}

export default User