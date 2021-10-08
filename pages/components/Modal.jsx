
import React, {useState} from 'react';
import DialogModal from '/pages/svgs/DialogModal'
import styles from '/styles/components/Modal.module.css'

export default function Modal() {
    const [showModal, setShowModal] = React.useState(true);
    return (
      <>
       {/**  <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open regular modal
        </button>
         <button
                      className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button> */}
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none">
                  {/*header*/}
                 
                  {/*body*/}
                   {/*footer*/}
                   <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b" style={{ 'borderColor':'transparent' }}>
                    <button
                      className={styles.close}
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      X
                    </button>
                   
                  </div>
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
              <DialogModal></DialogModal>
                    </p>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
  }