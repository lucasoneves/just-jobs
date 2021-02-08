import React from 'react'
import styled from 'styled-components'

const WrapperFooter = styled.footer`
	background: #F2F2F2;
	padding: 15px;
`

const Title = styled.h2`
	font-size: 12px;
	color: #777;
	text-align: center;
`;

const Footer = () => {
	return (
		<WrapperFooter>
			<Title>Just Jobs</Title>
		</WrapperFooter>
	)
}

export default Footer