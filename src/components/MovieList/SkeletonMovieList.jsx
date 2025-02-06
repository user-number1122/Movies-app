// src/components/SkeletonMovieList/SkeletonMovieList.jsx
import React from 'react';
import { Row, Col, Skeleton, Card } from 'antd';
import styles from './MovieList.module.scss';

const SkeletonMovieList = ({ isMobile, gutterSize }) => {
  return (
    <Row gutter={gutterSize} justify="start" className={styles.movieList}>
      {[...Array(6)].map((_, index) => (
        <Col xs={24} sm={12} key={index} style={{ boxSizing: 'border-box' }}>
          <Card
            hoverable
            style={{
              width: isMobile ? '388px' : '451px', // Устанавливаем ширину для мобильных устройств
              height: isMobile ? '245px' : '279px', // Устанавливаем высоту для мобильных устройств
              maxWidth: isMobile ? '388px' : '451px',
              maxHeight: isMobile ? '245px' : '279px',
              padding: '0',
              display: 'flex',
              borderRadius: '0',
              position: 'relative',
            }}
            bodyStyle={{
              display: 'flex',
              padding: '0',
              width: '100%',
              height: '100%',
            }}
          >
            {isMobile ? (
              <>
                <div style={{ display: 'flex' }}>
                  <Skeleton.Image
                    active
                    style={{
                      width: isMobile ? '60px' : '183px',
                      height: isMobile ? '91px' : '279px',
                      overflow: 'hidden',
                      margin: isMobile ? '6px 0 0 10px' : '0',
                      padding: '0',
                    }}
                  />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '100px',
                    width: '200px',
                    height: '30px',
                  }}
                >
                  <Skeleton paragraph={{ rows: 2 }} title={false} />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '73px',
                    right: '51px',
                    width: '250px',
                    height: '30px',
                  }}
                >
                  <Skeleton paragraph={{ rows: 1 }} title={false} />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '110px',
                    right: '26px',
                    width: '350px',
                    height: '30px',
                  }}
                >
                  <Skeleton paragraph={{ rows: 3 }} title={false} />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '210px',
                    left: '140px',
                    width: '380px',
                    height: '30px',
                  }}
                >
                  <Skeleton paragraph={{ rows: 1 }} title={false} />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Skeleton
                    active
                    paragraph={{ rows: 0 }}
                    title={false}
                    avatar={{ shape: 'circle' }} // Устанавливаем размер круга 30px
                  />
                </div>
              </>
            ) : (
              <>
                <Skeleton.Input
                  active
                  style={{
                    width: isMobile ? '60px' : '183px',
                    height: isMobile ? '91px' : '279px',
                    overflow: 'hidden',
                    margin: isMobile ? '6px 0 0 10px' : '0',
                    padding: '0',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '95px',
                    width: '150px',
                    height: '30px',
                  }}
                >
                  <Skeleton title={false} paragraph={{ rows: 2, width: '60px' }} />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '83px',
                    right: '45px',
                    width: '200px',
                    height: '30px',
                  }}
                >
                  <Skeleton paragraph={{ rows: 1 }} title={false} />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '120px',
                    right: '24px',
                    width: '220px',
                    height: '30px',
                  }}
                >
                  <Skeleton paragraph={{ rows: 3 }} title={false} />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '240px',
                    left: '200px',
                    width: '380px',
                    height: '30px',
                  }}
                >
                  <Skeleton paragraph={{ rows: 1 }} title={false} />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Skeleton
                    active
                    paragraph={{ rows: 0 }}
                    title={false}
                    avatar={{ shape: 'circle' }} // Устанавливаем размер круга 30px
                  />
                </div>
              </>
            )}
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default SkeletonMovieList;
