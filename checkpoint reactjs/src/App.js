import React from 'react';

function App() {
  return <div className="container mt-5">
          <div className="row mt-3">
            <div className=" contact col-md-12">
              <h1 className='text-center'>SEND US A MESSAGE</h1>
                <form >
                  <div className='form-group mb-2'>
                    <label htmlFor="FN" className='col-form-label'>Full name</label>
                    <input className='form-control' id='FN' type="text" placeholder='Your full name' />
                  </div>
                  <div className='form-group mb-2'>
                    <label htmlFor="E" className='col-form-label'>E-mail</label>
                    <input className='form-control' id='E' type="email" placeholder='E-mail'/>
                  </div>
                  <div className='form-group mb-2'>
                    <label htmlFor="N" className='col-form-label'>Phone</label>
                    <input className='form-control' id='N' type="phone" placeholder='Your phone number'/>
                  </div>
                  <div className='form-group mb-2'>
                    <label htmlFor="M" className='col-form-label'>Message</label>
                    <textarea className='form-control' id='M' name="" cols="30" rows="5"></textarea>
                  </div>
                </form>
                <input className='btn btn-primary' type="submit" value='Send' />
            </div>
          </div>
        </div>
}

export default App;