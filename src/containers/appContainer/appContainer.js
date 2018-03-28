import App from '../../components/App/App';

import { connect } from 'react-redux';
import * as actions from '../../actions';

export const mapStateToProps = state => ({
  movies: state.movies
});

export const mapDispatchToProps = dispatch => ({
  fetchMovies: (movies) => dispatch(actions.loadMovies(movies))
});

console.log(App)

export default connect(mapStateToProps, mapDispatchToProps)(App);