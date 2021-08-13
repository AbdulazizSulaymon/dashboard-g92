import styled from "styled-components";

const padding = "20px";

const ContainerWrapper = styled.div`
    display: flex;

    .sidebar{
        width: 300px;
        padding: ${padding};
        background-color: #123;
        height: 100vh;
        min-height: 500px;
        color: white !important;
        position: sticky;
        top: 0;

        a{
            color: white !important;
        }
        .MuiListItemIcon-root {
            color: white !important;
        }
    }

    .rightside{
        flex: 1;

        header{
            background-color: white;
            position: sticky;
            top: 0;
            z-index: 1000;

            .logo{
                height: 40px
            }
        }
        .content{
            padding: ${padding};
        }
    }
`;

export default ContainerWrapper;