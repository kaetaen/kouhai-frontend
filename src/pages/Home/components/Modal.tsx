function Modal () {
    return (
      <div className="text-center text-success" style={{width: '100%'}}>
        <div className="spinner-grow" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }

  export default Modal