import { PacmanLoader } from 'react-spinners'
import { useState, useEffect, useRef } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [loader, setLoader] = useState(false);
  const [phones, setPhones] = useState([]);

  const nameRef = useRef('');
  const priceRef = useRef(0);
  const descRef = useRef('');
  const statusRef = useRef('active');

  useEffect(() => {
    setLoader(true);
    fetch("https://auth-rg69.onrender.com/api/products/all")
      .then(res => res.json())
      .then(data => {
        setPhones(data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      })
  }, [])

  function validate(name, price, status, desc) {

    if (name.value.trim().length < 3) {
      alert("Name is empty");
      return false;
    }
  
    if (desc.value.trim().length < 3) {
      alert("Description is empty");
      return false;
    }
  
    if (price.value < 0) {
      alert("price is not a number");
      return false;
    }

    return true;
  }

  function handleClick(e) {
    e.preventDefault();
    const isValid = validate(name, price, status, desc);

    if (isValid) {
      const phone = {
        name: nameRef.current.value,
        desc: descRef.current.value,
        price: priceRef.current.value,
        status: statusRef.current.value,
        category_id: 2
      }

      fetch("https://auth-rg69.onrender.com/api/products",{
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(phone)
      })

        .then(res => res.json())
        .then(data => {
          if (data.id) {
            let copied = JSON.parse(JSON.stringify(phones))
            copied.push(data)
            setPhones(copied)
          }
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          nameRef.current.value = ''
          priceRef.current.value = ''
          statusRef.current.value = ''
          descRef.current.value = ''
        })
    }
  }

  return (
    <>
      <div className="container">

{/* form */}

        <h1 className='text-center'>Informations about phones</h1>

        <form className='d-flex w-50 gap-3 flex-wrap flex-column mt-3 mx-auto'>

          <input ref={nameRef} type="text" className="form-control" placeholder="Enter name" />

          <input ref={priceRef} type="number" className="form-control" placeholder="Enter price" />

          <select ref={statusRef} className="form-select">
            <option value="active">active</option>
            <option value="inactive">inactive</option>
          </select>

          <textarea ref={descRef} className="form-control" rows="3" placeholder="Enter description"></textarea>

          <button onClick={handleClick} className='btn btn-primary'>Submit</button>

        </form>

{/* cards */}

        <div className="cards d-flex flex-wrap gap-4 mt-5 justify-content-center mb-4">
            {
              loader && <PacmanLoader color="#36d7b7" size="2rem" />
            }
            {
              !loader && phones.map((arg, index) => {
                return (
                  <Card key={index} phone={arg}></Card>
                )
              })
            }

        </div>

      </div>
    </>
  )
}

export default App
