import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState('');

  function handleClick() {

  }

  return (
    <>
      <div className="container">

{/* form */}
        <form className='d-flex w-50 gap-3 flex-wrap flex-column mt-3 mx-auto'>

          <input type="text" className="form-control" placeholder="Enter name" />

          <input type="number" className="form-control" placeholder="Enter price" />

          <select class="form-select" aria-label="Default select example">
            <option selected>active</option>
            <option value="inactive">inactive</option>
          </select>

          <textarea className="form-control" rows="3" placeholder="Enter description"></textarea>

          <button onClick={handleClick} className='btn btn-primary'>Submit</button>

        </form>

{/* cards */}

        <div className="cards d-flex flex-wrap gap-2 mt-5">

          <div className="card w-25">
            <div className="card-body">
              <h5 className="card-name">Iphone 15 pro</h5>
              <h6 className="card-status my-2 fs-4 text-body-secondary">active</h6>
              <h6 className="card-price my-2 fs-5">$999</h6>
              <p className="card-desc">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
