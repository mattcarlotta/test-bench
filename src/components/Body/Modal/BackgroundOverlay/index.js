/* istanbul ignore file */
import styled from "styled-components";

export default styled.div`
	opacity: 1;
	transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 3;
	position: fixed;
	touch-action: none;
	background-color: rgba(0, 0, 0, 0.65);
	-webkit-tap-highlight-color: transparent;
`;
