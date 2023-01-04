import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div style={{backgroundImage: 
                "url('https://wallpaperaccess.com/full/2112629.jpg')", height: "90vh"}}>
            <div className='container py-5'>
                <div class="accordion bg-dark" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                               <strong>News Application.</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>Get daily dose of news updates.</strong>This Application provides you the daily News updates of almost all formates including General, Sports, Business, Entertainment, Health and many more. You can sit with just your phone and enjoy the daily news with our application.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Development.</strong> 
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is API based News Application.</strong>This application is developed using a API which helps us to fetch the daily news and allow users to get the daily news at there finger tips.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Contact us.</strong> 
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>Email:</strong> contact@newsapp.com <br />
                                <strong>Phone:</strong> 9876543210
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
