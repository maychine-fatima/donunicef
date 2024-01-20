import { IonPage } from "@ionic/react";
import styled from "styled-components";

export const Page = styled(IonPage)`
    --background: #fff;
  .header {
    --background: #1cace4;
    color: white;
  }
  ion-card{
    height: 30rem;
    position:relative;
    ion-img{
        height: 200px;
        object-fit: cover;
    }
    .footer-card{
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        ion-button{
            ion-icon{
                margin-right:5px;
            }
            --background: transparent;
            color: #1cace4;
            --background-activated: transparent;
            --background-focused: transparent;
            --background-hover: transparent;
            --box-shadow: none;
        }
    }
  }
`;
