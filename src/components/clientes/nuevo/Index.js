import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CForm,
    CRow,
    CCol,
    CFormGroup,
    CLabel,
    CInput,
    CSelect,
    CButton
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilBackspace } from '@coreui/icons'

const Index = (props) => {

    

    const Dispatch = useDispatch();
    const {loading} = useSelector(state => state.ui);
    

    const handleAddCustomer = (e) => {
        e.preventDefault();
        console.log("handleAddCustomer")
    }

    const handleCancel = () => {
        const btnReset = document.getElementById("btnReset");     
        btnReset.click();
        props.history.push("/clientes");

    }

    return (
        <>
        <CCard>
            <CCardHeader>
                Nuevo Cliente
            </CCardHeader>
            <CCardBody>
            <CForm onSubmit = {handleAddCustomer}>
                
                <CRow>
                    <CCol xs="6">
                        <CFormGroup>
                            <CLabel htmlFor="tipoDocumento">Tipo de documento</CLabel>
                            <CSelect custom name="tipoDocumento" id="tipoDocumento">
                                <option value="DNI">DNI</option>
                                <option value="RUC">RUC</option>
                            </CSelect>
                        </CFormGroup>
                    </CCol>
                    <CCol xs="6">
                        <CFormGroup>
                            <CLabel htmlFor="numeroDocumento">Número de documento</CLabel>
                            <CInput id="numeroDocumento" placeholder="Ingrese número documento" required />
                        </CFormGroup>
                    </CCol>
                </CRow>

                <CRow>
                    <CCol xs="12">
                        <CFormGroup>
                            <CLabel htmlFor="nombre">Nombre</CLabel>
                            <CInput id="nombre" placeholder="Ingrese nombre" required />
                        </CFormGroup>
                    </CCol>
                </CRow>

                <CRow>
                    <CCol xs="12">
                        <CFormGroup>
                            <CLabel htmlFor="direccion">Dirección</CLabel>
                            <CInput id="direccion" placeholder="Ingrese dirección" />
                        </CFormGroup>
                    </CCol>
                </CRow>

                <CRow>
                      <CCol md="3">                                                
                        <CButton 
                            type="submit"  
                            color="primary"
                            block
                            disabled = {loading} ><CIcon name="cil-scrubber" /> Guardar</CButton>

                      </CCol>   
                      <CCol md="3">                                                
                                                
                        <CButton 
                            id= "btnReset"
                            name= "btnReset"
                            type="reset" 
                            color="danger"
                            block><CIcon name="cil-ban" /> Limpiar</CButton>

                      </CCol>   

                      <CCol md="3">                                                
                                                
                        <CButton 
                            color="secondary"
                            block
                            onClick={handleCancel}><CIcon content={cilBackspace} /> Cancelar</CButton>

                      </CCol>  
                      

                    </CRow>

            </CForm>

                


            </CCardBody>
        </CCard>

    </>

    )
}

export default Index;
