import styled from '@emotion/styled'
import React from 'react'

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = (props) => {
    return <HeaderUiView className="p-3 bg-primary text-white" >
        <h3>User List </h3>

}

const HeaderUiView = styled.header


export default Header