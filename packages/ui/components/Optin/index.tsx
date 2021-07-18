import React from 'react'

const Optin: React.FunctionComponent = () => {
  const modal = () => {
    const modal = document.getElementById('modal')
    modal?.classList.toggle('is_open')
  }

  return (
    <div className="optin">
      <p>Want to be the first to know when we launch?</p>
      <button onClick={() => modal()}>Click Me</button>
      <div id="modal">
        <div className="wrapper">
          <h3>Enter Your Email</h3>
          <div className="clearfix">
            <div className="col-8" />
            <div className="col-3" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .optin {
          margin-top: 8%;
        }
        .optin p {
          font-size: 14px;
          font-weight: 100;
        }
        .optin button {
          color: #fff;
          padding: 6px 22px;
          text-transform: uppercase;
          font-family: 'Roboto Condensed', sans-serif;
          background-color: rgba(255, 255, 255, 0.1);
          border: solid 2px transparent;
          cursor: pointer;
        }
        .optin button:hover {
          border-color: rgba(255, 255, 255, 0.3);
        }

        #modal {
          position: fixed;
          top: 100px;
          left: 30%;
          width: 500px;
          background: #fff;
          transition: opacity 1s;
          box-shadow: 0 7px 2px #444;
          z-index: 99999;
          opacity: 0;
        }
        #modal.is_open {
        }
        #modal .wrapper {
          color: #444;
          text-align: center;
          padding: 30px;
        }
      `}</style>
    </div>
  )
}

export default Optin
