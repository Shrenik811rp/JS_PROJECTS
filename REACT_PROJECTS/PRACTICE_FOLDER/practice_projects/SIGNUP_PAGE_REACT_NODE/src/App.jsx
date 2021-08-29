import React,{ Component }from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
class App extends Component{

    constructor(){
        super()
        this.state = {
            fullName:'',
            username:'',
            email:'',
            password:''
        }

        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.Submit = this.Submit.bind(this)

    }

/*setState is a react function
changes the value in states 

onChange will trigger changeFullName and save that value to fullName

the event is onChange when the value anything changes

*/
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }

    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }


    Submit(event){
        //prevent whole form from refreshing
        event.preventDefault()
        const registered = {
            fullName : this.state.fullName,
            userame:this.state.username,
            email:this.state.email,
            password:this.state.password
        }

        //send data to server backend from front end typed data
        //use axios for this
        axios.post('http://localhost:3000/app/signup',registered)
        .then(response => console.log(response.data))

        this.setState({
            fullName:'',
            userame:'',
            email:'',
            password:''
        })
    }

    render(){
        return(

            <div>
                <div className="container">
                    <div className="form-div">

                        <form onSubmit={this.Submit}>

                            <input type="text" placeholder='Full name' onChange={this.changeFullName} value={this.state.fullName} className='form-control form-group'/>

                            <input type="text" placeholder='User name' onChange={this.changeUsername} value={this.state.userame} className='form-control form-group'/>

                            <input type="email" placeholder='Email' onChange={this.changeEmail} value={this.state.email} className='form-control form-group'/>

                            <input type="password" placeholder='Password' onChange={this.changePassword} value={this.state.password} className='form-control form-group'/>

                            <input type="submit" value="Submit" className='btn btn-danger btn-block'/>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}


export default App;