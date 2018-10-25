import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListItem, ListItemInfo, LoadMore } from '../style';
import { actionCreators } from '../store';

class List extends PureComponent {
  render() {
    const { list, handleMoreList, page } = this.props;
    return (
      <Fragment>
        {
          list.map((item,index)=>(
            <Link to={'/detail/'+ item.get('id')} key={index}>
              <ListItem>
                <img className='list-pic' src={item.get('imgUrl')} alt=''/>
                <ListItemInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListItemInfo>
              </ListItem>
            </Link>
          ))
        }
        <LoadMore onClick={()=> handleMoreList(page)}>阅读更多</LoadMore>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home','articleList']),
    page: state.getIn(['home','articlePage'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleMoreList(page) {
      const action = actionCreators.loadMoreList(page);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);