import styled from "styled-components";

export const HeaderMain = styled.header`

display: flex;
flex-direction: row;
justify-content: space-between;
box-sizing: border-box;
top: -2px;
padding: 1.5rem 1rem;
background-color: white;
gap: 2rem;

  z-index: 2;

border: 1px solid lightgray;
border-bottom: 0px;
>div {
  display:flex;
  flex-direction: row;
  gap:1rem;
  max-height: 48px;
  width: auto;
  align-self: center;
}
h1 {
  text-align: left;
  margin: 0;
  align-self: center;
  font-size: 2rem;
  font-weight: 600;
}
>section {
  flex-direction: column;
}
>p {
  font-size: 0.95rem;
  color: #555;
}
strong {
    font-weight:400;
}

@media screen and (max-width:1024px) {
  position: relative;
  top: initial;
flex-direction: row;
>div {
  max-height: auto;
  flex-direction: row;
}
}
@media screen and (max-width:768px) {
flex-direction: column;
h1 {
 
  font-size: 1.5rem;
}
>div {
  flex-direction: column;
  width: 100%;
  max-height: initial;
  z-index: initial;

}
@media screen and (max-width:500px) {
    gap: 1rem;
  flex-direction: column;
>div {
  flex-direction: column;

}
section p {
    padding: 0.5rem 0 1rem 0;
}
}


`;

export const CalendarContainer = styled.section`
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
  margin: 0;
`;

export const CalendarSectionContainer = styled.section`
  .MonthSection {
    display: block;
    padding: 1.1rem 1rem;
    border-bottom: 1px solid lightgray;
    position: sticky;
    top: 0px;

    background-color: #fff;
    z-index: 2 !important;
  }
  h3 {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 1024px) {
    .MonthSection {
      top: 0;
    }
  }
`;

export const MonthContainer = styled.section`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(7, 1fr);
  background-color: lightgray;
  border-bottom: 1px solid lightgray;
  gap: 1px;
  transition: all 0.3s;

  z-index: 1;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    button img {
      align-self: center;
      height: 2rem;
      width: 2rem;
    }
  }
`;

export const CalendarDayDiv = styled.div.attrs((props) => ({
  //days of week are between 0-6 but grid-cols start at 1
  dayOfWeek: props.dayOfWeek ? props.dayOfWeek + 1 : 1,
}))`
  @media screen and (min-width: 1024px) {
    :first-child {
      grid-column: ${(props) => props.dayOfWeek};
    }
  }

  button {
    box-sizing: border-box;
    font-family: inherit;
    min-height: 112px;
    height: 100%;
    width: 100%;

    text-align: left;
    background-color: white;
    border: none;
    margin: 0;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
      height: 100%;
      min-height: inherit;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 400;
    }
    aside {
      color: #666;
      font-weight: 500;
      font-size: 0.9rem;
    }

    p {
      font-size: 1.1rem;
      font-weight: 400;
      color: #555;
    }
    @media (hover: hover) {
      :hover {
        background-color: #e4eeff;
        cursor: pointer;
        h3,
        p {
          color: #005eca;
        }
      }
    }

    img {
      width: 1rem;
      height: 1rem;
      bottom: 0;
      opacity: 0.7;
    }
  }
`;

export const ModalGrid = styled.section`
  display: grid;
  gap: 4rem;
  grid-template-columns: 0.6fr 1fr;
  height: 100%;
  overflow-y: initial;
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.5;
  }
  hr {
    border: none;
    border-top: 1px solid lightgray;
    margin-top: 1rem;
    padding-top: 1rem;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
  @media screen and (max-width: 768px) {
    gap: 0;
    h1 {
      font-size: 2rem;
    }
  }
`;
export const WalkInstructions = styled.div`
  padding: 1.5rem;
  border-right: 1px solid lightgray;
`;

export const WalkGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  overflow-y: scroll;
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
  }

  hr {
    border: none;
    border-top: 1px solid lightgray;
    margin-top: 1rem;
    padding-top: 1rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.5;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
  @media screen and (max-width: 768px) {
    gap: 0;
    h1 {
      font-size: 2rem;
    }
  }
`;

export const VaccineCentre = styled.section`
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid lightgray;
  h3 {
    font-size: 1.75rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  .ButtonConstraint {
    display: flex;
    flex-wrap: wrap;

    margin: 1rem 0;
    gap: 1.5rem;
    a {
      flex: 1;
    }
  }

  @media screen and (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.25rem;
    }
  }
  section.slot {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
    p {
      border-radius: 4px;
      border: 1px solid #e8e8e8;
      color: black;
      font-weight: 600;
      font-size: 1rem;
      padding: 0.5rem;
      min-width: 80px;
      text-align: center;
    }

    @media screen and (max-width: 500px) {
      p {
        flex: 1;
      }
     
     
      }
    }
    @media screen and (max-width: 600px) {
        .ButtonConstraint {
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`;

export const WalkHeading = styled.section`
  border-bottom: 1px solid lightgray;
  padding: 1.5rem;

  display: flex;

  width: 100%;
  box-sizing: border-box;
  h1 {
    flex: 1;
    font-size: 2rem;
    align-self: center;
  }
`;

export const WalkContainer = styled.div`
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
  margin: 0;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: lightgray;
  border-bottom: 1px solid lightgray;
  gap: 1px;
  transition: all 0.3s;

  z-index: 1;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const WalkMessage = styled.div`
  display: flex;
  justify-content center;
  align-items: center;
  min-height 20vh;
  width: 100%;
  border: 1px solid lightgray;
  background: white;
  margin: 0;
  box-sizing: border-box;
`;

export const WalkBox = styled.button`
  box-sizing: border-box;
  font-family: inherit;
  min-height: 112px;
  height: 100%;
  width: 100%;
  flex: 1;
  min-width: 320px;

  text-align: left;
  background-color: white;
  border: none;
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (hover: hover) {
    :hover {
      background-color: #e4eeff;
      cursor: pointer;
      h3,
      p {
        color: #005eca;
      }
    }
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 0.25rem;
  }
  p {
    font-size: 1rem;
    color: #333;
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    min-height: inherit;
  }
  .Chevron {
    width: 1.25rem;
    height: 1.25rem;
    align-self: center;
  }
`;
