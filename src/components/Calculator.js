import '../Calculator.css';

const Calculator = ( {input, handleClick, handleClear, handleResult} ) => {
    return(
        <div className='container'>
        <div className='container-calculator mx-auto d-block rounded'>
          <div className='row mt-3'>
            <div className='col-12 container-result rounded text-end mx-auto d-block'>{input}</div>
          </div>
          <div className='row mt-3'>
            <div className='col-1 d-flex justify-content-center align-items-center'>
              <button type="button" className="btn btn-primary btn-sm rounded" onClick={handleClick}>1</button>
            </div>
            <div className='col-1 d-flex justify-content-center align-items-center'>
            < button type="button" className="btn btn-primary btn-sm rounded" onClick={handleClick}>2</button>
            </div>
            <div className='col-1 d-flex justify-content-center align-items-center'>
              <button type="button" className="btn btn-primary btn-sm rounded" onClick={handleClick}>3</button>
            </div>
            <div className='col-1 d-flex justify-content-center align-items-center'>
              <button type="button" className="btn btn-success btn-sm rounded" onClick={handleClick}>+</button>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-1 d-flex justify-content-center align-items-center'>
              <button type="button" className="btn btn-primary btn-sm rounded" onClick={handleClick}>4</button>
            </div>
            <div className='col-1 d-flex justify-content-center align-items-center'>
            < button type="button" className="btn btn-primary btn-sm rounded" onClick={handleClick}>5</button>
            </div>
            <div className='col-1 d-flex justify-content-center align-items-center'>
              <button type="button" className="btn btn-primary btn-sm rounded" onClick={handleClick}>6</button>
            </div>
            <div className='col-1 d-flex justify-content-center align-items-center'>
              <button type="button" className="btn btn-success btn-sm rounded" onClick={handleClick}>-</button>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-1 d-flex justify-content-center align-items-center'>
              <button type="button" className="btn btn-primary btn-sm rounded" onClick={handleClick}>7</button>
            </div>
            <div className='col-1 d-flex justify-content-center align-items-center'>
            < button type="button" className="btn btn-primary btn-sm rounded" onClick={handleClick}>8</button>
            </div>
            <div className='col-1 d-flex justify-content-center align-items-center'>
              <button type="button" className="btn btn-primary btn-sm rounded" onClick={handleClick}>9</button>
            </div>
            <div className='col-1 d-flex justify-content-center align-items-center'>
              <button type="button" className="btn btn-success btn-sm rounded" onClick={handleClick}>*</button>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-1 d-flex justify-content-center align-items-center'>
              <button type="button" className="btn btn-primary btn-sm rounded" onClick={handleResult}>=</button>
            </div>
            <div className='col-1 d-flex justify-content-center align-items-center'>
            < button type="button" className="btn btn-primary btn-sm rounded" onClick={handleClick}>0</button>
            </div>
            <div className='col-1 d-flex justify-content-center align-items-center'>
              <button type="button" className="btn btn-primary btn-sm rounded" onClick={handleClick}>.</button>
            </div>
            <div className='col-1 d-flex justify-content-center align-items-center'>
              <button type="button" className="btn btn-success btn-sm rounded" onClick={handleClick}>/</button>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-12 d-flex justify-content-center align-items-center'>
              <button type="button" className="btn btn-primary btn-lg rounded" onClick={handleClear}>Clear</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Calculator;