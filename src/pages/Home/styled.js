import styled from 'styled-components';

//import { theme } from '@sitecore-search/ui';
//background-image: url(https://www.sentosa.com.sg/-/media/sentosa/islander/islander-new-campaign-hero-banner.jpg?revision=29dd072e-1e15-4c0c-a4e1-aed44eb44361);

export const HeroContainer = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
`;

export const HeroRow = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

export const HeroWrapper = styled.div`
  max-width: 1920px;
  margin: auto;
  background-image: url(https://corp.nhg.com.sg/Documents/FY22%20FY23%20NHG%20Corporate%20Yearbook%20Digital/assets/images/banner1.jpg);
  min-height: 324px;
  height: 324px;
  background-position: center center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const Darken = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,.3);
`;

export const HeroContentWrapper = styled.div`
    max-width: 1056px;
    margin: 0 auto;
    height: 324px;
    position: relative;

    h1 {
        color: #fff;
    }
`;

export const HeroContentRow = styled.div`
    min-height: 324px;
    margin: 0;
    display: table;
`;

export const HeroAlignCenter = styled.div`
    display: table-cell;
    vertical-align: middle;
    max-width: 66.66667%;
`;