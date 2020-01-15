/* istanbul ignore file */
import styled from "styled-components";
import Label from "./Label";

export default styled(Label)`
	color: rgb(0, 0, 0, 0.65);
	display: block;
	margin-bottom: 5px;
	font-size: 16px;

	& .tooltip {
		margin-left: 5px;

		svg {
			font-size: 16px;
			color: #bbb !important;
			position: relative;
			top: 0;
			left: 0;

			&:hover {
				color: #282c34 !important;
			}
		}
	}
`;
