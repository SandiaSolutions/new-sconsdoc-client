import * as React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getScon} from "../actions";
import Navigation from "./navigation/Navigation"
import SideMenu from "./navigation/SideMenu";

export interface Scon {
    adminStatus : boolean,
    email : string,
    firstName : string,
    lastName : string,
    middleInitial : string,
    netId : number,
    sconId : number,
    startDate : Date
}


interface State{
    sideMenuOn : boolean
}

interface Props{
    scon : any,
    getScon()
}


class Home extends React.Component<Props,State>{
    constructor(props){
        super(props);
        //@ts-ignore
        this.state={
            sideMenuOn : false
        }
    }

    componentWillMount(){
        this.props.getScon();
    }

    handleMenuClick = ()=>{
        console.log("clicked");
        this.setState({sideMenuOn : !(this.state.sideMenuOn)});
        console.log(this.state);
    };

    render(){
        const {sideMenuOn} = this.state;

        return (
            <div>
                <Navigation scon={this.props.scon} handleMenuClick={this.handleMenuClick.bind(this)}/>
                <SideMenu sideMenuOn={this.state.sideMenuOn}/>
            </div>
        )
    }
}




function mapStateToProps(state){
    return {
        scon: state.scon
    }
}

const mapDispatchToProps = (dispatch)=>{

    return bindActionCreators({getScon},dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);