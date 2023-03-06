import React from 'react';
import { StyledCard } from './styles';
const InfoCard = ({ icon, label, value, color, bgColor }) => {
  return (
    <StyledCard color={color} bgColor={bgColor}>
      <span>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </StyledCard>
  );
};

export default InfoCard;
