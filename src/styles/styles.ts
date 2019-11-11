import styled from 'styled-components';

interface ITextProps {
  fontSize: string
}

export const Title = styled.h1<ITextProps>`
  color: #F00;
  font-size: ${props => `${props.fontSize}px`};
  span {
    font-size: 12px
  };
`;

export const DivContainer = styled.div`
  display: 'flex'
`