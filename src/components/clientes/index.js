import React from 'react';
import { Link } from "react-router-dom";
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CButton,
    CForm,
    CFormGroup,
    CInput,
    CInputGroup,
    CInputGroupAppend,
    CInputGroupPrepend,
    CLabel,
    CSelect,

} from '@coreui/react';

import CIcon from '@coreui/icons-react';
import { cilPlus } from '@coreui/icons'
import usersData from '../../views/users/UsersData'

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}
const fields = ['name', 'registered', 'role', 'statusXX']


const Index = () => {
    return (
        <>
            <CCard>
                <CCardHeader>
                    Gestión de clientes
                </CCardHeader>
                <CCardBody>

                    <CRow>
                        <CCol>
                            <Link to="/clientes/nuevo" className="btn btn-primary">
                                <CIcon content={cilPlus} /> &nbsp;Nuevo
                            </Link>

                        </CCol>                        
                    </CRow>
                
                    <br/>

                    <CDataTable
                        items={usersData}
                        fields={fields}
                        columnFilter
                        tableFilter
                        footer
                        itemsPerPageSelect
                        itemsPerPage={5}
                        hover
                        sorter
                        striped
                        bordered
                        size="sm"
                        
                        pagination
                        scopedSlots={{
                            'statusXX':
                                (item) => (
                                    <td>
                                        <CBadge color={getBadge(item.status)}>
                                            {item.status}
                                        </CBadge>
                                    </td>
                                )
                        }}
                    />

                </CCardBody>
            </CCard>

        </>
    )
}

export default Index
