import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 64px;
  background: var(--color-primary);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Search = styled.div`
  margin-top: 12px;
  margin-right: 96px;


  > input {
    padding: 8px 8px;
    border: 0;
    border-radius: 2px;
    color: var(--color-title-in-primary);
    background: rgba(255, 255, 255, 0.15);

    &::placeholder {
      color: var(--color-title-in-primary);
    }
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

    > img {
      margin-right: 8px;
    }
  }
`;
