import React from 'react'

const Contact = () => {
  return (
    <div  className='section_wrapper'>
        <div className='contact_wrapper'>
            <h2 className='' style={{textAlign: "center"}}>
            Contact Us
            </h2>
            <p>
            We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange or a project looking for liquidity; an algorithmic trader or a software developer looking to improve the markets with us or just have a great idea you can’t wait to share with us!
            </p>

            <button className='contact_action'>
                Get in Touch
            </button>

            <div className='contact_image'>
                <img src="/assets/contact/blue-blob.png" alt="1" className='blue' />
                <img src="/assets/contact/gold-blob.png" alt="1" className='gold1' />
                <img src="/assets/contact/gold-blob.png" alt="1" className='gold2' />
                <img src="/assets/contact/purple-blob.png" alt="1" className='purple' />
            </div>
        </div>
    </div>
  )
}

export default Contact