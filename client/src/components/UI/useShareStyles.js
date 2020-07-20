
import { makeStyles  } from "@material-ui/core/styles";


const useSharedStyles = makeStyles(() => ({
  root: {
        background: "#3041D0",
        boxShadow: "1.5px 1.5px 1.5px rgba(0, 0, 0, 0.25)",
        borderRadius: "10px",
        color: "#fff",
        position: "relative",
   },

  text : {
    fontFamily: "IRANSans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "1.4rem",
    lineHeight: "24px",
  } ,
    contentBox : {
       background: '#FFFFFF' ,
        boxShadow: '1.5px 1.5px 1.5px rgba(0, 0, 0, 0.25)'  ,
        borderRadius: '10px'
    },

    button : {
       color :"#fff" ,
       borderColor:"#fff" ,
       width : 176 ,
       height : 40 ,
       marginBottom : 5 ,
       border: '1px solid #FFFFFF',
       padding :"1.5rem 2rem",
       boxShadow: '1.5px 1.5px 1.5px rgba(0, 0, 0, 0.25)' ,
       boxSizing: 'border-box' ,
       borderRadius: 3
     }
     ,
     greenButton : {
        backgroundColor: '#0AB571'
     } ,
     blueButton : {
       backgroundColor: '#334CD2'
     } ,
    buttonLabel: {
     fontFamily: 'IRANSans',
     fontStyle: 'normal',
     fontWeight: '500',
     fontSize: '15px',
     lineHeight: '25px',
    } ,
}))


export default useSharedStyles ;
