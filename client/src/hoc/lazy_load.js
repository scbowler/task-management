import React, { Component, Fragment } from 'react';
import Loading from '../components/general/loading';

const lazy = {};

export default (options) => {
    if (!lazy[options.name]) {
        lazy[options.name] = class extends Component {
            constructor(props) {
                super(props);

                this.unMounting = false;
                this.defaultLoading = <Loading />;

                const { loading } = options;

                if (typeof loading === 'object' && loading.hasOwnProperty('props')) {
                    this.defaultLoading = loading;
                }

                this.state = {
                    LazyComponent: null,
                    loading: this.defaultLoading
                }
            }

            async componentDidMount() {
                const C = await options.load();

                if (!this.unMounting) {
                    this.setState({
                        LazyComponent: C.default
                    });
                }
            }

            componentWillUnmount() {
                this.unMounting = true;
            }

            render() {
                const { LazyComponent, loading } = this.state;

                return (
                    <Fragment>
                        {LazyComponent
                            ? <LazyComponent {...this.props} />
                            : loading
                        }
                    </Fragment>
                );
            }
        }
    }

    return lazy[options.name];
}
