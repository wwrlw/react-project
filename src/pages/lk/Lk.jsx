import './lk.css'
const Lk = ()=>{
  return(

    <div >

      <div className="container-lk">
        <div className="row">

              <form action="#">
                <div className="form-group">
                    <input type="text" id="login" className="form-control-one" required placeholder='логин'/>
                    <label htmlFor="login">Введите ваш логин</label>

                    <input type="text" id="password" className="form-control-two" required placeholder='пароль' />
                    <label htmlFor="password">Введите пароль</label>
                </div>     
                <button type='sumbit' className='btn-lk'>Войти</button>  
                <button type='sumbit' className='btn-lk'>Зарегистрироваться</button>      
              </form>
        </div>

      </div>
    </div>

  );
};
export default Lk;