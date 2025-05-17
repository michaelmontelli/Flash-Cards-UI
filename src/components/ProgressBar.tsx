import styled from 'styled-components';

const ProgressBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid gray;
`;

export function ProgressBar() {
  return (
    <>
      <ProgressBarWrapper>
        <div>Progress</div>
        <div>25%</div>
        <div>5 of 20</div>
      </ProgressBarWrapper>
    </>
  );
}
