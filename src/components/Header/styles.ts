import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 64px;
  background: var(--color-primary);

  -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.18);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-right: 16px;
  padding: 8px 8px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 4px;

  > input {
    border: 0;

    color: var(--color-title-in-primary);
    background: transparent;

    &::placeholder {
      color: var(--color-title-in-primary);
      opacity: 70%;
    }
  }

  > img {
    margin-right: 14px;
    margin-left: 14px;
  }
`;

export const Links = styled.div`
  display: flex;

  > a {
    display: flex;
    align-items: center;

    color: var(--color-title-in-primary);
    margin-top: 12px;
    text-decoration: none;
    margin-left: 20px;

    transition: opacity .2s;

    &:hover {
        opacity: .8;
    }

    > img {
      margin-right: 8px;

    }
  }
`;
