import Header from "../components/Header";
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    data: state.cartData.cartData
});

const mapDispatchToProps = dispatch => ({
// data: state.cartData.cartData
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
