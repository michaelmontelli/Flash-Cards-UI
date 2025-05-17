import styled from 'styled-components';

const FlashCardChangeBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid gray;
`;

export function FlashCardChangeBar() {
  return (
    <FlashCardChangeBarWrapper>
      <div>{'< Previous'}</div>
      <div>{'Show Answer'}</div>
      <div>{'Next >'}</div>
    </FlashCardChangeBarWrapper>
  );
}
