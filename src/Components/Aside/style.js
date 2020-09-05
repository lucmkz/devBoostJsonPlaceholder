import styled from 'styled-components';

export const Aside = styled.aside`
    background: #292F3F;
    width: 205px;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;


  img{
    margin-top: 30px;
  }

  div{
    margin-top: 40px;
  }

  a {
    text-decoration: none;
    color: #CFD7E3;
    font-size: 18px;
    width: 164px;
    height: 40px;
    background: #373E4E;
    padding: 8px 40px;
    border-radius: 10px;

    & + a {
      margin-top: 18px;
    }
  }
`;
