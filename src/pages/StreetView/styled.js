import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: calc(100vw - ${({ theme }) => theme.layout.navbar}px);
  margin: 0 0 0 ${({ theme }) => theme.layout.navbar}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin: 0 0 ${({ theme }) => theme.layout.smallNavbar}px 0;
    height: calc(100vh - ${({ theme }) => theme.layout.smallNavbar}px);
    width: 100vw;
  } ;
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
  padding: 25px;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.color.secondary} 0px 2px 8px 0px;
  background: ${({ theme }) => theme.color.primary};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    flex-direction: column;
  } ;
`;

export const Street = styled.div`
  height: 100%;
  width: 100vw;
  filter: invert(1);
`;

export const Map = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 999;
  gap: 20px;
  position: absolute;
  right: 25px;
  bottom: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    bottom: calc(${({ theme }) => theme.layout.smallNavbar}px + 25px);
  }
`;

export const StyledMap = styled(MapContainer)`
  height: 250px;
  width: 400px;
  border: 2px solid;
  border-radius: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    height: 200px;
    width: 300px;
  }
`;

export const ResultMap = styled(MapContainer)`
  height: 100%;
  width: 100vw;
`;

export const ResultField = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 25px;
  position: absolute;
  right: 25px;
  bottom: 25px;
  z-index: 999;
  padding: 20px;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.primary};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    bottom: calc(25px + ${({ theme }) => theme.layout.smallNavbar}px);
  }
`;
