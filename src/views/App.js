import React from 'react';
import { TabBar, Icon, NavBar, Card, Button } from 'antd-mobile';
import i1 from 'ASSET/images/abc/1.jpeg';
import i2 from 'ASSET/images/abc/2.jpeg';
import i3 from 'ASSET/images/abc/3.jpeg';
import i4 from 'ASSET/images/abc/4.jpg';
import i5 from 'ASSET/images/abc/5.jpg';
import i6 from 'ASSET/images/abc/6.jpg';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
            fullScreen: true
        };
    }

    renderContent(pageText) {
        if (pageText === 'a') {
            return (
                <div style={{ backgroundColor: 'white', height: '100%', paddingTop: '45px' }}>
                    <div style={{ float: 'left', width: '44%', height: '230px', marginLeft: '4%', position: 'relative', marginTop: '20px', border: '1px solid #ccc', textAlign: 'center', background: '#000' }}>
                        <img style={{ maxHeight: '200px', maxWidth: '100%' }} src={i1} />
                        <div style={{ height: '60px', position: 'absolute', bottom: '0', width: '100%', background: '#fff', textAlign: 'left', padding: '10px' }}>
                            <div>
                                <span>风一样的女子</span>
                            </div>
                            <div style={{ marginTop: '6px' }}>
                                <span style={{ color: '#fff', background: '#f60', padding: '0 4px 0 4px', borderRadius: '4px', marginRight: '8px', fontSize: '10px' }}>23岁</span>
                                <span style={{ float: 'right' }}>0.1km</span>
                            </div>
                        </div>
                        <span className="iconfont icon-ai-video" style={{ position: 'absolute', color: '#fff', top: '10px', right: '10px' }}></span>
                    </div>
                    <div style={{ float: 'left', width: '44%', height: '230px', marginLeft: '4%', position: 'relative', marginTop: '20px', border: '1px solid #ccc', textAlign: 'center', background: '#000' }}>
                        <img style={{ maxHeight: '200px', maxWidth: '100%' }} src={i2} />
                        <div style={{ height: '60px', position: 'absolute', bottom: '0', width: '100%', background: '#fff', textAlign: 'left', padding: '10px' }}>
                            <div>
                                <span>风一样的女子</span>
                            </div>
                            <div style={{ marginTop: '6px' }}>
                                <span style={{ color: '#fff', background: '#f60', padding: '0 4px 0 4px', borderRadius: '4px', marginRight: '8px', fontSize: '10px' }}>23岁</span>
                                <span style={{ float: 'right' }}>0.1km</span>
                            </div>
                        </div>
                        <span className="iconfont icon-ai-video" style={{ position: 'absolute', color: '#fff', top: '10px', right: '10px' }}></span>
                    </div>
                    <div style={{ float: 'left', width: '44%', height: '230px', marginLeft: '4%', position: 'relative', marginTop: '20px', border: '1px solid #ccc', textAlign: 'center', background: '#000' }}>
                        <img style={{ maxHeight: '200px', maxWidth: '100%' }} src={i3} />
                        <div style={{ height: '60px', position: 'absolute', bottom: '0', width: '100%', background: '#fff', textAlign: 'left', padding: '10px' }}>
                            <div>
                                <span>风一样的女子</span>
                            </div>
                            <div style={{ marginTop: '6px' }}>
                                <span style={{ color: '#fff', background: '#f60', padding: '0 4px 0 4px', borderRadius: '4px', marginRight: '8px', fontSize: '10px' }}>23岁</span>
                                <span style={{ float: 'right' }}>0.1km</span>
                            </div>
                        </div>
                        <span className="iconfont icon-yinpin" style={{ position: 'absolute', color: '#fff', top: '10px', right: '10px' }}></span>
                    </div>
                    <div style={{ float: 'left', width: '44%', height: '230px', marginLeft: '4%', position: 'relative', marginTop: '20px', border: '1px solid #ccc', textAlign: 'center', background: '#000' }}>
                        <img style={{ maxHeight: '200px', maxWidth: '100%' }} src={i4} />
                        <div style={{ height: '60px', position: 'absolute', bottom: '0', width: '100%', background: '#fff', textAlign: 'left', padding: '10px' }}>
                            <div>
                                <span>风一样的女子</span>
                            </div>
                            <div style={{ marginTop: '6px' }}>
                                <span style={{ color: '#fff', background: '#f60', padding: '0 4px 0 4px', borderRadius: '4px', marginRight: '8px', fontSize: '10px' }}>23岁</span>
                                <span style={{ float: 'right' }}>0.1km</span>
                            </div>
                        </div>
                        <span className="iconfont icon-yinpin" style={{ position: 'absolute', color: '#fff', top: '10px', right: '10px' }}></span>
                    </div>
                    <div style={{ float: 'left', width: '44%', height: '230px', marginLeft: '4%', position: 'relative', marginTop: '20px', border: '1px solid #ccc', textAlign: 'center', background: '#000' }}>
                        <img style={{ maxHeight: '200px', maxWidth: '100%' }} src={i5} />
                        <div style={{ height: '60px', position: 'absolute', bottom: '0', width: '100%', background: '#fff', textAlign: 'left', padding: '10px' }}>
                            <div>
                                <span>风一样的女子</span>
                            </div>
                            <div style={{ marginTop: '6px' }}>
                                <span style={{ color: '#fff', background: '#f60', padding: '0 4px 0 4px', borderRadius: '4px', marginRight: '8px', fontSize: '10px' }}>23岁</span>
                                <span style={{ float: 'right' }}>0.1km</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ float: 'left', width: '44%', height: '230px', marginLeft: '4%', position: 'relative', marginTop: '20px', border: '1px solid #ccc', textAlign: 'center', background: '#000' }}>
                        <img style={{ maxHeight: '200px', maxWidth: '100%' }} src={i6} />
                        <div style={{ height: '60px', position: 'absolute', bottom: '0', width: '100%', background: '#fff', textAlign: 'left', padding: '10px' }}>
                            <div>
                                <span>风一样的女子</span>
                            </div>
                            <div style={{ marginTop: '6px' }}>
                                <span style={{ color: '#fff', background: '#f60', padding: '0 4px 0 4px', borderRadius: '4px', marginRight: '8px', fontSize: '10px' }}>23岁</span>
                                <span style={{ float: 'right' }}>0.1km</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        if (pageText === 'b') {
            return (
                <div style={{ backgroundColor: 'white', height: '100%', paddingTop: '45px' }}>
                    <div style={{ height: '60px', width: '100%' }}>
                        <div style={{ width: '40px', marginTop: '10px', height: '40px', float: 'left', borderRadius: '20px', marginLeft: '10px', overflow: 'hidden' }}>
                            <img src={i5} alt="" />
                        </div>
                        <div style={{ width: '40px', marginTop: '10px', height: '40px', float: 'left', borderRadius: '20px', marginLeft: '10px', overflow: 'hidden' }}>
                            <img src={i6} alt="" />
                        </div>
                        <div style={{ width: '40px', marginTop: '10px', height: '40px', float: 'left', borderRadius: '20px', marginLeft: '10px', overflow: 'hidden' }}>
                            <img src={i3} alt="" />
                        </div>
                        <div style={{ width: '40px', marginTop: '10px', height: '40px', float: 'left', borderRadius: '20px', marginLeft: '10px', overflow: 'hidden' }}>
                            <img src={i2} alt="" />
                        </div>
                        <div style={{ width: '40px', marginTop: '10px', height: '40px', float: 'left', borderRadius: '20px', marginLeft: '10px', overflow: 'hidden' }}>
                            <img src={i4} alt="" />
                        </div>
                        <button type="primary" style={{ height: '30px', marginTop: '15px', padding: '0 10px 0 10px', color: '#fff', float: 'right', marginRight: '10px', background: '#108ee9', border: 'none', borderRadius: '8px' }}>去寻找</button>
                    </div>
                    <Card full>
                        <Card.Header
                            title={
                                <div style={{ marginLeft: '10px' }}>
                                    <div style={{ fontSize: '14px' }}>我是一只小绵羊</div>
                                    <div style={{ fontSize: '10px', color: '#999', marginTop: '8px' }}>晚上出来吃饭呗！</div>
                                </div>
                            }
                            thumb={<div style={{ width: '60px', height: '60px', borderRadius: '30px', border: '1px solid #999', overflow: 'hidden' }}><img width="100%" height="100%" src={i1} alt="" /></div>}
                            extra={<span>1分钟前</span>}
                        />
                    </Card>
                    <Card full>
                        <Card.Header
                            title={
                                <div style={{ marginLeft: '10px' }}>
                                    <div style={{ fontSize: '14px' }}>我是一只小绵羊</div>
                                    <div style={{ fontSize: '10px', color: '#999', marginTop: '8px' }}>晚上出来吃饭呗！</div>
                                </div>
                            }
                            thumb={<div style={{ width: '60px', height: '60px', borderRadius: '30px', border: '1px solid #999', overflow: 'hidden' }}><img width="100%" height="100%" src={i2} alt="" /></div>}
                            extra={<span>14:00</span>}
                        />
                    </Card>
                    <Card full>
                        <Card.Header
                            title={
                                <div style={{ marginLeft: '10px' }}>
                                    <div style={{ fontSize: '14px' }}>我是一只小绵羊</div>
                                    <div style={{ fontSize: '10px', color: '#999', marginTop: '8px' }}>晚上出来吃饭呗！</div>
                                </div>
                            }
                            thumb={<div style={{ width: '60px', height: '60px', borderRadius: '30px', border: '1px solid #999', overflow: 'hidden' }}><img width="100%" height="100%" src={i3} alt="" /></div>}
                            extra={<span>14:00</span>}
                        />
                    </Card>
                </div>
            );
        }
        if (pageText === 'c') {
            return (
                <div style={{ backgroundColor: '#f6f6f6', height: '100%', paddingTop: '45px' }}>
                    <Card full style={{ marginBottom: '10px' }}>
                        <Card.Header
                            title={
                                <div style={{ marginLeft: '10px' }}>
                                    <div style={{ fontSize: '14px' }}>我是一个大美女</div>
                                    <div style={{ fontSize: '12px', color: '#999', marginTop: '10px' }}>仁宝  0.1km</div>
                                </div>
                            }
                            thumb={
                                <div style={{ width: '60px', height: '60px', overflow: 'hidden' }}><img width="100%" height="100%" src={i1} alt="" /></div>
                            }
                            extra={<span style={{ fontSize: '12px' }}>1分钟前</span>}
                        />
                        <Card.Body>
                            <div>不看颜值不看脸，给你我最真实的声音</div>
                            <div style={{ marginTop: '10px', padding: '10px', background: '#ccc', borderRadius: '4px' }}><span className="iconfont icon-huatong"></span></div>
                        </Card.Body>
                        <Card.Footer content={<div style={{ height: '20px', width: '' }}>
                            <div style={{ width: '20px', height: '20px', borderRadius: '10px', marginRight: '10px', float: 'left', overflow: 'hidden' }}>
                                <img src={i1} alt="" />
                            </div>
                            <div style={{ width: '20px', height: '20px', borderRadius: '10px', marginRight: '10px', float: 'left', overflow: 'hidden' }}>
                                <img src={i1} alt="" />
                            </div>
                            <div style={{ width: '20px', height: '20px', borderRadius: '10px', marginRight: '10px', float: 'left', overflow: 'hidden' }}>
                                <img src={i1} alt="" />
                            </div>
                            <span>666条评论</span>
                        </div>} extra={<div><span className="iconfont icon-xinxi"></span></div>} />
                    </Card>
                    <Card full style={{ marginBottom: '10px' }}>
                        <Card.Header
                            title={
                                <div style={{ marginLeft: '10px' }}>
                                    <div style={{ fontSize: '14px' }}>我是一个大美女</div>
                                    <div style={{ fontSize: '12px', color: '#999', marginTop: '10px' }}>仁宝  0.1km</div>
                                </div>
                            }
                            thumb={
                                <div style={{ width: '60px', height: '60px', overflow: 'hidden' }}><img width="100%" height="100%" src={i2} alt="" /></div>
                            }
                            extra={<span style={{ fontSize: '12px' }}>10分钟前</span>}
                        />
                        <Card.Body>
                            <div>来一个靓照，么么哒</div>
                            <div>
                                <div style={{ width: '48px', height: '48px', overflow: 'hidden', marginLeft: '10px', float: 'right' }}>
                                    <img width="100%" height="100%" src={i3} alt="" />
                                </div>
                                <div style={{ width: '48px', height: '48px', overflow: 'hidden', marginLeft: '10px', float: 'right' }}>
                                    <img width="100%" height="100%" src={i3} alt="" />
                                </div>
                                <div style={{ width: '48px', height: '48px', overflow: 'hidden', marginLeft: '10px', float: 'right' }}>
                                    <img width="100%" height="100%" src={i3} alt="" />
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer content={<div style={{ height: '20px', width: '' }}>
                            <div style={{ width: '20px', height: '20px', borderRadius: '10px', marginRight: '10px', float: 'left', overflow: 'hidden' }}>
                                <img src={i1} alt="" />
                            </div>
                            <div style={{ width: '20px', height: '20px', borderRadius: '10px', marginRight: '10px', float: 'left', overflow: 'hidden' }}>
                                <img src={i1} alt="" />
                            </div>
                            <div style={{ width: '20px', height: '20px', borderRadius: '10px', marginRight: '10px', float: 'left', overflow: 'hidden' }}>
                                <img src={i1} alt="" />
                            </div>
                            <span>666条评论</span>
                        </div>} extra={<div><span className="iconfont icon-xinxi"></span></div>} />
                    </Card>
                    <Card full style={{ marginBottom: '10px' }}>
                        <Card.Header
                            title={
                                <div style={{ marginLeft: '10px' }}>
                                    <div style={{ fontSize: '14px' }}>我是一个大美女</div>
                                    <div style={{ fontSize: '12px', color: '#999', marginTop: '10px' }}>仁宝  0.1km</div>
                                </div>
                            }
                            thumb={
                                <div style={{ width: '60px', height: '60px', overflow: 'hidden' }}><img width="100%" height="100%" src={i2} alt="" /></div>
                            }
                            extra={<span style={{ fontSize: '12px' }}>10分钟前</span>}
                        />
                        <Card.Body>
                            <div>来一个靓照，么么哒</div>
                            <div>
                                <div style={{ width: '48px', height: '48px', overflow: 'hidden', marginLeft: '10px', float: 'right' }}>
                                    <img width="100%" height="100%" src={i3} alt="" />
                                </div>
                                <div style={{ width: '48px', height: '48px', overflow: 'hidden', marginLeft: '10px', float: 'right' }}>
                                    <img width="100%" height="100%" src={i3} alt="" />
                                </div>
                                <div style={{ width: '48px', height: '48px', overflow: 'hidden', marginLeft: '10px', float: 'right' }}>
                                    <img width="100%" height="100%" src={i3} alt="" />
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer content={<div style={{ height: '20px', width: '' }}>
                            <div style={{ width: '20px', height: '20px', borderRadius: '10px', marginRight: '10px', float: 'left', overflow: 'hidden' }}>
                                <img src={i1} alt="" />
                            </div>
                            <div style={{ width: '20px', height: '20px', borderRadius: '10px', marginRight: '10px', float: 'left', overflow: 'hidden' }}>
                                <img src={i1} alt="" />
                            </div>
                            <div style={{ width: '20px', height: '20px', borderRadius: '10px', marginRight: '10px', float: 'left', overflow: 'hidden' }}>
                                <img src={i1} alt="" />
                            </div>
                            <span>666条评论</span>
                        </div>} extra={<div><span className="iconfont icon-xinxi"></span></div>} />
                    </Card>
                    <Card full style={{ marginBottom: '10px' }}>
                        <Card.Header
                            title={
                                <div style={{ marginLeft: '10px' }}>
                                    <div style={{ fontSize: '14px' }}>我是一个大美女</div>
                                    <div style={{ fontSize: '12px', color: '#999', marginTop: '10px' }}>仁宝  0.1km</div>
                                </div>
                            }
                            thumb={
                                <div style={{ width: '60px', height: '60px', overflow: 'hidden' }}><img width="100%" height="100%" src={i2} alt="" /></div>
                            }
                            extra={<span style={{ fontSize: '12px' }}>10分钟前</span>}
                        />
                        <Card.Body>
                            <div>来一个靓照，么么哒</div>
                            <div>
                                <div style={{ width: '48px', height: '48px', overflow: 'hidden', marginLeft: '10px', float: 'right' }}>
                                    <img width="100%" height="100%" src={i3} alt="" />
                                </div>
                                <div style={{ width: '48px', height: '48px', overflow: 'hidden', marginLeft: '10px', float: 'right' }}>
                                    <img width="100%" height="100%" src={i3} alt="" />
                                </div>
                                <div style={{ width: '48px', height: '48px', overflow: 'hidden', marginLeft: '10px', float: 'right' }}>
                                    <img width="100%" height="100%" src={i3} alt="" />
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer content={<div style={{ height: '20px', width: '' }}>
                            <div style={{ width: '20px', height: '20px', borderRadius: '10px', marginRight: '10px', float: 'left', overflow: 'hidden' }}>
                                <img src={i1} alt="" />
                            </div>
                            <div style={{ width: '20px', height: '20px', borderRadius: '10px', marginRight: '10px', float: 'left', overflow: 'hidden' }}>
                                <img src={i1} alt="" />
                            </div>
                            <div style={{ width: '20px', height: '20px', borderRadius: '10px', marginRight: '10px', float: 'left', overflow: 'hidden' }}>
                                <img src={i1} alt="" />
                            </div>
                            <span>666条评论</span>
                        </div>} extra={<div><span className="iconfont icon-xinxi"></span></div>} />
                    </Card>
                </div>
            );
        }
    }

    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>

                <NavBar
                    style={{ position: 'absolute', top: 0, zIndex: 2, width: '100%' }}
                    mode="dark"
                    leftContent={<div className="iconfont icon-wo"></div>}
                    rightContent={[
                        <Icon key="0" type="search" style={{ width: '18px' }} />
                        // <Icon key="1" type="ellipsis" />
                    ]}
                >{this.state.selectedTab === 'blueTab' ? '近近热线' : (this.state.selectedTab === 'redTab' ? '聊天' : '小事')}</NavBar>

                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="热线"
                        key="热线"
                        icon={<div className="iconfont icon-xihuan"></div>}
                        selectedIcon={<div className="iconfont icon-xihuan-fill"></div>}
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab'
                            });
                        }}
                        data-seed="logId"
                    >
                        {this.renderContent('a')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<div className="iconfont icon-xinxi"></div>}
                        selectedIcon={<div className="iconfont icon-xinxi-fill"></div>}
                        title="聊天"
                        key="聊天"
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab'
                            });
                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('b')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<div className="iconfont icon-star"></div>}
                        selectedIcon={<div className="iconfont icon-star-fill"></div>}
                        title="小事"
                        key="小事"
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab'
                            });
                        }}
                    >
                        {this.renderContent('c')}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
export default App;