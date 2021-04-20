import styled from '@emotion/styled'
import React from 'react'

interface FooterProps {

}

const Footer: React.FC<FooterProps> = (Props) => {
    return <FooterUiView classname="p-3 bg-danger text-white text-center">
        <div className="container">
        <div classname="footer_icons d-flex justify-content-around align-items-center">
        <div><i className="fas fa-home"></i></div>
        <div>
        <i className = "fas fa-briefcase mr-5"></i>
        <i className = "fas fa-shopping-cart mr-5"></i>
        <i className = "fas fa-user float-"></i>
        </div>
        </div>
        </div>
    </FooterUiView>

}

const FooterUiView = styled.header

    .footer_icons i {
        
        font-size: 28px;
 

       }
    


export default Footer