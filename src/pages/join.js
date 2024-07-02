import React from 'react'
import TransitionOnVisible from '../hooks/TransitionOnVisible'; // Adjust the path as per your file structure

const Join = () => {
    return (
        <div className='section_wrapper'>
            <TransitionOnVisible className='join'>
                <div className='join_wrapper'>
                    <div className='join_header'>
                        <h2>Join Gravity Team</h2>
                        <div className='join_image'>
                            <img src="/assets/join/blue.png" alt="0" className='img1' />
                            <img src="/assets/join/gold.png" alt="0" className='img2' />
                        </div>
                    </div>

                    <div className='join_content'>
                        <p className=''>Join our community of innovators, problem solvers and owners who apply scientific discovery techniques to make crypto markets a better place for everyone.</p><br></br>
                        <p className=''>As we emphasize it in our name – Gravity Team, we are a team. A team of bright, talented people, each masters of their specialty, curious about the world and eager to solve the new exciting cryptocurrency market problems, build cool stuff and have fun whilst doing so!</p><br></br>
                        <div className='join_content_actions'>
                            <a href="#">Learn more about working with us </a>
                        </div>
                    </div>
                </div>
            </TransitionOnVisible>
        </div>
    )
}

export default Join