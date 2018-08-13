import React from 'react';
import $ from 'jquery';

import '../../CSS/global.css';
import '../../CSS/Body.css';
import Splash from '../Splash';
import About from '../About';
import Javascript from '../Javascript';
import Skills from '../Skills';
import Php from '../Php';

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    let offset = 600;
    let $document = $(document);
    let jsSection = $('#jsImage');
    let phpSection = $('#phpImage');
    let jsOffset = jsSection.offset().top;
    let phpOffset = phpSection.offset().top;

    $document.on('scroll', function() {
      let scrollTop = $document.scrollTop();

      if ((scrollTop+offset) >= jsOffset) {
        $('.Javascript .image img').css({
          'transform' : 'translateX(0)'
        });
      }

      if ((scrollTop+offset) >= phpOffset) {
        $('.Php .image img').css({
          'transform' : 'translateX(0)'
        });
      }


      $('.Splash .info').css({
        'transform' : 'translate(0px, '+ scrollTop / 4 +'%)'
      });

      $('.Splash img.layer2').css({
        'transform' : 'translate(0px, '+ scrollTop / 11 +'%)'
      });

      $('.Splash img.layer3').css({
        'transform' : 'translate(0px, '+ scrollTop / 7 +'%)'
      });
    })
  }

  render(){
    const { onRouteChange, classToggle } = this.props;
    return (
      <div className="Body">
        <Splash classToggle={classToggle} onRouteChange={onRouteChange}/>
        <About classToggle={classToggle} onRouteChange={onRouteChange}/>
        <Javascript classToggle={classToggle} onRouteChange={onRouteChange}/>
        <Skills classToggle={classToggle} onRouteChange={onRouteChange}/>
        <Php classToggle={classToggle} onRouteChange={onRouteChange}/>
      </div>
    );
  }
}

export default Body;
