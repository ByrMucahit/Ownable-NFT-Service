import styled from "styled-components";

export const ModalWrapper = styled.div`
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

  }
  
  .modal-content {
    width: 500px;
    background-color: #fff;
    border-radius: 6px;
    min-height: 300px;
    display: grid;
    grid-template-rows: 35px 1fr 50px;
    
    .modal-footer{
      display: flex;
      justify-content: space-around;
      background-color: var(--c-btn-background) ;
    }
  }
  
  .modal-header {
    padding-left: 20px;
    background-color: var(--c-btn-background) ;
    border-radius:  6px 6px  0 0;
    
    h4 {
      font-weight: bold;
      font-size: 1rem;
      color: var(--c-frame-background);
    }
  }
  
  .modal-header, .modal-footer {
    padding: 10px;
  }
  
  .modal-title {
    margin: 0;
  }
  
  .modal-body {
    padding: 10px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .button {
    display: flex;
  }
  
  
`;