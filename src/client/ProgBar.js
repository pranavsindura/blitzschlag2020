import React from 'react';
import styled, {keyframes} from 'styled-components';
export default class ProgBar extends React.Component{
    render(){
        const animScroll = () => keyframes`
		from{
			width: ${this.props.a}%;
		}
		to {
			width: ${this.props.b}%;
		}
    `;
        const Bar = styled.div`
        background-color: #d70034;
        position: relative;
        height: 100%;
        z-index: 11;
        width: ${this.props.b}%;
        animation: ${(props) => animScroll(props)} 2s ease-in-out;
        animation-fill-mode: forwards;
    `;
        return(<Bar/>);
    }
}