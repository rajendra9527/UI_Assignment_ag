import styled from '@emotion/styled'
import React from 'react'
import PageFooter from './Footer'
import PageHeader from './Header'

interface LayoutProps {

}

const Layout: React.FC<LayoutProps> = (props) => {
    return <LayoutUi className="ui__page" >
        <PageHeader />
        < div className = "ui__page__content" >
            { props.children }
            < /div>
            < PageFooter />
            </PageLayoutUi>
}

const LayoutUi = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;

    .ui__page__content {
        flex:1;
        height: 100%;
        overflow-y: auto;
    }

`

export default Layout
