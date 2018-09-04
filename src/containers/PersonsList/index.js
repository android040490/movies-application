import React, { Component } from 'react';
import { connect } from 'react-redux';

import ControllPanel from 'components/ControllPanel';
import Pagination from 'components/Pagination';
import PersonPreview from 'components/PersonPreview';
import Preloader from 'components/Preloader';

import { getPersons } from 'redux-store/actions';
import { getUrlParamId, getPersonsPageData, getPersonsPageLoading } from 'redux-store/selectors';

class PersonsList extends Component {
    componentWillMount(){
        this.props.getPersons( this.props.pageId )
    }

    componentWillReceiveProps(nextProps){
        if ( this.props.pageId != nextProps.pageId){
            this.props.getPersons(nextProps.pageId)
        }
    }

    renderPersons(person){
        return (
            <div className="persons-page__list-item" key={person.id}>
                <PersonPreview person={person}/>
            </div>
        )
    }

    render() {
        return (
            <div>
                <ControllPanel>
                    <Pagination />
                </ControllPanel>
                <hr />
                <div className="wrapper">
                    <div className="persons-page ">
                        <h2 className="persons-page__title">Persons</h2>
                        <div className="persons-page__list">{ this.props.loading ? <Preloader/> : this.props.persons.map((person) => this.renderPersons(person))}</div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    getPersons
}

const mapStateToProps = ( state, ownProps ) => {
    return {
        persons : getPersonsPageData(state),
        loading : getPersonsPageLoading(state),
        pageId : getUrlParamId(ownProps)
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(PersonsList);