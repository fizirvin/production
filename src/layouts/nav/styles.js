import styled from '@emotion/styled'

export const UList = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;

  li {
    line-height: 11rem;
    position: relative;
  }

  a {
    display: block;
    color: #eee;
    padding: 0 1.4rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    transition: color 550ms;
  }

  a:hover {
    color: #eb3007;
  }

  @media (max-width: 850px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    display: none;
    flex-direction: column;
    align-items: initial;
    background-color: #191919;
    z-index: 1000;
    overflow-y: scroll;

    li {
      line-height: 6rem;
      width: 70%;
    }

    li:hover > ul {
      opacity: 1;
      visibility: visible;
      max-height: initial;
    }
  }
`
export const Btn = styled.div`
  margin: auto 0 auto auto;
  line-height: 1rem;
  padding: 1.3rem;
  display: inline-block;
  background-color: #eb3007;
  border: 2px solid #eb3007;
  border-radius: 5rem;
  transition: background-color 650ms;

  :hover {
    color: #eb3007;
    background-color: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 850px) {
    margin: 0 auto 0 0;
    line-height: initial;
  }
`

export const SubMenu = styled.ul`
  width: 20rem;
  display: block;
  position: absolute;
  border-top: 2.8px solid #eb3007;
  background-color: #191919;
  z-index: 100;
  top: 14rem;
  opacity: 0;
  visibility: hidden;
  transition: all 450ms ease;

  li {
    line-height: 4rem;
  }

  ::before {
    content: '';
    position: absolute;
    top: -2.4rem;
    left: 3rem;
    border: 1.1rem solid transparent;
    border-bottom-color: #eb3007;
  }

  ul {
    border-top: none;
    border-left: 2.8px solid #eb3007;
    top: 0;
    left: 135%;
  }

  ul::before {
    top: 0.9rem;
    left: -2.4rem;
    border: 1.1rem solid transparent;
    border-right-color: #eb3007;
  }

  li:hover > ul {
    top: 0;
    left: 100%;
  }

  @media (max-width: 850px) {
    position: initial;
    border: 3px solid transparent;
    border-left-color: #eb3007;
    margin-left: 1rem;
    max-height: 0;

    ::before {
      display: none;
    }
  }
`

export const Item = styled.li`
  :hover > ul {
    top: 8rem;
    opacity: 1;
    visibility: visible;
  }
`

export const ItemBtn = styled.div`
  margin: auto 0 auto auto;
  line-height: 1rem;
  padding: 1.3rem;
  display: inline-block;
  background-color: #eb3007;
  border: 2px solid #eb3007;
  border-radius: 5rem;
  transition: background-color 650ms;

  :hover {
    color: #eb3007;
    background-color: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 850px) {
    margin: 0 auto 0 0;
    line-height: initial;
  }
  :hover > ul {
    top: 5rem;
    opacity: 1;
    visibility: visible;
    transition: all 250ms ease;
  }
`
