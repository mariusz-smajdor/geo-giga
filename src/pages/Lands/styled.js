import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const Map = styled(MapContainer)`
  height: 100vh;
  width: 100%;
  background: #7fcdff;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 100%;
    margin-left: 0;
    height: calc(100vh - ${({ theme }) => theme.layout.smallNavbar}px);
  } ;
`;

export const CountryPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  height: ${({ theme }) => theme.layout.navbar}px;
  padding: 0 20px;
  background: ${({ theme }) => theme.color.primary};
`;

export const Flag = styled.img`
  max-height: 50px;
  box-shadow: #333 0px 2px 8px 0px;
`;

export const Info = styled.p`
  font-size: 1.5rem;
`;
