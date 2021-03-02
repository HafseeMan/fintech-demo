import React, { Component } from 'react'
import picture from "../loanPic.jpg"
import Title from './Title'


export default class Loan extends Component {
    render() {
        return (
            <div>
                <div class="sidenav">
                    <div class="validation-main-text text-center">
                        <h2>Need MORE to grow your business?</h2>
                        <h1>APPLY FOR A LOAN TODAY!</h1>
                    </div>
                </div>
                <div class="main">
                    <div class="col-md-6 col-sm-12">
                        <p>Looking at your profile, you are eligible for a loan.</p>
                        <div class="validation-form validation-form p-4">                        
                        <h3 className="text-light">STEP 1: Validate account</h3>

                        <form>
                            <div class="form-group">
                                <label>First Name</label>
                                <input type="text" class="form-control" placeholder="First Name"/>
                            </div>
                            <div class="form-group">
                                <label>Second Name</label>
                                <input type="text" class="form-control" placeholder="Second Name"/>
                            </div>
                            <div class="form-group">
                                <label>BVN</label>
                                <input type="number" class="form-control" placeholder="BVN"/>
                            </div>
                            <button type="submit" class="btn btn-black">Validate Account</button>

                            <h3 className="text-light">STEP 2: Select Loan Details</h3>
                            <div class="form-group">
                                <label>Choose a loan amount</label>
                                <input type="text" class="form-control" placeholder="N50,000"/>
                            </div>
                            <div class="form-group">
                                <label>Loan Term</label>
                                <input type="text" class="form-control" placeholder="50 days - 91 days"/>
                            </div>
                            <button type="submit" class="btn btn-light">Apply</button>

                            
                        </form>
                        </div>
                    </div>
                </div>
            </div> 
           
        )
    }
}