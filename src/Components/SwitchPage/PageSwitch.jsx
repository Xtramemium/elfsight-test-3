import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SwitchWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

const SwitchButton = styled.button`
    background-color: #3498db;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
`;

export const PageSwitch = ({ onPrevPage, onNextPage, currentPage, totalPages }) => {
	return (
		<SwitchWrapper>
			<SwitchButton onClick={onPrevPage} disabled={currentPage === 1}>
				<FaArrowLeft /> Предыдущая
			</SwitchButton>
			<span>{`Страница ${currentPage} из ${totalPages}`}</span>
			<SwitchButton onClick={onNextPage} disabled={currentPage === totalPages}>
				Следующая <FaArrowRight />
			</SwitchButton>
		</SwitchWrapper>
	);
};