import React, { useState , useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import close from '../assets/close.svg'
import { useForceRefreshContext } from "./useRemount";


const ModalContext = React.createContext();

const useModal = (modalname ,beforeOpen, afterClose , refreshOnClose = false) => {

  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigate()
  const location = useLocation()
  
  
  // const history = useHist
  const date_now = Date.now()

  const openModal = () => {
    if(beforeOpen){
      beforeOpen()
    }
    setShowModal(true);
  };

  const closeModal = (default_close = true, others = () => null) => {
    setShowModal(false);
    if(afterClose){
      console.log('After working')
      if(refreshOnClose && default_close){
        // navigation(`${location.pathname}?refresh`)
        // console.log('Hello')
        // useForceRefresh?.update()
      }
      afterClose()
    }
  };

  const values = {
    closeModal,
    openModal,
    showModal,
    setShowModal,
  }

  const Modal = ({ children }) => { 

    

    return(

    <>
      {showModal && (
        <div>
          <div className="fixed z-30 inset-0 overflow-y-scroll">
            <div className="flex justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0">
            {/* <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"> */}
              {/* Modal Gray Overlay */}
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <div className="align-bottom bg-white rounded-lg text-left self-start shadow-xl  transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              {/* <div className="inline-block align-bottom bg-white rounded-lg text-left max-h-screen overflow-auto shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"> */}
                <div className="bg-white px-4 pt-5 pb-4 sm:px-8 sm:p-6 sm:pb-6 rounded-lg">
                  {/* Modal header */}
                  <div className="flex justify-between">
                    <div className="font-bold text-lg">{modalname}</div>
                    {/* Modal Close button */}
                    <div>
                        <button type="button" onClick={() => closeModal(false)} className=" bg-[#FAFBFC] rounded-full p-2">
                            <img src={close} className="" />
                        </button>
                    </div>
                  </div>
                  {/* Modal content */}
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
    
  )
};

  

  return {
    closeModal,
    openModal,
    showModal,
    setShowModal,
    Modal,
    ModalProvider: ({children}) => <ModalContext.Provider value={values}>
      <Modal>{children}</Modal>
    </ModalContext.Provider>
    
  };
};

const useModalContext = () => {
  const context = useContext(ModalContext);
  if(!context) throw Error(' Must be inside a Context Provider') ;
  return context;

}

export{
  useModal, 
  useModalContext
}



/**
 * 
 */
 


