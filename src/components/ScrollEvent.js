import React, { Component } from 'react';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour';
import PageFive from './PageFive';
import PageSix from './PageSix';
import PageSeven from './PageSeven';
import Svg from './Svg';
// Import the other Page components

class ScrollEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0, // Initially display PageOne
      totalPages: 7,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.scrollFactor = 1;
  }

  componentDidMount() {
    window.addEventListener('wheel', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScroll);
  }

  handleScroll(event) {
    if (event.deltaY > 0) {
      this.changePage(1); // Scroll down, show the next page
    } else if (event.deltaY < 0) {
      this.changePage(-1); // Scroll up, show the previous page
    }
  }

  changePage(delta) {
    this.setState((prevState) => {
      const { currentPage, totalPages } = prevState;
      let nextPage = currentPage + delta * this.scrollFactor;

      if (nextPage < 0) {
        nextPage = 0;
      } else if (nextPage >= totalPages) {
        nextPage = totalPages - 1;
      }

      return { currentPage: nextPage };
    });
  }

  render() {
    const { currentPage } = this.state;

    return (
      <>
        <Svg />
        <div>
          {currentPage === 0 && <PageOne />}
          {currentPage === 1 && <PageTwo />}
          {currentPage === 2 && <PageThree />}
          {currentPage === 3 && <PageFour />}
          {currentPage === 4 && <PageFive />}
          {currentPage === 5 && <PageSix />}
          {currentPage === 6 && <PageSeven />}

        </div>
      </>
    );
  }
}

export default ScrollEvent;
