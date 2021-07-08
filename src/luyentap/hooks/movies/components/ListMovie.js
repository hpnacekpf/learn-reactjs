import React from 'react'
import {Row, Col} from 'antd'
import CardMovie from './CardMovie'

const ListMovie = ({movie}) => {
  // console.log(movie)
  return (
    <Row style={{margin: '30px 0'}}>
      <Col span={20} offset={2}>
        <h2 style={{textAlign: 'center'}}>Danh sách phim yêu thích</h2>
        <Row>
          {movie.map((item, index) => (
            <Col span={6} key={index}>
              <CardMovie list={item}/>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default React.memo(ListMovie)