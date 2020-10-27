import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { useForm } from './../../hooks/useForm';
import { startLoginEmailPassword, startGoogleLogin } from './../../action/auth';
import {
  CButton,
  CCard,
  CCardBody,

  CCardGroup,
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

const Login = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        email: 'benito@avisystem.com',
        password: '123456'
    })

    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    }

    const handGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }




  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
        <CCol md="6">
            <CCardGroup>
            
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit = {handleLogin}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput 
                        type="text" 
                        name="email"
                        placeholder="Username" 
                        autoComplete="username" 
                        value={email}
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
                        name="password"
                        placeholder="Password" 
                        autoComplete="current-password" 
                        value={password}
                        onChange={handleInputChange} 
                        />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="12">
                        <CButton 
                            type="submit"
                            color="primary" 
                            block
                            disabled = {loading} 
                            >Login</CButton>
                      </CCol>                      
                    </CRow>

                    <CRow>
                      <CCol xs="12">

                      <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div
                        className="google-btn"
                        onClick = {handGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>


                      </CCol>                   

                    </CRow>

                    <CRow>
                      <CCol xs="6">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right p-2">
                        <Link 
                          to="/register"
                          className="link">
                          Register Now!     
                        </Link>
                      </CCol>
                    </CRow>
                  
                  </CForm>
                </CCardBody>                
              </CCard>             

            </CCardGroup> 
            
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
