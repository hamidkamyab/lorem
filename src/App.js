import { useState } from "react";
import * as Vsc from "react-icons/vsc";
import Swal from 'sweetalert2';
import data from './data';

function App() {
  const [text,setText] = useState([]);
  const [amount,setAmount] = useState(0);

  const handleSubmit = (e)=>{
    e.preventDefault()
    setAmount(parseInt(amount));
    if(amount > 0 && amount < 5){
      setText(data.slice(0,amount))
    }else{
      Swal.fire({
        title: 'تعداد غیرمجاز!',
        text: 'تعداد پاراگراف وارد شده باید بین 1 تا 4 پاراگراف باشد.',
        icon: 'warning',
        confirmButtonText: 'Cool'
      })
    }
  }
  return (
    <div className="App vw-100 d-flex align-items-center justify-content-center py-5">
        <div className="lorem d-flex flex-column gap-3">
            <h4 className="text-dark m-0 p-0">لورم ساز:</h4>
            <form className="d-flex align-items-center gap-3" onSubmit={handleSubmit}>
              <label htmlFor="paragraph-amount">تعداد پاراگراف</label>
              <input type="number" className="form-control" id="paragraph-amount" onChange={(e)=>setAmount(e.target.value)} />
              <button className="btn btn-outline-dark py-1 px-3">بــساز</button>
            </form>

            <article className="lorem-text">
                {
                  text.map((lorem,index)=>{
                    return <p key={index}>{lorem}</p>
                  })
                }
            </article>
        </div>
    </div>
  );
}

export default App;
