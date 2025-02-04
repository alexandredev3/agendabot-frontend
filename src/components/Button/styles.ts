import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: var(--color-secundary);
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: var(--color-title-in-primary);
  width: 100%;
  font-weight: 500;
  margin-top: 40px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#32264D')};
  }
`;
