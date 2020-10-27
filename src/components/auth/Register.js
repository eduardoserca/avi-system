import React from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { useForm } from './../../hooks/useForm';
import { setError, removeError } from './../../action/ui';
import { startRegisterWithEmailPasswordName } from './../../action/auth';



import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Register = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);

    const [ formValues, handleInputChange ] = useForm({
        name: 'Benito',
        email: 'benito@avisystem.com',
        password: '123456',
        password2: '123456'
    });

    const {name, email, password, password2} = formValues;

    const handRegister = (e) => {
        e.preventDefault();
        if (isFormValid()){
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
            
        } 
    }

    const isFormValid = () => {
        
        if(name.trim().length === 0) {
            dispatch(setError('Name is required'));            
            return false;
        }else if (!validator.isEmail(email)){
            dispatch(setError('Email is not valid'));            
            return false;
        }else if (password !== password2 || password.length < 5){
            dispatch(setError('Password should be at least 6 characters and match each other'));            
            return false;
        }

        dispatch(removeError());

        return true;
    }



  return (
    <div className="c-app c-default-layout flex-row align-items-center">

    {
        msgError &&
        (
            <div className="auth__alert-error">
                {msgError}
            </div>
        )
    }


      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit = {handRegister}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                        type="text" 
                        placeholder="Username" 
                        autoComplete="username" 
                        name="name"
                        value={name}
                        onChange={handleInputChange}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                        type="text" 
                        placeholder="Email" 
                        autoComplete="email" 
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                        type="password" 
                        placeholder="Password" 
                        autoComplete="new-password" 
                        name="password"                    
                        value={password}
                        onChange={handleInputChange}
                        />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                        type="password" 
                        placeholder="Repeat password" 
                        autoComplete="new-password" 
                        name="password2"
                        value={password2}
                        onChange={handleInputChange}
                        />
                  </CInputGroup>
                  <CButton 
                    color="success" 
                    type="submit"
                    block>Create Account</CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" >
                    <Link 
                        to="/login"
                        className="link">
                        Already registered?      
                    </Link>
                  </CCol>                  
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
